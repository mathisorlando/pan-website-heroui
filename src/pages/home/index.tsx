import React from 'react';
import { HeroSection } from '../../components/hero-section';
import { ServicesOverview } from '../../components/services-overview';
import { FleetPreview } from '../../components/fleet-preview';
import { ReferencesPreview } from '../../components/references-preview';
import { Testimonials } from '../../components/testimonials';
import { ContactCTA } from '../../components/contact-cta';
import EmergencyBanner from '../../components/emergency-banner';
import BeamsBackground from '../../components/ui/beams-background';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* Single continuous beams background from first to last section */}
      <BeamsBackground intensity="subtle">
        <ServicesOverview />
        <EmergencyBanner />
        <FleetPreview />
        <ReferencesPreview />
        <Testimonials />
        <ContactCTA />
      </BeamsBackground>
    </>
  );
};
