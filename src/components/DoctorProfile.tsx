import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Star, 
  Heart, 
  TrendingUp 
} from 'lucide-react';

interface Credential {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface Specialization {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const DoctorProfile: React.FC = () => {
  const credentials: Credential[] = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Médica",
      description: "Medicina pela USP (2008) • Residência em Dermatologia HC-FMUSP (2012)",
      delay: 0.1
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Especializações",
      description: "Dermatologia Estética • Laser Terapia • Medicina Antienvelhecimento • Cirurgia Dermatológica",
      delay: 0.2
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experiência",
      description: "+15 anos • +2000 procedimentos • Membro da SBD • Especialista em Laser",
      delay: 0.3
    }
  ];

  const specializations: Specialization[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Laser Terapia",
      description: "Especialista em tratamentos a laser para rejuvenescimento, remoção de manchas e cicatrizes",
      color: "from-primary-400 to-primary-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dermatologia Estética",
      description: "Procedimentos não-cirúrgicos para rejuvenescimento facial e corporal",
      color: "from-pink-400 to-primary-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cirurgia Dermatológica",
      description: "Cirurgias para remoção de lesões benignas e malignas da pele",
      color: "from-accent-trust to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Medicina Preventiva",
      description: "Prevenção e diagnóstico precoce de doenças da pele e câncer",
      color: "from-accent-success to-green-600"
    }
  ];

  const achievements = [
    "Membro da Sociedade Brasileira de Dermatologia (SBD)",
    "Especialista em Laser pela American Society for Laser Medicine and Surgery",
    "Membro da International Society of Dermatology",
    "Palestrante em congressos nacionais e internacionais",
    "Autora de artigos científicos publicados em revistas indexadas",
    "Mentora de residentes em dermatologia"
  ];

  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
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
            <span>Conheça a Dra. Ana Lúcia</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-6">
            Especialista em
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Dermatologia Estética
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Com mais de 15 anos de experiência, a Dra. Ana Lúcia é referência em 
            tratamentos dermatológicos avançados, combinando tecnologia de ponta 
            com cuidado humanizado para resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Foto e Credenciais */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Foto Principal */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop&crop=face&auto=format&q=80" 
                alt="Dra. Ana Lúcia - Dermatologista"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl shadow-2xl flex items-center justify-center hidden">
                <div className="text-center text-primary-600">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <div className="text-xl font-semibold">Dra. Ana Lúcia</div>
                  <div className="text-sm">Dermatologista</div>
                </div>
              </div>
              
              {/* Card de Credenciais Flutuante */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-primary-100 max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-1">+2000</div>
                  <div className="text-sm text-secondary-600 mb-3">Pacientes Atendidas</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <div className="text-xs text-secondary-500">Avaliação dos Pacientes</div>
                </div>
              </motion.div>
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-12 w-24 h-24 bg-gradient-to-br from-accent-gold/20 to-primary-300/20 rounded-full animate-pulse delay-1000"></div>
          </motion.div>

          {/* Informações e Especializações */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card de Credenciais Principais - Integrado da Hero Section */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-primary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B48C5A] to-[#D4AF37] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D]">Dra. Ana Lúcia Silva</h3>
                  <p className="text-sm text-[#2D2D2D]/80">CRM 12345 - SP</p>
                  <p className="text-sm text-[#2D2D2D]/80">Especialista em Dermatologia Estética</p>
                </div>
              </div>
            </motion.div>

            {/* Credenciais */}
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: credential.delay }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    {credential.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {credential.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {credential.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Filosofia de Trabalho */}
            <motion.div 
              className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Nossa Filosofia
              </h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Acreditamos que cada paciente é único e merece um tratamento personalizado. 
                Combinamos ciência de ponta com cuidado humanizado para resultados naturais 
                e duradouros que devolvem a autoestima e a confiança.
              </p>
              <div className="flex items-center space-x-2 text-primary-600 font-medium">
                <Heart className="w-4 h-4" />
                <span>Cuidado personalizado e humanizado</span>
              </div>
            </motion.div>

            {/* Especializações */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary-900">
                Áreas de Especialização
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl border border-secondary-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${spec.color} text-white mb-3`}>
                      {spec.icon}
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2 text-sm">
                      {spec.title}
                    </h4>
                    <p className="text-xs text-secondary-600 leading-relaxed">
                      {spec.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Conquistas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary-900">
                Conquistas e Reconhecimentos
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-accent-success to-green-500 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-secondary-700 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
            >
              <button 
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 w-full"
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Agendar Consulta com a Dra. Ana Lúcia</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Seção de Contato Rápido */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl lg:text-4xl font-light mb-6">
                  Agende sua Consulta
                </h3>
                <p className="text-xl text-primary-100 leading-relaxed mb-8">
                  Entre em contato conosco para agendar sua avaliação personalizada. 
                  Nossa equipe está pronta para atendê-la com todo o carinho e profissionalismo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-white text-primary-600 px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('contato');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Agendar Consulta</span>
                  </motion.button>
                  
                  <motion.button
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Falar por Telefone</span>
                  </motion.button>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <motion.div
                  className="inline-block bg-white/20 p-8 rounded-3xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-6xl font-bold mb-2">15+</div>
                  <div className="text-xl font-medium text-primary-100">anos de experiência</div>
                  <div className="text-sm text-primary-200 mt-2">em dermatologia</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorProfile;