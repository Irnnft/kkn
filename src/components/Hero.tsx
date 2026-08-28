"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Image dengan Gradasi */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Landing%20page.jpeg"
          alt="Pemandangan Desa Pongkai"
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Gradasi memudar ke warna cream (sesuai background website) di bagian bawah */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/70 to-cream"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-sage/40 bg-white/50 backdrop-blur-md text-forest text-xs font-medium mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-forest mr-2"></span>
          Desa Pongkai Istiqomah, XIII Koto Kampar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cormorant text-5xl md:text-7xl font-semibold leading-tight text-forest mb-6"
        >
          Bersama Mengabdi, <br />
          <span className="font-playfair italic font-normal text-sage">Tumbuh dan Berarti.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-charcoal/80 text-lg md:text-xl max-w-2xl"
        >
          Jelajahi pesona alam yang asri, kekayaan budaya yang autentik, dan jejak langkah pengabdian kami untuk kemajuan desa.
        </motion.p>
      </div>
    </section>
  );
}
