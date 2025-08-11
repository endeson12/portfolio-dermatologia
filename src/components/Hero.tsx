import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Award, 
  Star, 
  Shield, 
  GraduationCap,
  Mouse,
  Calendar,
  Play,
  Clock,
  User,
  Heart
} from 'lucide-react';
import { heroImageConfig } from '../utils/imageConfig';
import { useImageLoader } from '../hooks/useImageLoader';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroImages = heroImageConfig.primaryImages;
  const fallbackColors = heroImageConfig.fallbackColors;
  
  // Hook para gerenciar carregamento das imagens
  const { errors, loading, retryImage } = useImageLoader(heroImages, heroImageConfig.imageTimeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, heroImageConfig.autoChangeInterval);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToBenefits = () => {
    const element = document.getElementById('beneficios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Componente de fallback melhorado para imagem
  const ImageFallback = ({ index }: { index: number }) => (
    <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${fallbackColors[index]} flex items-center justify-center`}>
      <div className="text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
          <Heart className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Dra. Ana Lúcia Silva</h3>
        <p className="text-lg opacity-90">Dermatologista Especialista</p>
        <p className="text-sm opacity-75 mt-2">Transformando vidas através da dermatologia</p>
      </div>
    </div>
  );

  // Componente de loading melhorado
  const ImageLoading = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#B48C5A] mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm">Carregando imagem...</p>
      </div>
    </div>
  );

  // Função para determinar qual imagem mostrar
  const getCurrentImage = () => {
    const currentImage = heroImages[currentImageIndex];
    
    if (errors[currentImageIndex]) {
      return <ImageFallback index={currentImageIndex} />;
    }
    
    if (loading[currentImageIndex]) {
      return <ImageLoading />;
    }
    
    return (
      <motion.img 
        src={currentImage}
        alt={`Dra. Ana Lúcia - Dermatologista ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5000 }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          // Mostrar fallback quando a imagem falhar
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) {
            fallback.classList.remove('hidden');
          }
        }}
      />
    );
  };



  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y, opacity }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-accent-gold/30 to-primary-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </motion.div>

      <div className="container-medical relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-screen py-20">
          {/* Content Left - Refatorado com Flexbox Vertical */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-0">
              
              {/* 1. PROVA SOCIAL - Posicionada ACIMA do título principal */}
              <motion.div
                className="flex space-x-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Medalha 1: +15 anos de experiência */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-primary-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B48C5A] to-[#D4AF37] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#2D2D2D]">+15 anos</div>
                      <div className="text-sm text-[#2D2D2D]/80">transformando vidas através da dermatologia</div>
                    </div>
                  </div>
                </div>

                {/* Medalha 2: +2000 pacientes satisfeitas */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-primary-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B48C5A] to-[#D4AF37] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#2D2D2D]">+2000</div>
                      <div className="text-sm text-[#2D2D2D]/80">Pacientes Satisfeitas</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. TÍTULO PRINCIPAL - Três linhas distintas com hierarquia */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl leading-tight">
                  {/* Linha 1: "Renove sua" */}
                  <span className="block font-normal text-[#2D2D2D] font-display">
                    Renove sua
                  </span>
                  
                  {/* Linha 2: "Pele e Autoestima" - Destaque emocional */}
                  <span className="block font-bold text-[#B48C5A] font-display">
                    Pele e Autoestima
                  </span>
                  
                  {/* Linha 3: "com Laser de Última Geração" - Tecnologia */}
                  <span className="block text-4xl lg:text-5xl font-normal text-[#2D2D2D] font-medical mt-4">
                    com Laser de Última Geração
                  </span>
                </h1>
              </motion.div>
              
              {/* 3. SUBTÍTULO - A Promessa com espaçamento claro */}
              <motion.p 
                className="text-xl lg:text-2xl text-[#2D2D2D] leading-relaxed max-w-2xl mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Tratamento revolucionário que combina{' '}
                <strong className="text-[#B48C5A]">ciência avançada</strong> e{' '}
                <strong className="text-[#B48C5A]">cuidado humanizado</strong> para resultados naturais e duradouros.
              </motion.p>
              
              {/* 4. BOTÃO DE AÇÃO - CTA com espaçamento generoso */}
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button
                  className="bg-[#B48C5A] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#D4AF37] hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Agende sua avaliação</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
          
          {/* Visual Right */}
          <div className="lg:col-span-2 relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Image Carousel */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {index === currentImageIndex ? getCurrentImage() : null}
                  </div>
                ))}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Image Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#B48C5A]/20 to-[#D4AF37]/20 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-12 w-24 h-24 bg-gradient-to-br from-[#B48C5A]/20 to-[#D4AF37]/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* NOVA ÂNCORA DE ROLAGEM SOFISTICADA */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToBenefits}
          className="flex flex-col items-center space-y-3 text-[#2D2D2D] hover:text-[#B48C5A] transition-colors duration-300 cursor-pointer group"
          whileHover={{ y: 2 }}
        >
          {/* Ícone de Mouse com Bolinha Animada */}
          <div className="relative">
            <Mouse className="w-8 h-8 group-hover:text-[#B48C5A] transition-colors duration-300" />
            {/* Bolinha interna animada */}
            <motion.div
              className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#B48C5A] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Texto elegante */}
          <span className="text-sm font-medium text-[#2D2D2D]/70 group-hover:text-[#B48C5A] transition-colors duration-300">
            Role para descobrir os benefícios
          </span>
        </motion.button>
      </motion.div>

      {/* Sparkles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#B48C5A] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
