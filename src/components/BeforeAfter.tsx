import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Zap
} from 'lucide-react';

interface CaseStudy {
  id: number;
  before: string;
  after: string;
  treatment: string;
  duration: string;
  age: string;
  description: string;
  results: string[];
  testimonial: string;
}

const BeforeAfter: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cases: CaseStudy[] = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      treatment: "Rejuvenescimento Facial com Laser",
      duration: "3 sessões - 2 meses",
      age: "45 anos",
      description: "Tratamento para redução de linhas finas, rugas e melhora da textura da pele",
      results: [
        "Redução de 70% nas linhas finas",
        "Melhora de 80% na textura da pele",
        "Aumento de 60% na firmeza",
        "Resultado natural e duradouro"
      ],
      testimonial: "Finalmente me sinto confiante novamente. Os resultados superaram minhas expectativas!"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      treatment: "Remoção de Manchas e Melasma",
      duration: "4 sessões - 3 meses",
      age: "38 anos",
      description: "Tratamento para clareamento de manchas escuras e uniformização do tom da pele",
      results: [
        "Clareamento de 85% das manchas",
        "Uniformização do tom da pele",
        "Redução de 90% no melasma",
        "Pele mais radiante e uniforme"
      ],
      testimonial: "Minhas manchas sumiram e minha autoestima voltou. Recomendo para todas!"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      treatment: "Tratamento de Cicatrizes de Acne",
      duration: "6 sessões - 4 meses",
      age: "28 anos",
      description: "Redução de cicatrizes atróficas e melhora da textura da pele",
      results: [
        "Redução de 75% nas cicatrizes",
        "Melhora significativa na textura",
        "Pele mais lisa e uniforme",
        "Confiança restaurada"
      ],
      testimonial: "Depois de anos sofrendo com cicatrizes, finalmente tenho uma pele que amo!"
    },
    {
      id: 4,
      before: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      treatment: "Lifting Não-Cirúrgico",
      duration: "5 sessões - 3 meses",
      age: "52 anos",
      description: "Lifting facial com laser para firmeza e definição dos contornos",
      results: [
        "Lifting natural dos contornos",
        "Aumento de 65% na firmeza",
        "Definição do maxilar restaurada",
        "Aparência 10 anos mais jovem"
      ],
      testimonial: "Parece que voltei no tempo! Meus amigos não param de perguntar o que fiz."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSelectedCase((prev) => (prev + 1) % cases.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, cases.length]);

  const nextCase = () => {
    setSelectedCase((prev) => (prev + 1) % cases.length);
    setIsAutoPlaying(false);
  };

  const prevCase = () => {
    setSelectedCase((prev) => (prev - 1 + cases.length) % cases.length);
    setIsAutoPlaying(false);
  };

  const goToCase = (index: number) => {
    setSelectedCase(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="resultados" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
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
            <Star className="w-5 h-5" />
            <span>Resultados Comprovados</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            Transformações que
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Falam por Si Só
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Veja a transformação real de nossos pacientes com tratamentos personalizados 
            e acompanhamento especializado. Cada caso é único e cada resultado é especial.
          </p>
        </motion.div>

        {/* Showcase Principal */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            key={selectedCase}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300 rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Comparação Antes/Depois */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Antes */}
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl shadow-lg"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <img 
                        src={cases[selectedCase].before}
                        alt="Antes do tratamento"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-500/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        Antes
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </motion.div>
                    
                    {/* Depois */}
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl shadow-lg"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <img 
                        src={cases[selectedCase].after}
                        alt="Depois do tratamento"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-accent-success/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        Depois
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent"></div>
                    </motion.div>
                  </div>
                  
                  {/* Indicador de Progresso */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex space-x-2">
                      {cases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToCase(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === selectedCase 
                              ? 'bg-primary-500 scale-125' 
                              : 'bg-secondary-300 hover:bg-primary-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Informações do Caso */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-light text-secondary-900 mb-4">
                      {cases[selectedCase].treatment}
                    </h3>
                    <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                      {cases[selectedCase].description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-secondary-600 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary-500" />
                        <span>{cases[selectedCase].duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-accent-gold" />
                        <span>Paciente de {cases[selectedCase].age}</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Resultados */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                      Resultados Alcançados:
                    </h4>
                    <div className="space-y-3">
                      {cases[selectedCase].results.map((result, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-secondary-700 font-medium">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Depoimento */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-secondary-700 italic leading-relaxed">
                          "{cases[selectedCase].testimonial}"
                        </p>
                        <p className="text-sm text-secondary-600 mt-2">
                          — Paciente satisfeita
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <button 
                      className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 w-full"
                      onClick={() => {
                        const element = document.getElementById('contato');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Quero Resultados Assim</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navegação */}
        <div className="flex justify-center items-center space-x-6">
          <motion.button
            onClick={prevCase}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-600 hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <div className="flex space-x-3">
            {cases.map((case_, index) => (
              <button
                key={case_.id}
                onClick={() => goToCase(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white/80 text-secondary-700 hover:bg-primary-50 border border-primary-200'
                }`}
              >
                {case_.treatment.split(' ')[0]}
              </button>
            ))}
          </div>
          
          <motion.button
            onClick={nextCase}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-600 hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* CTA Final */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-light mb-6">
                Pronta para sua Transformação?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Agende sua avaliação gratuita e descubra como nossa tecnologia laser 
                pode transformar sua pele e devolver sua autoestima.
              </p>
              
              <motion.button
                className="bg-white text-primary-600 px-10 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Agendar Avaliação Gratuita</span>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
