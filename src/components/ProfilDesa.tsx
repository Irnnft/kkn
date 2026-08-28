"use client";

import { motion } from "framer-motion";
import { PROFIL_DESA } from "@/data";

export function ProfilDesa() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-forest mb-4">
            Profil <span className="font-playfair italic">Desa</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Batas Wilayah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
              Batas Wilayah
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white/50 rounded-lg overflow-hidden">
                <thead className="bg-forest/10 text-forest font-semibold">
                  <tr>
                    <th className="p-4 border-b border-forest/20 whitespace-nowrap">Batas</th>
                    <th className="p-4 border-b border-forest/20 whitespace-nowrap">Desa/Kelurahan</th>
                    <th className="p-4 border-b border-forest/20 whitespace-nowrap">Kecamatan</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/80">
                  {PROFIL_DESA.batasWilayah.map((item, index) => (
                    <tr key={index} className="hover:bg-white/60 transition-colors">
                      <td className="p-4 border-b border-forest/10">{item.batas}</td>
                      <td className="p-4 border-b border-forest/10">{item.desa}</td>
                      <td className="p-4 border-b border-forest/10">{item.kecamatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Monografi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
              Monografi
            </h3>
            <p className="text-charcoal/80 leading-relaxed text-lg text-justify">
              {PROFIL_DESA.monografi}
            </p>
          </motion.div>

          {/* Topografi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Bentangan Wilayah
              </h3>
              <ul className="space-y-3 text-charcoal/80">
                {PROFIL_DESA.topografi.bentangan.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white/30 p-3 rounded-md">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest/10 text-forest flex items-center justify-center text-sm">✓</span>
                    <span>{item.nama}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Letak
              </h3>
              <ul className="space-y-3 text-charcoal/80">
                {PROFIL_DESA.topografi.letak.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white/30 p-3 rounded-md">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest/10 text-forest flex items-center justify-center text-sm">✓</span>
                    <span>{item.nama}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Orbitasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
              Orbitasi
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-charcoal/80">
              {PROFIL_DESA.orbitasi.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between bg-white/40 p-4 rounded-lg">
                  <span className="font-medium pr-4">{item.label}</span>
                  <span className="text-forest md:text-right mt-2 md:mt-0 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lembaga Pemerintahan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white/40 p-6 rounded-lg">
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Pemerintah Desa
              </h3>
              <div className="space-y-3 text-charcoal/80">
                {PROFIL_DESA.lembagaPemerintahan.pemerintahDesa.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-forest/10 pb-2 last:border-0">
                    <span className="pr-4">{item.label}</span>
                    <span className="font-semibold text-forest text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/40 p-6 rounded-lg">
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Badan Permusyawaratan Desa
              </h3>
              <div className="space-y-3 text-charcoal/80">
                {PROFIL_DESA.lembagaPemerintahan.bpd.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-forest/10 pb-2 last:border-0">
                    <span className="pr-4">{item.label}</span>
                    <span className="font-semibold text-forest text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kependudukan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white/40 p-6 rounded-lg">
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Jumlah Penduduk
              </h3>
              <div className="space-y-3 text-charcoal/80">
                {PROFIL_DESA.kependudukan.jumlahPenduduk.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-forest/10 pb-2 last:border-0">
                    <span className="pr-4">{item.label}</span>
                    <span className="font-semibold text-forest text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-4 border-b border-forest/20 pb-2">
                Mata Pencaharian Pokok
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white/50 rounded-lg overflow-hidden">
                  <thead className="bg-forest/10 text-forest font-semibold">
                    <tr>
                      <th className="p-3 border-b border-forest/20">Jenis Pekerjaan</th>
                      <th className="p-3 border-b border-forest/20 text-center">Laki-laki</th>
                      <th className="p-3 border-b border-forest/20 text-center">Perempuan</th>
                    </tr>
                  </thead>
                  <tbody className="text-charcoal/80 text-sm">
                    {PROFIL_DESA.kependudukan.mataPencaharian.map((item, index) => (
                      <tr key={index} className="hover:bg-white/60 transition-colors">
                        <td className="p-3 border-b border-forest/10 font-medium">{item.pekerjaan}</td>
                        <td className="p-3 border-b border-forest/10 text-center">{item.lakiLaki}</td>
                        <td className="p-3 border-b border-forest/10 text-center">{item.perempuan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
