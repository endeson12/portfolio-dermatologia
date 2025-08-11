import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  ArrowUp,
  Star,
  Award,
  Shield,
  Users,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface QuickLink {
  title: string;
  links: { name: string; url: string }[];
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/draanalucia',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/draanalucia',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/draanalucia',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/draanalucia',
      icon: <Youtube className="w-5 h-5" />,
      color: 'hover:bg-red-600'
    }
  ];

  const quickLinks: QuickLink[] = [
    {
      title: 'Tratamentos',
      links: [
        { name: 'Laser Terapia', url: '#beneficios' },
        { name: 'Rejuvenescimento', url: '#beneficios' },
        { name: 'Limpeza de Pele', url: '#beneficios' },
        { name: 'Remoção de Manchas', url: '#beneficios' },
        { name: 'Tratamento de Acne', url: '#beneficios' }
      ]
    },
    {
      title: 'Clínica',
      links: [
        { name: 'Sobre Nós', url: '#sobre' },
        { name: 'Dra. Ana Lúcia', url: '#sobre' },
        { name: 'Nossa Equipe', url: '#sobre' },
        { name: 'Instalações', url: '#sobre' },
        { name: 'Localização', url: '#contato' }
      ]
    },
    {
      title: 'Pacientes',
      links: [
        { name: 'Agendamento', url: '#contato' },
        { name: 'Primeira Consulta', url: '#contato' },
        { name: 'Preparação', url: '#contato' },
        { name: 'FAQ', url: '#contato' },
        { name: 'Depoimentos', url: '#depoimentos' }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os tratamentos.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-medical relative z-10">
        {/* Seção Principal do Footer */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo e Descrição */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Dra. Ana Lúcia
                </h3>
                <p className="text-primary-300 text-sm">Dermatologia de Excelência</p>
              </div>
              
              <p className="text-secondary-300 leading-relaxed mb-6">
                Especialista em dermatologia estética e tratamentos a laser com mais de 15 anos 
                de experiência. Cuidando da sua pele com tecnologia de ponta e atendimento humanizado.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center text-secondary-300 transition-all duration-300 ${social.color} hover:text-white`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Rápidos */}
            {quickLinks.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <a
                        href={link.url}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção de Contato */}
        <motion.div 
          className="py-12 border-t border-secondary-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6">
                Informações de Contato
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Endereço</h5>
                    <p className="text-secondary-300 text-sm">
                      Rua das Flores, 123 - Jardins<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Telefone</h5>
                    <p className="text-secondary-300 text-sm">(11) 99999-9999</p>
                    <p className="text-secondary-300 text-sm">(11) 88888-8888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">E-mail</h5>
                    <p className="text-secondary-300 text-sm">contato@draanalucia.com.br</p>
                    <p className="text-secondary-300 text-sm">agendamento@draanalucia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-400 to-primary-500 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Horário</h5>
                    <p className="text-secondary-300 text-sm">
                      Seg-Sex: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA e Estatísticas */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6">
                Agende sua Consulta
              </h4>
              
              <div className="bg-secondary-800/50 rounded-2xl p-6 border border-secondary-700">
                <p className="text-secondary-300 mb-6">
                  Não perca a oportunidade de transformar sua pele com tratamentos 
                  de última geração. Agende sua avaliação sem compromisso.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById('contato');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar</span>
                  </motion.button>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">15+</div>
                  <div className="text-xs text-secondary-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">2000+</div>
                  <div className="text-xs text-secondary-400">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">5.0</div>
                  <div className="text-xs text-secondary-400">Avaliação</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seção de Garantias */}
        <motion.div 
          className="py-12 border-t border-secondary-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">
              Nossas Garantias
            </h4>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              Comprometemo-nos a oferecer o melhor em dermatologia estética, 
              com tecnologia de ponta e atendimento personalizado.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Star className="w-6 h-6" />, title: "Qualidade", desc: "Padrão de excelência em todos os tratamentos" },
              { icon: <Award className="w-6 h-6" />, title: "Experiência", desc: "15+ anos de especialização em dermatologia" },
              { icon: <Shield className="w-6 h-6" />, title: "Segurança", desc: "Procedimentos seguros e comprovados" },
              { icon: <Users className="w-6 h-6" />, title: "Confiança", desc: "Milhares de pacientes satisfeitos" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h5 className="font-semibold text-white mb-2">{item.title}</h5>
                <p className="text-secondary-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Inferior */}
        <motion.div 
          className="py-8 border-t border-secondary-700 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-2 text-secondary-400">
            <span>© 2024 Dra. Ana Lúcia Dermatologia. Todos os direitos reservados.</span>
            <span>•</span>
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>para sua beleza</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-secondary-400">
            <button className="hover:text-primary-400 transition-colors duration-300">
              Política de Privacidade
            </button>
            <button className="hover:text-primary-400 transition-colors duration-300">
              Termos de Uso
            </button>
            <button className="hover:text-primary-400 transition-colors duration-300">
              Cookies
            </button>
          </div>
        </motion.div>
      </div>

      {/* Botão Voltar ao Topo */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
};

export default Footer;
