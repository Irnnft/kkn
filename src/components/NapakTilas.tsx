"use client";

import { motion } from "framer-motion";
import { SEJARAH_DESA } from "@/data";

export function NapakTilas() {
  return (
    <section id="cerita" className="py-24 px-6 bg-cream border-y border-black/5">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-forest mb-4">
            Napak Tilas <span className="font-playfair italic">Sejarah</span>
          </h2>
        </div>

        <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg text-justify md:text-left">
          {SEJARAH_DESA.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
