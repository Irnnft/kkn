"use client";

import { motion } from "framer-motion";
import { TIM_KKN, PROGRAM_KKN, GALERI_FOTO } from "@/data";
import { CheckCircle2, CircleDashed, AtSign } from "lucide-react";

export function KilasKKN() {
  return (
    <section id="kkn" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-forest mb-4">
            Kilas <span className="font-playfair italic">KKN</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Jejak langkah dan cerita pengabdian kami, mahasiswa Kuliah Kerja Nyata (KKN) dari UIN SUSKA Riau, selama 40 hari mengabdi di Desa Pongkai Istiqomah (20 Juli - 31 Agustus 2026). Sebuah perjalanan singkat yang penuh makna, merajut asa, dan merangkai kenangan indah bersama masyarakat tercinta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kolom 1 & 2: Tim & Program */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Tim KKN */}
            <div>
              <h3 className="font-cormorant text-3xl font-bold text-forest mb-6 border-b border-black/5 pb-2">
                Tim Pengabdi
              </h3>
              
              {/* Foto Bersama */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-black/5 shadow-md"
              >
                <img 
                  src="/images/Foto%20Anggota.jpeg" 
                  alt="Foto Bersama Tim KKN" 
                  className="w-full h-full object-cover object-center" 
                />
              </motion.div>
              {/* Ketua / Koordinator */}
              <div className="flex justify-center mb-4 md:mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4 bg-cream rounded-2xl border border-black/5 hover:shadow-md transition-shadow w-[48%] sm:w-[31%] lg:w-[23%]"
                >
                  <h4 className="font-bold text-forest text-sm md:text-base leading-tight mb-1">{TIM_KKN[0].name}</h4>
                  <p className="text-[10px] md:text-xs font-semibold text-sage mb-1">{TIM_KKN[0].role}</p>
                  <p className="text-[10px] md:text-xs text-charcoal/60 mb-0.5">{TIM_KKN[0].major}</p>
                  <p className="text-[10px] md:text-xs text-charcoal/60 mb-3">{TIM_KKN[0].origin}</p>
                  <a href={`https://instagram.com/${TIM_KKN[0].instagram.substring(1)}`} target="_blank" rel="noreferrer" className="text-sage hover:text-forest transition-colors mt-auto">
                    <AtSign size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Anggota Lainnya */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {TIM_KKN.slice(1).map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center text-center p-4 bg-cream rounded-2xl border border-black/5 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-forest text-sm md:text-base leading-tight mb-1">{member.name}</h4>
                    <p className="text-[10px] md:text-xs font-semibold text-sage mb-1">{member.role}</p>
                    <p className="text-[10px] md:text-xs text-charcoal/60 mb-0.5">{member.major}</p>
                    <p className="text-[10px] md:text-xs text-charcoal/60 mb-3">{member.origin}</p>
                    <a href={`https://instagram.com/${member.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="text-sage hover:text-forest transition-colors mt-auto">
                      <AtSign size={16} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program Kerja */}
            <div>
              <h3 className="font-cormorant text-3xl font-bold text-forest mb-6 border-b border-black/5 pb-2">
                Program Kerja
              </h3>
              <div className="relative border-l border-sage/40 ml-3 space-y-8">
                {PROGRAM_KKN.map((prog, i) => (
                  <motion.div
                    key={prog.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-6 w-4 h-4 bg-forest rounded-full border-4 border-white z-10"></div>

                    {/* Card */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="font-cormorant text-xl font-bold text-forest">{prog.title}</h4>
                        <span className={`inline-flex items-center self-start sm:self-auto mt-2 sm:mt-0 px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap ${
                          prog.status === "Selesai" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {prog.status === "Selesai" ? <CheckCircle2 size={12} className="mr-1" /> : <CircleDashed size={12} className="mr-1" />}
                          {prog.status}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal/70">{prog.outcome}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 3: Photo Dump / Gallery */}
          <div className="lg:col-span-1">
            <h3 className="font-cormorant text-3xl font-bold text-forest mb-6 border-b border-black/5 pb-2">
              Galeri
            </h3>
            <div className="columns-2 gap-4">
              {GALERI_FOTO.map((foto, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-xl overflow-hidden shadow-sm break-inside-avoid mb-4 block"
                >
                  <img src={foto} alt={`Dokumentasi ${i+1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
