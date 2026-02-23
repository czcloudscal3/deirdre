import { motion } from 'motion/react';

export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto overflow-x-hidden pr-2">
      {items.map((item, index) => (
        <motion.div
          key={`${item.year}-${item.title}-${index}`}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative pl-6 border-l-2 border-gray-300 hover:border-black transition-colors py-2"
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-medium">{item.title}</h4>
            <span className="text-sm text-gray-600 shrink-0 ml-2">{item.year}</span>
          </div>
          {item.subtitle && <p className="text-sm text-gray-600 mb-1">{item.subtitle}</p>}
          {item.badge && (
            <span className="inline-block px-2 py-1 bg-gray-200 text-xs tracking-wide">
              {item.badge}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
