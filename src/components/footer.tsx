import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from "@heroui/react";
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  const logoSrc = `${import.meta.env.BASE_URL}pan_logo.svg`;
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSrc} alt="PAN Hamburg Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl">PAN Hamburg</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Schleppbetrieb & Wasserbau in Hamburg – zuverlässig seit Jahrzehnten.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-accent transition-colors">
                <Icon icon="lucide:facebook" className="text-xl" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-accent transition-colors">
                <Icon icon="lucide:linkedin" className="text-xl" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-accent transition-colors">
                <Icon icon="lucide:instagram" className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Startseite</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Über uns</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Leistungen</Link></li>
              <li><Link to="/fleet" className="hover:text-accent transition-colors">Flotte & Equipment</Link></li>
              <li><Link to="/references" className="hover:text-accent transition-colors">Referenzen</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#schlepp" className="hover:text-accent transition-colors">Schleppbetrieb</Link></li>
              <li><Link to="/services#wasserbau" className="hover:text-accent transition-colors">Wasserbau</Link></li>
              <li><Link to="/services#bergung" className="hover:text-accent transition-colors">Bergungen & Taucherarbeiten</Link></li>
              <li><Link to="/services#hafenbau" className="hover:text-accent transition-colors">Ufer- und Hafenbau</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:map-pin" className="text-accent mt-1" />
                <span>Entenwerder 1<br />20539 Hamburg</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-accent" />
                <a href="tel:+494079754205" className="hover:text-accent transition-colors">+49 40 79754205</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:smartphone" className="text-accent" />
                <a href="tel:+491724003655" className="hover:text-accent transition-colors">+49 172 4003655</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-accent" />
                <a href="mailto:mail@pan-hamburg.de" className="hover:text-accent transition-colors">mail@pan-hamburg.de</a>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PAN Hamburg. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-accent transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
