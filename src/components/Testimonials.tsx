import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Heart, 
  Award 
} from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { testimonialImageConfig } from '../utils/imageConfig';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  treatment: string;
  rating: number;
  content: string;
  beforeImage: string;
  afterImage: string;
  date: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    age: 45,
    treatment: "Laser para Manchas",
    rating: 5,
    content: "A Dra. Ana Lúcia transformou minha pele! As manchas que eu tinha há anos desapareceram completamente. O tratamento foi indolor e os resultados superaram minhas expectativas. Recomendo para todas as minhas amigas!",
    beforeImage: testimonialImageConfig.images.before[0],
    afterImage: testimonialImageConfig.images.after[0],
    date: "2024",
    verified: true
  },
  {
    id: 2,
    name: "Ana Paula Santos",
    age: 38,
    treatment: "Rejuvenescimento Facial",
    rating: 5,
    content: "Fiz o tratamento de rejuvenescimento e me sinto 10 anos mais jovem! A Dra. Ana é muito profissional e atenciosa. O resultado foi natural e duradouro. Valeu cada centavo investido!",
    beforeImage: testimonialImageConfig.images.before[1],
    afterImage: testimonialImageConfig.images.after[1],
    date: "2024",
    verified: true
  },
  {
    id: 3,
    name: "Carla Mendes",
    age: 52,
    treatment: "Tratamento de Acne",
    rating: 5,
    content: "Sofria com acne há mais de 20 anos. A Dra. Ana Lúcia me ajudou a encontrar a solução perfeita. Minha pele nunca esteve tão bonita e saudável. Sou muito grata por todo o cuidado!",
    beforeImage: testimonialImageConfig.images.before[2],
    afterImage: testimonialImageConfig.images.after[2],
    date: "2024",
    verified: true
  }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-medical relative z-10">
        {/* Header da Seção */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="w-5 h-5" />
            <span>Depoimentos Reais</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            O que Nossas Pacientes
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Dizem Sobre Nós
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Descubra como transformamos a vida de milhares de pacientes com tratamentos 
            de dermatologia estética de excelência e resultados comprovados.
          </p>
        </motion.div>

        {/* Carrossel de Depoimentos */}
        <div className="relative">
          {/* Controles de Navegação */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-secondary-300 hover:bg-primary-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Depoimento Atual */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary-100"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Imagens Antes/Depois */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-secondary-700 mb-4">
                        Resultado do Tratamento
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-secondary-600 mb-2">Antes</div>
                          <img 
                            src={testimonials[currentTestimonial].beforeImage}
                            alt={`${testimonials[currentTestimonial].name} - Antes`}
                            className="w-full h-48 object-cover rounded-2xl shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className={`w-full h-48 bg-gradient-to-br ${testimonialImageConfig.fallbackColors.before} rounded-2xl shadow-lg flex items-center justify-center hidden`}>
                            <div className="text-center text-primary-600">
                              <div className="text-4xl mb-2">👩‍⚕️</div>
                              <div className="text-sm">Antes</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-secondary-600 mb-2">Depois</div>
                          <img 
                            src={testimonials[currentTestimonial].afterImage}
                            alt={`${testimonials[currentTestimonial].name} - Depois`}
                            className="w-full h-48 object-cover rounded-2xl shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className={`w-full h-48 bg-gradient-to-br ${testimonialImageConfig.fallbackColors.after} rounded-2xl shadow-lg flex items-center justify-center hidden`}>
                            <div className="text-center text-secondary-600">
                              <div className="text-4xl mb-2">✨</div>
                              <div className="text-sm">Depois</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo do Depoimento */}
                  <div className="space-y-6">
                    {/* Header do Depoimento */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-secondary-600 mb-1">
                          {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].treatment}
                        </p>
                        <p className="text-sm text-secondary-500">
                          {testimonials[currentTestimonial].date}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                        ))}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                      <p className="text-lg text-secondary-700 leading-relaxed pl-6">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                    </div>

                    {/* Verificação */}
                    {testimonials[currentTestimonial].verified && (
                      <div className="flex items-center space-x-2 text-accent-success">
                        <Award className="w-5 h-5" />
                        <span className="text-sm font-medium">Depoimento Verificado</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botões de Navegação */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-primary-100 text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-primary-100 text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl text-secondary-600 mb-6">
            Quer fazer parte das nossas histórias de sucesso?
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Minha Consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;