import React from 'react';
import { HeroSection } from '../../components/hero-section';
import { ServicesSection } from '../../components/services-section';
import { StatsSection } from '../../components/stats-section';
import { ServicesOverview } from '../../components/services-overview';
import { FleetPreview } from '../../components/fleet-preview';
import { ReferencesPreview } from '../../components/references-preview';
import { Testimonials } from '../../components/testimonials';
import { ContactCTASection } from '../../components/contact-cta-section';
import { ContactCTA } from '../../components/contact-cta';
import EmergencyBanner from '../../components/emergency-banner';
import BeamsBackground from '../../components/ui/beams-background';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* Continuous beams background across services and stats sections */}
      <BeamsBackground intensity="subtle">
        <ServicesSection />
        <StatsSection />
        <ServicesOverview />
        <EmergencyBanner />
        <FleetPreview />
        <ReferencesPreview />
        <Testimonials />
      </BeamsBackground>
      
      {/* Enhanced contact section */}
      <ContactCTASection />
      <ContactCTA />
    </>
  );
};
