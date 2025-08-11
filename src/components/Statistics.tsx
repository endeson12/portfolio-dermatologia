import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Star,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Calendar
} from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}

const Statistics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const stats: StatItem[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 2000,
      suffix: '+',
      label: 'Pacientes Atendidas',
      color: 'from-primary-400 to-primary-600',
      delay: 0.1
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 15,
      suffix: ' anos',
      label: 'de Experiência',
      color: 'from-accent-gold to-yellow-500',
      delay: 0.2
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 7,
      suffix: ' dias',
      label: 'para Resultados',
      color: 'from-accent-success to-green-500',
      delay: 0.3
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Satisfação',
      color: 'from-accent-trust to-blue-500',
      delay: 0.4
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-medical relative z-10">
        {/* Header da Seção */}
        <motion.div 
          className="text-center mb-16"
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
            <TrendingUp className="w-5 h-5" />
            <span>Resultados Comprovados</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            Números que
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Nossa trajetória de sucesso é marcada por milhares de pacientes satisfeitas 
            e resultados excepcionais em tratamentos dermatológicos.
          </p>
        </motion.div>

        {/* Grid de Estatísticas */}
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              custom={index}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-primary-100 transition-all duration-500 text-center group-hover:scale-105"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Ícone */}
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Valor */}
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: stat.delay + 0.5, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                >
                  <CountUp 
                    end={stat.value} 
                    duration={2} 
                    delay={stat.delay + 0.5}
                  />
                  {stat.suffix}
                </motion.div>
                
                {/* Label */}
                <p className="text-secondary-600 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
              
              {/* Elemento Decorativo */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Seção de Destaques */}
        <motion.div 
          className="mt-20 grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-3xl shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Cuidado Humanizado</h3>
            </div>
            <p className="text-primary-100 leading-relaxed">
              Cada paciente é único e recebe tratamento personalizado com foco no bem-estar e autoestima.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent-trust to-blue-600 text-white p-8 rounded-3xl shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Segurança Garantida</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Protocolos médicos rigorosos e equipamentos de última geração para sua segurança total.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent-success to-green-600 text-white p-8 rounded-3xl shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Resultados Rápidos</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Tecnologia avançada que garante resultados visíveis em tempo recorde.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Agendar Minha Avaliação</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Componente CountUp para animar os números
const CountUp: React.FC<{ end: number; duration: number; delay: number }> = ({ 
  end, 
  duration, 
  delay 
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count}</span>;
};

export default Statistics;
