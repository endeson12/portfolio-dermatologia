import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Atualizar seção ativa baseado no scroll
      const sections = ['home', 'beneficios', 'resultados', 'sobre', 'contato'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'beneficios', label: 'Benefícios', href: '#beneficios' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header Unificado - Estrutura Principal */}
      <motion.header 
        className={`
          fixed top-0 z-50 w-full bg-white transition-all duration-300 ease-out
          ${isScrolled ? 'shadow-md' : ''}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Barra Superior - Informações de Contato */}
          <div className="hidden lg:block border-b border-gray-100">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-[#2D2D2D]">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2D2D2D]">
                  <MapPin className="w-4 h-4" />
                  <span>Rua das Flores, 123 - São Paulo</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#2D2D2D]">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
              </div>
            </div>
          </div>

          {/* Header Principal - Logo, Navegação e CTA */}
          <div className="flex items-center justify-between py-4">
            {/* Coluna Esquerda - Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B48C5A] to-[#D4AF37] flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="text-[#2D2D2D]">
                <h1 className="text-xl font-bold font-display">Dra. Ana Lúcia</h1>
                <p className="text-sm font-medium text-[#2D2D2D]/80">Dermatologia Avançada</p>
              </div>
            </motion.div>

            {/* Coluna Central - Navegação (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`
                    relative text-sm font-medium transition-all duration-300 cursor-pointer text-[#2D2D2D]
                    hover:text-[#B48C5A]
                    ${activeSection === item.id ? 'text-[#B48C5A]' : ''}
                  `}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#B48C5A]"
                      layoutId="activeSection"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Coluna Direita - CTA e Menu Mobile */}
            <div className="flex items-center space-x-4">
              {/* Botão CTA - Desktop */}
              <motion.button
                className="hidden md:flex items-center px-6 py-3 bg-[#B48C5A] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contato')}
              >
                Agendar Consulta
              </motion.button>

              {/* Menu Mobile - Ícone Hambúrguer */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors duration-300 text-[#2D2D2D] hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`
                      text-lg font-medium py-3 border-b border-gray-100 transition-colors duration-300
                      ${activeSection === item.id ? 'text-[#B48C5A]' : 'text-[#2D2D2D] hover:text-[#B48C5A]'}
                    `}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.button
                  className="mt-6 w-full bg-[#B48C5A] text-white py-4 rounded-full font-medium hover:bg-[#D4AF37]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contato')}
                >
                  Agendar Consulta
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espaçador para compensar o header fixo */}
      <div className="h-24 lg:h-28"></div>
    </>
  );
};

export default Header;
