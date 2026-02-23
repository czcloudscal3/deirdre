import { motion } from 'motion/react';
import { Clapperboard } from 'lucide-react';
import Timeline from '@/components/ui/Timeline';
import { filmProjects } from '@/data/filmProjects';

import filmMakingPoster from '@/assets/images/5a8d8c0258102d5d81e53b6ffa0c2fbbf49d1aa8.png';

const timelineItems = filmProjects.map((item) => ({
  year: item.year,
  title: item.title,
  subtitle: item.role,
  badge: item.type,
}));

export default function FilmmakingSection() {
  return (
    <section id="filmmaking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Clapperboard size={32} className="text-gray-800" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Film Making
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Deirdre writes, directs, and produces character-driven stories through her
            production company, Lookout Point Films LLC. She has multiple projects in
            development and has received domestic and international recognition for her work,
            including Best Short Film Director at the Vienna Independent Film Festival.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <h3 className="text-2xl mb-6 tracking-wide">Projects</h3>
            <Timeline items={timelineItems} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-3/4 overflow-hidden rounded-lg order-1 md:order-2"
          >
            <img
              src={filmMakingPoster}
              alt="Return to New York - Film by Deirdre Lorenz"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
