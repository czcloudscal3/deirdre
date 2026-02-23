import { motion } from 'motion/react';
import { Film } from 'lucide-react';
import Timeline from '@/components/ui/Timeline';
import { filmography } from '@/data/filmography';

import actingPhoto from '@/assets/images/2ab429576897a3af04bc861485a20d9b9567c68b.png';

const timelineItems = filmography.map((item) => ({
  year: item.year,
  title: item.title,
  subtitle: `${item.role} • ${item.type}`,
}));

export default function ActingSection() {
  return (
    <section id="acting" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Film size={32} className="text-gray-800" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Acting</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Transforming characters into authentic performances across film, television,
            series, content creation and theater.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-3/4 overflow-hidden rounded-lg"
          >
            <img
              src={actingPhoto}
              alt="Acting portfolio"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl mb-6 tracking-wide">Filmography</h3>
            <Timeline items={timelineItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
