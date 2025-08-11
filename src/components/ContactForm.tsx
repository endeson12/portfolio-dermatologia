import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Star,
  Award,
  Shield,
  Heart,
  MapPin,
  Clock
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTime: string;
  treatment: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    treatment: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string>('');

  const treatments = [
    "Tratamento a Laser",
    "Rejuvenescimento Facial",
    "Limpeza de Pele",
    "Remoção de Manchas",
    "Tratamento de Acne",
    "Outro"
  ];

  const timeSlots = [
    "Manhã (8h - 12h)",
    "Tarde (13h - 17h)",
    "Noite (18h - 20h)",
    "Sábado (8h - 12h)"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^[\d\s-()+\-]+$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredTime: '',
        treatment: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de agendar uma consulta com a Dra. Ana Lúcia.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nTratamento de interesse: ${formData.treatment}\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        
        <h3 className="text-3xl font-light text-secondary-900 mb-4">
          Mensagem Enviada com Sucesso!
        </h3>
        
        <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
          Obrigada pelo seu interesse! Nossa equipe entrará em contato em até 24 horas 
          para confirmar seu agendamento e tirar todas as suas dúvidas.
        </p>
        
        <motion.button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Nova Mensagem
        </motion.button>
      </motion.div>
    );
  }

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
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
            <MessageSquare className="w-5 h-5" />
            <span>Entre em Contato</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            Agende sua Avaliação
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Sem Compromisso
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para agendar 
            sua consulta personalizada com a Dra. Ana Lúcia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Formulário */}
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className={`w-5 h-5 ${activeField === 'name' ? 'text-primary-500' : 'text-secondary-400'}`} />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField('')}
                    className={`w-full pl-10 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'name'
                        ? 'border-primary-300'
                        : 'border-secondary-200 hover:border-primary-200'
                    }`}
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-2 mt-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className={`w-5 h-5 ${activeField === 'email' ? 'text-primary-500' : 'text-secondary-400'}`} />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField('')}
                    className={`w-full pl-10 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'email'
                        ? 'border-primary-300'
                        : 'border-secondary-200 hover:border-primary-200'
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-2 mt-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Telefone *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className={`w-5 h-5 ${activeField === 'phone' ? 'text-primary-500' : 'text-secondary-400'}`} />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField('')}
                    className={`w-full pl-10 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
                      errors.phone 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'phone'
                        ? 'border-primary-300'
                        : 'border-secondary-200 hover:border-primary-200'
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-2 mt-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tratamento de Interesse */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Tratamento de Interesse
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => handleInputChange('treatment', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-300 hover:border-primary-200"
                >
                  <option value="">Selecione um tratamento</option>
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>

              {/* Horário Preferencial */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Horário Preferencial
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-300 hover:border-primary-200"
                >
                  <option value="">Selecione um horário</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem *
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-3 flex items-center pointer-events-none">
                    <MessageSquare className={`w-5 h-5 ${activeField === 'message' ? 'text-primary-500' : 'text-secondary-400'}`} />
                  </div>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField('')}
                    rows={4}
                    className={`w-full pl-10 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'message'
                        ? 'border-primary-300'
                        : 'border-secondary-200 hover:border-primary-200'
                    }`}
                    placeholder="Conte-nos sobre sua consulta ou dúvidas..."
                  />
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-2 mt-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card de Contato */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary-100">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Endereço</h4>
                    <p className="text-secondary-600">
                      Rua das Flores, 123 - Jardins<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Telefone</h4>
                    <p className="text-secondary-600">(11) 99999-9999</p>
                    <p className="text-secondary-600">(11) 88888-8888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">E-mail</h4>
                    <p className="text-secondary-600">contato@draanalucia.com.br</p>
                    <p className="text-secondary-600">agendamento@draanalucia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-400 to-primary-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-secondary-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Garantias */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">
                Por que Escolher a Dra. Ana Lúcia?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="text-primary-100">+15 anos de experiência</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-primary-100">Especialista em Laser</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-primary-100">Tecnologia de ponta</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-primary-100">Atendimento humanizado</span>
                </div>
              </div>
            </div>

            {/* Card de Urgência */}
            <div className="bg-gradient-to-r from-accent-warning to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Precisa de Atendimento Urgente?
              </h3>
              
              <p className="text-orange-100 mb-6">
                Para casos urgentes, entre em contato diretamente pelo WhatsApp 
                ou telefone para agendamento prioritário.
              </p>
              
              <motion.button
                onClick={handleWhatsApp}
                className="w-full bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Urgente</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
