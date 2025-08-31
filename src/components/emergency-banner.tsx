import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="py-14 bg-danger-600 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Icon icon="lucide:clock" className="text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold">24/7 Notfalldienst</h2>
          </div>
          <p className="text-white/90 max-w-2xl">
            In Notfallsituationen sind wir rund um die Uhr für Sie da. Unser erfahrenes Team steht bereit für schnelle Hilfe.
          </p>
          <div className="flex justify-center mt-2">
            <Button
              as="a"
              href="tel:+491724003655"
              className="bg-yellow-400 text-black font-medium"
              startContent={<Icon icon="lucide:phone" />}
            >
              Notruf: +49 172 4003655
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
