import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onContactOpen={openContact} />

      <main className="flex-1">
        {/* sections go here */}
      </main>

      <Footer onContactOpen={openContact} />
    </div>
  );
}
