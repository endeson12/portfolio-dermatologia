import { useState, useEffect, useCallback } from 'react';
import { checkImageLoad, heroImageConfig } from '../utils/imageConfig';

export const useImageLoader = (imageUrls: string[], timeout: number = 10000) => {
  const [imageStates, setImageStates] = useState<{
    loaded: boolean[];
    errors: boolean[];
    loading: boolean[];
  }>({
    loaded: new Array(imageUrls.length).fill(false),
    errors: new Array(imageUrls.length).fill(false),
    loading: new Array(imageUrls.length).fill(true)
  });

  // Função otimizada para carregar uma imagem com retry automático
  const loadImageWithRetry = useCallback(async (url: string, maxRetries: number = heroImageConfig.maxRetries): Promise<boolean> => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Adicionar timeout mais curto para detectar falhas rapidamente
        const success = await Promise.race([
          checkImageLoad(url),
          new Promise<boolean>((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
          )
        ]);
        
        if (success) {
          return true;
        }
        
        // Aguardar um pouco antes de tentar novamente (delay progressivo)
        if (attempt < maxRetries) {
          const delay = Math.min(heroImageConfig.retryDelay * attempt, 5000); // Max 5s delay
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      } catch (error) {
        // Log apenas em desenvolvimento
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Tentativa ${attempt}/${maxRetries} falhou para ${url}:`, error);
        }
        
        if (attempt < maxRetries) {
          const delay = Math.min(heroImageConfig.retryDelay * attempt, 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    return false;
  }, [timeout]);

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const loadImages = async () => {
      if (!isMounted) return;
      
      const newStates = {
        loaded: new Array(imageUrls.length).fill(false),
        errors: new Array(imageUrls.length).fill(false),
        loading: new Array(imageUrls.length).fill(true)
      };

      // Atualizar estado inicial
      if (isMounted) {
        setImageStates(newStates);
      }

      // Carregar imagens com controle de cancelamento
      const imagePromises = imageUrls.map(async (url, index) => {
        if (!isMounted || abortController.signal.aborted) return;
        
        try {
          const success = await loadImageWithRetry(url);
          
          if (isMounted && !abortController.signal.aborted) {
            setImageStates(prev => ({
              ...prev,
              loaded: prev.loaded.map((loaded, i) => i === index ? success : loaded),
              errors: prev.errors.map((error, i) => i === index ? !success : error),
              loading: prev.loading.map((loading, i) => i === index ? false : loading)
            }));
          }
        } catch (error) {
          if (isMounted && !abortController.signal.aborted) {
            setImageStates(prev => ({
              ...prev,
              errors: prev.errors.map((err, i) => i === index ? true : err),
              loading: prev.loading.map((loading, i) => i === index ? false : loading)
            }));
          }
        }
      });

      await Promise.allSettled(imagePromises);
    };

    loadImages();

    // Cleanup function
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [imageUrls, timeout, loadImageWithRetry]);

  const retryImage = useCallback(async (index: number) => {
    if (index >= 0 && index < imageUrls.length) {
      setImageStates(prev => ({
        ...prev,
        loading: prev.loading.map((loading, i) => i === index ? true : loading),
        errors: prev.errors.map((error, i) => i === index ? false : error)
      }));

      try {
        const success = await loadImageWithRetry(imageUrls[index]);
        setImageStates(prev => ({
          ...prev,
          loaded: prev.loaded.map((loaded, i) => i === index ? success : loaded),
          errors: prev.errors.map((error, i) => i === index ? !success : error),
          loading: prev.loading.map((loading, i) => i === index ? false : loading)
        }));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Retry falhou para imagem ${index}:`, error);
        }
        setImageStates(prev => ({
          ...prev,
          errors: prev.errors.map((err, i) => i === index ? true : err),
          loading: prev.loading.map((loading, i) => i === index ? false : loading)
        }));
      }
    }
  }, [imageUrls, loadImageWithRetry]);

  // Função para retry silencioso de todas as imagens com erro
  const retryAllFailedImages = useCallback(async () => {
    const failedIndices = imageStates.errors
      .map((error, index) => error ? index : -1)
      .filter(index => index !== -1);
    
    for (const index of failedIndices) {
      await retryImage(index);
    }
  }, [imageStates.errors, retryImage]);

  // Função para retry automático periódico de imagens com erro
  useEffect(() => {
    const autoRetryInterval = setInterval(() => {
      if (imageStates.errors.some(error => error)) {
        retryAllFailedImages();
      }
    }, 30000); // Tenta novamente a cada 30 segundos

    return () => clearInterval(autoRetryInterval);
  }, [imageStates.errors, retryAllFailedImages]);

  return {
    ...imageStates,
    retryImage,
    retryAllFailedImages,
    allImagesLoaded: imageStates.loaded.every(loaded => loaded),
    hasErrors: imageStates.errors.some(error => error)
  };
};
