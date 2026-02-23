import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import FashionCarousel from './FashionCarousel';

import img1 from '@/assets/images/0b4064aad4f6b90fc34be7754ed37fe5635032f3.png';
import img2 from '@/assets/images/1206232b05aae910c490def453f85a1db4b4c19e.png';
import img3 from '@/assets/images/231e4c7c42ca4bc5aa2fa9a814def33c2ff5ad1d.png';
import img4 from '@/assets/images/3df6857093612d87e9d3c202093dd46c2b07ca6b.png';
import img5 from '@/assets/images/437d942e26f16f48f8e667941be74abc85ea1d39.png';
import img6 from '@/assets/images/4b95d4c1bb23a276f95e518530cd2632448ade6b.png';
import img7 from '@/assets/images/6541da0c5db2c5856e498b3c7fe7c15f64999e1c.png';
import img8 from '@/assets/images/6b736a9577eb214ffc8a742c4c7be611fb2f0c9d.png';
import img9 from '@/assets/images/ff6013567d83154999272571003d7cbdce242c0b.png';

const fashionImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function FashionSection() {
  return (
    <section id="fashion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Camera size={32} className="text-gray-800" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Fashion & Atelier Modeling
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Bringing vision to life through the art of fashion. From runway to atelier, each
            performance tells a unique story of style and elegance. Deirdre has been modeling
            since she was a young girl, continuing to appreciate the beauty of original textile
            expression through this evolving creative industry. She&apos;s currently represented
            by the global agency Elite Model Management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FashionCarousel images={fashionImages} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 tracking-wider">
            Clients include: Karl Lagerfeld • DKNY • Ralph Lauren • Isaac Mizrahi • Shoshanna
            • Calvin Klein • Abercrombie & Fitch • Champion • Levis, and many more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
