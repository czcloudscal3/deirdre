interface FooterProps {
  onContactOpen: () => void;
}

export default function Footer({ onContactOpen }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl mb-4 tracking-wide">DEIRDRE LORENZ</h3>
        <p className="text-gray-400 mb-6">New York Based • Available Worldwide</p>
        <button
          onClick={onContactOpen}
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
        >
          GET IN TOUCH
        </button>
        <div className="mt-8 text-sm text-gray-500">
          © 2026 Deirdre Lorenz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
