"use client";

import { motion } from "framer-motion";
import { LOKASI_DESA } from "@/data";
import { Eye } from "lucide-react";

export function JelajahDesa() {
  return (
    <section id="jelajah" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-forest mb-4">
            Jelajah Desa
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Berikut adalah beberapa fasilitas umum, sarana pendidikan, tempat ibadah, serta ikon penting yang ada di Desa Pongkai Istiqomah.
          </p>
        </div>

        {/* Grid / Carousel */}
        <div className="flex md:grid overflow-x-auto snap-x snap-mandatory md:snap-none gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 pb-8 scrollbar-hide">
          {LOKASI_DESA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-black/5 bg-cream hover:shadow-xl transition-all duration-300 w-[85%] sm:w-[60%] md:w-auto flex-shrink-0 snap-center md:snap-align-none"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-forest transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-cormorant text-xl md:text-2xl font-bold text-forest mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm md:text-sm line-clamp-2 md:line-clamp-3 leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
