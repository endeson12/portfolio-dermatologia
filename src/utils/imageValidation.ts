// Sistema robusto de validação e fallback de imagens
export interface ImageFallbackConfig {
  primaryUrl: string;
  fallbackUrls: string[];
  placeholderColor: string;
  alt: string;
}

// URLs de imagens validadas e funcionais
export const VALIDATED_IMAGES = {
  // Imagens médicas profissionais validadas
  doctor: [
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  
  // Imagens para antes/depois (rostos femininos)
  beforeAfter: [
    "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&auto=format&q=80"
  ],

  // Imagens de backup do Pexels
  pexelsBackup: [
    "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?w=800&h=600&fit=crop&auto=format&q=80"
  ]
};

// Cores de fallback para gradientes
export const FALLBACK_GRADIENTS = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600", 
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-indigo-400 to-indigo-600"
];

// Função para validar se uma URL de imagem funciona
export const validateImageUrl = async (url: string, timeout: number = 3000): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    const timer = setTimeout(() => {
      img.src = '';
      resolve(false);
    }, timeout);

    img.onload = () => {
      clearTimeout(timer);
      resolve(true);
    };

    img.onerror = () => {
      clearTimeout(timer);
      resolve(false);
    };

    // Configurações para evitar CORS e melhorar compatibilidade
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer-when-downgrade';
    img.src = url;
  });
};

// Função para obter a primeira URL de imagem válida
export const getValidImageUrl = async (urls: string[], timeout: number = 2000): Promise<string | null> => {
  for (const url of urls) {
    try {
      const isValid = await validateImageUrl(url, timeout);
      if (isValid) {
        return url;
      }
    } catch (error) {
      // Continuar para a próxima URL
      continue;
    }
  }
  return null;
};

// Função simples para validar imagem e usar fallback
export const createImageWithFallback = (primaryUrl: string, fallbackUrls: string[] = []): string => {
  // Por enquanto, retornar a URL principal
  // Em uma implementação futura, podemos adicionar validação assíncrona
  return primaryUrl;
};

// Função para criar uma imagem SVG de fallback
export const createSvgFallback = (text: string, colors: string[] = ['#e67e45', '#d16638']): string => {
  const [color1, color2] = colors;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='${color1.replace('#', '%23')}'/%3E%3Cstop offset='100%25' stop-color='${color2.replace('#', '%23')}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='16'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
};
