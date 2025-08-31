import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/services">
            <ServicesPage />
          </Route>
          <Route exact path="/fleet">
            <FleetPage />
          </Route>
          <Route exact path="/fleet/:slug">
            <FleetDetailPage />
          </Route>
          <Route exact path="/equipment/:slug">
            <EquipmentDetailPage />
          </Route>
          <Route exact path="/references">
            <ReferencesPage />
          </Route>
          <Route exact path="/references/:slug">
            <ReferenceDetailPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          {/* Other routes would be added here */}
          <Route path="*">
            <div className="container mx-auto py-20 text-center">
              <h1 className="text-2xl font-bold mb-4">Seite nicht gefunden</h1>
              <p>Die angeforderte Seite existiert nicht.</p>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
