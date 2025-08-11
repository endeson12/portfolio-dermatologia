import React, { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import BeforeAfter from './components/BeforeAfter';
import DoctorProfile from './components/DoctorProfile';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import errorHandler from './utils/errorHandler';

// Lazy loading para componentes pesados
const Statistics = lazy(() => import('./components/Statistics'));
const Testimonials = lazy(() => import('./components/Testimonials'));

const App: React.FC = () => {
  // Inicializar tratamento de erros
  useEffect(() => {
    errorHandler.initializeErrorHandling();
  }, []);

  return (
    <div className="App min-h-screen bg-white">
      {/* Header Fixo */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Estatísticas */}
      <Suspense fallback={
        <div className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="container-medical">
            <div className="animate-pulse">
              <div className="h-32 bg-primary-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      }>
        <Statistics />
      </Suspense>
      
      {/* Benefícios */}
      <Benefits />
      
      {/* Antes e Depois */}
      <BeforeAfter />
      
      {/* Perfil da Médica */}
      <DoctorProfile />
      
      {/* Depoimentos */}
      <Suspense fallback={
        <div className="section-padding bg-white">
          <div className="container-medical">
            <div className="animate-pulse">
              <div className="h-96 bg-secondary-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      }>
        <Testimonials />
      </Suspense>
      
      {/* Formulário de Contato */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Botão WhatsApp Flutuante */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
