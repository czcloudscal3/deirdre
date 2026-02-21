import { useState } from 'react';
import Navbar from '../components/layout/Navbar';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactOpen={() => setIsContactOpen(true)} />

      {/* sections go here */}

      {/* isContactOpen: {String(isContactOpen)} */}
    </div>
  );
}
