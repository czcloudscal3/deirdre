import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const causes = [
  'Feeding those in need & delivering meals to homebound people',
  'Supporting literacy through book drives & reading to children',
  'Helping at animal shelters',
  'Raising money for cancer research',
];

export default function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart size={32} className="text-gray-800" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Full Heart&apos;s Club
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            From the time she was a little girl, Deirdre&apos;s mother instilled in her the
            importance of helping others and giving back to the community. With that core value,
            she has continued to serve and give back to her local community, as well as
            communities around the globe, as she has traveled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 text-center">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-6">
              <Heart size={40} className="text-gray-800" />
            </div>
            <h3 className="text-2xl mb-4 tracking-wide">
              Carolyn Helman Lichtenberg Crest Award
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Deirdre was deeply honored to receive the Carolyn Helman Lichtenberg Crest Award
              from the National Pi Beta Phi Alumnae Club. This award recognizes alumnae who
              have positively impacted their communities through their professional success and
              dedication to serving others.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl mb-6 tracking-wide">Join the Mission</h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Join her on her ongoing mission to continue giving back to the community through
            philanthropic service work for numerous important causes she supports, including,
            but not limited to:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {causes.map((cause, index) => (
              <motion.div
                key={cause}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Heart size={20} className="text-gray-800 shrink-0 mt-1" />
                <span className="text-gray-700">{cause}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
