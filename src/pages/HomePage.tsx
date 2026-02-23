import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactModal from '@/components/forms/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import FashionSection from '@/components/sections/FashionSection';
import ActingSection from '@/components/sections/ActingSection';
import FilmmakingSection from '@/components/sections/FilmmakingSection';
import PodcastSection from '@/components/sections/PodcastSection';
import VolunteeringSection from '@/components/sections/VolunteeringSection';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onContactOpen={openContact} />

      <main className="flex-1">
        <HeroSection />
        <FashionSection />
        <ActingSection />
        <FilmmakingSection />
        <PodcastSection />
        <VolunteeringSection />
      </main>

      <Footer onContactOpen={openContact} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
