// Configuração de imagens para o Hero
export const heroImageConfig = {
  // Imagens principais com URLs testadas e confiáveis
  primaryImages: [
    "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  
  // URLs de backup locais para evitar erros 404
  backupImages: [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23e67e45'/%3E%3Cstop offset='100%25' stop-color='%23d16638'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='24'%3EDra. Ana Lúcia%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2364748b'/%3E%3Cstop offset='100%25' stop-color='%23475569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23b)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='24'%3EDermatologia%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='c' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23d4af37'/%3E%3Cstop offset='100%25' stop-color='%23b8941f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23c)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='20'%3ECuidados Avançados%3C/text%3E%3C/svg%3E"
  ],
  
  // Cores de fallback melhoradas para quando as imagens falharem
  fallbackColors: [
    "from-primary-400 to-primary-600",
    "from-secondary-400 to-secondary-600", 
    "from-accent-gold to-yellow-500"
  ],
  
  // Timeout reduzido para falhar rapidamente e usar fallbacks
  imageTimeout: 2000,
  
  // Intervalo para troca automática de imagens (em ms)
  autoChangeInterval: 6000,
  
  // Configuração de retry
  maxRetries: 3,
  retryDelay: 2000
};

// Configuração de imagens para depoimentos
export const testimonialImageConfig = {
  // Imagens com fallbacks SVG para evitar erros 404
  images: {
    before: [
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&auto=format&q=80",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='before1' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23e67e45'/%3E%3Cstop offset='100%25' stop-color='%23d16638'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23before1)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='16'%3EAntes%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='before2' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2364748b'/%3E%3Cstop offset='100%25' stop-color='%23475569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23before2)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='16'%3EAntes%3C/text%3E%3C/svg%3E"
    ],
    after: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format&q=80",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='after1' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2322c55e'/%3E%3Cstop offset='100%25' stop-color='%2316a34a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23after1)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='16'%3EDepois%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='after2' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23d4af37'/%3E%3Cstop offset='100%25' stop-color='%23b8941f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23after2)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='16'%3EDepois%3C/text%3E%3C/svg%3E"
    ]
  },
  
  // Cores de fallback para depoimentos
  fallbackColors: {
    before: "from-primary-400 to-primary-600",
    after: "from-secondary-400 to-secondary-600"
  }
};

// Função melhorada para verificar se uma imagem carregou com sucesso
export const checkImageLoad = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    const timeout = setTimeout(() => {
      img.src = ''; // Cancela o carregamento
      resolve(false);
    }, heroImageConfig.imageTimeout);
    
    img.onload = () => {
      clearTimeout(timeout);
      resolve(true);
    };
    
    img.onerror = () => {
      clearTimeout(timeout);
      resolve(false);
    };
    
    // Configurar crossOrigin para evitar problemas de CORS
    img.crossOrigin = 'anonymous';
    
    // Adicionar atributos para melhor performance
    img.loading = 'eager';
    img.decoding = 'async';
    
    // Adicionar referrer policy para melhor compatibilidade
    img.referrerPolicy = 'no-referrer-when-downgrade';
    
    // Definir a fonte por último para garantir que os event listeners estejam configurados
    img.src = src;
  });
};
