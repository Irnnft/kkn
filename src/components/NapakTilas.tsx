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

          <div className="space-y-12 text-charcoal/80 leading-relaxed text-lg text-left">
            {SEJARAH_DESA.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="font-cormorant text-2xl font-semibold text-forest border-b border-forest/10 pb-2 mb-4">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((item, i) => {
                    if (item.type === "p") {
                      return <p key={i}>{item.text}</p>;
                    } else if (item.type === "ul") {
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 ml-4">
                          {item.items?.map((li, j) => (
                            <li key={j} className="pl-2">{li}</li>
                          ))}
                        </ul>
                      );
                    } else if (item.type === "blockquote") {
                      return (
                        <blockquote key={i} className="border-l-4 border-forest pl-4 italic text-charcoal/70 bg-forest/5 p-4 rounded-r-lg whitespace-pre-line">
                          {item.text}
                        </blockquote>
                      );
                    }
                    return null;
                  })}
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
