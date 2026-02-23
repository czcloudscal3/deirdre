import { motion } from 'motion/react';
import { Mic2 } from 'lucide-react';

import podcastCover from '@/assets/images/e035e6b725a802b90396bcc956204fa11b13d31d.png';

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Mic2 size={32} className="text-gray-800" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Podcast</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Join the conversation on Upgraded with Deirdre Lorenz—where creativity,
            authenticity, and inspiration meet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="max-w-md w-full">
              <img
                src={podcastCover}
                alt="Upgraded with Deirdre Lorenz Podcast"
                className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl mb-4 tracking-wide">Upgraded with Deirdre Lorenz</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dive deep into fun conversations about travel, arts, leisure, and life. Each
              episode features candid discussions, industry insights, and stories that inspire
              you to upgrade your mindset and your life.
            </p>

            <div className="space-y-4">
              <motion.a
                href="https://www.youtube.com/@UpgradedWithDeirdreLorenz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 tracking-wide text-center"
              >
                WATCH ON YOUTUBE
              </motion.a>

              <p className="text-sm text-gray-600 tracking-wider">
                Available on: YouTube • Spotify • Apple Podcasts • Google Podcasts
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
