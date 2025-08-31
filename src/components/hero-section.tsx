import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Wave from 'react-wavify';
import heroImg from '../pictures/pan_hero.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[100svh] md:h-[100vh] min-h-[820px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="PAN Hamburg – Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-md">
            Schleppbetrieb & Wasserbau in Hamburg
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-shadow-sm">
            Zuverlässig seit Jahrzehnten
          </h2>
          <p className="text-lg mb-8 max-w-2xl text-shadow-sm">
            PAN Hamburg steht für Expertise und Zuverlässigkeit im maritimen Bereich. 
            Mit modernster Technik und erfahrenen Fachkräften bieten wir maßgeschneiderte Lösungen für Ihre Projekte.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button
              as="a"
              href="tel:+491724003655"
              size="lg"
              className="bg-yellow-400 text-black font-semibold shadow-lg hover:brightness-105 hero-notruf btn-raise"
              startContent={<Icon icon="lucide:phone" />}
            >
              Notruf: +49 172 4003655
            </Button>
            <Button
              as={Link}
              to="/contact"
              color="accent"
              size="lg"
              className="btn-glass-static btn-raise font-semibold shadow-xl text-white"
              startContent={<Icon icon="lucide:message-square" />}
            >
              Jetzt anfragen
            </Button>
            <Button
              as={Link}
              to="/services"
              variant="bordered"
              size="lg"
              className="text-white border-white hover:bg-white/10 font-semibold shadow-lg btn-raise"
              startContent={<Icon icon="lucide:info" />}
            >
              Mehr erfahren
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider (react-wavify with ocean gradient) */}
      <div className="wave-divider">
        <Wave
          fill="url(#oceanGradient)"
          paused={false}
          options={{
            height: 42,
            amplitude: 24,
            speed: 0.12,
            points: 3,
          }}
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="oceanGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="var(--ocean-top)" />
              <stop offset="60%" stopColor="var(--ocean-mid)" />
              <stop offset="100%" stopColor="var(--ocean-bottom)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </section>
  );
};
