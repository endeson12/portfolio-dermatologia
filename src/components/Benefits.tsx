import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Heart, 
  Clock, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  Phone
} from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  delay: number;
}

const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Resultados Rápidos e Visíveis",
      description: "Veja a transformação da sua pele em apenas 7 dias com nossa tecnologia laser de última geração.",
      features: [
        "Melhora visível em 7 dias",
        "Resultados duradouros",
        "Sem necessidade de internação",
        "Retorno às atividades imediato"
      ],
      color: "from-accent-success to-green-500",
      delay: 0.1
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Procedimento 100% Seguro",
      description: "Protocolos médicos rigorosos e equipamentos certificados pela ANVISA garantem sua segurança total.",
      features: [
        "Certificado ANVISA",
        "Protocolos médicos rigorosos",
        "Equipamentos de última geração",
        "Médica especialista com 15+ anos"
      ],
      color: "from-accent-trust to-blue-500",
      delay: 0.2
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tecnologia de Última Geração",
      description: "Laser fracionado não-ablativo que estimula a produção natural de colágeno sem danificar a pele.",
      features: [
        "Laser fracionado não-ablativo",
        "Estimulação natural de colágeno",
        "Sem danos à superfície da pele",
        "Tecnologia patenteada"
      ],
      color: "from-primary-500 to-primary-600",
      delay: 0.3
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cuidado Personalizado",
      description: "Cada tratamento é adaptado às suas necessidades específicas para resultados otimizados.",
      features: [
        "Avaliação personalizada",
        "Plano de tratamento individual",
        "Acompanhamento contínuo",
        "Suporte pós-tratamento"
      ],
      color: "from-accent-gold to-yellow-500",
      delay: 0.4
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="beneficios" className="section-padding bg-white relative overflow-hidden">
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
            <Award className="w-5 h-5" />
            <span>Por que Escolher Nossa Clínica</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            Benefícios que
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Transformam Vidas
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Nossa abordagem única combina tecnologia de ponta com cuidado humanizado, 
            garantindo resultados excepcionais e uma experiência transformadora.
          </p>
        </motion.div>

        {/* Grid de Benefícios */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              custom={index}
            >
              <motion.div 
                className="bg-gradient-to-br from-white to-secondary-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-primary-100 transition-all duration-500 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header do Card */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div 
                    className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Lista de Features */}
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: benefit.delay + 0.1 + featureIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-secondary-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Elemento Decorativo */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-primary-400" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Seção de Destaque Especial */}
        <motion.div 
          className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Diferencial Exclusivo</span>
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-light mb-6">
                  <span className="block">Garantia de</span>
                  <span className="block font-semibold">Resultado</span>
                </h3>
                
                <p className="text-primary-100 text-lg leading-relaxed mb-8">
                  Se você não estiver 100% satisfeita com os resultados em 30 dias, 
                  oferecemos uma sessão adicional gratuita ou reembolso total.
                </p>
                
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Quero Garantir Meu Resultado</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
              
              <div className="text-center lg:text-right">
                <motion.div
                  className="inline-block bg-white/20 p-8 rounded-3xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-6xl font-bold mb-2">30</div>
                  <div className="text-xl font-medium text-primary-100">dias de garantia</div>
                  <div className="text-sm text-primary-200 mt-2">ou seu dinheiro de volta</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-light text-secondary-900 mb-6">
              Pronta para Transformar sua Pele?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Agende sua avaliação gratuita e descubra como nossa tecnologia laser 
              pode devolver sua autoestima e juventude.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <span>Agendar Avaliação Gratuita</span>
                </span>
              </motion.button>
              
              <motion.button
                className="border-2 border-primary-300 text-primary-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-primary-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Falar com Especialista</span>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
