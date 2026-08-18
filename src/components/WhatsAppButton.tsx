import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Calendar, Star, Heart } from 'lucide-react';

interface ContactOption {
  id: string;
  icon: React.ReactNode;
  label: string;
  action: () => void;
  color: string;
}

const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 3 segundos
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const contactOptions: ContactOption[] = [
    {
      id: 'whatsapp',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.242.489 1.67.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>,
      label: 'WhatsApp',
      action: () => {
        const message = "Olá! Gostaria de agendar uma consulta com a Dra. Ana Lúcia.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
        setIsExpanded(false);
      },
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone',
      action: () => {
        window.open('tel:+5511999999999');
        setIsExpanded(false);
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" />,
      label: 'E-mail',
      action: () => {
        window.open('mailto:contato@draanalucia.com.br?subject=Agendamento de Consulta');
        setIsExpanded(false);
      },
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'schedule',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Agendar',
      action: () => {
        const element = document.getElementById('contato');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsExpanded(false);
      },
      color: 'from-primary-500 to-primary-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-center">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 left-1/2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px] transform -translate-x-1/2"
          >
            {/* Header do Card */}
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Dra. Ana Lúcia
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Dermatologia de Excelência
              </p>
              
              {/* Avaliação */}
              <div className="flex items-center justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">5.0</span>
              </div>
              
              <p className="text-xs text-gray-500">
                +2000 pacientes atendidos • 15+ anos de experiência
              </p>
            </div>

            {/* Opções de Contato */}
            <div className="space-y-2 mb-4">
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  onClick={option.action}
                  className={`w-full bg-gradient-to-r ${option.color} text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mensagem de Incentivo */}
            <div className="text-center p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
              <p className="text-sm text-primary-700 font-medium">
                🎯 Agende sua consulta hoje e transforme sua pele!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Principal */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative ${
          isExpanded 
            ? 'bg-gradient-to-r from-red-500 to-red-600' 
            : 'bg-gradient-to-r from-green-500 to-green-600'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.242.489 1.67.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
