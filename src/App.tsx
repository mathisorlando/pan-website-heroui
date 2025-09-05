import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import FleetPage from './pages/fleet';
import FleetDetailPage from './pages/fleet/detail';
import EquipmentDetailPage from './pages/equipment/detail';
import ReferencesPage from './pages/references';
import ReferenceDetailPage from './pages/references/detail';
import ContactPage from './pages/contact';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/fleet/:slug" element={<FleetDetailPage />} />
          <Route path="/equipment/:slug" element={<EquipmentDetailPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/references/:slug" element={<ReferenceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="container mx-auto py-20 text-center">
              <h1 className="text-2xl font-bold mb-4">Seite nicht gefunden</h1>
              <p>Die angeforderte Seite existiert nicht.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
