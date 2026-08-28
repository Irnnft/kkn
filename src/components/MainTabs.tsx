"use client";

import { useState, useEffect } from "react";
import { ProfilDesa } from "./ProfilDesa";
import { JelajahDesa } from "./JelajahDesa";
import { NapakTilas } from "./NapakTilas";
import { KilasKKN } from "./KilasKKN";

export function MainTabs() {
  const [activeTab, setActiveTab] = useState<"desa" | "kkn">("desa");

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Wait for React to render the newly visible tab
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#kkn") {
        setActiveTab("kkn");
        scrollToHash(hash);
      } else if (hash === "#profil" || hash === "#jelajah" || hash === "#cerita") {
        setActiveTab("desa");
        scrollToHash(hash);
      }
    };

    // Initial check without smooth scroll
    const initialHash = window.location.hash;
    if (initialHash === "#kkn") setActiveTab("kkn");
    else if (["#profil", "#jelajah", "#cerita"].includes(initialHash)) setActiveTab("desa");

    window.addEventListener("hashchange", handleHashChange);
    
    // Overriding native click on anchors to ensure state updates before scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash) {
        if (anchor.hash === "#kkn") {
          setActiveTab("kkn");
          scrollToHash(anchor.hash);
        } else if (["#profil", "#jelajah", "#cerita"].includes(anchor.hash)) {
          setActiveTab("desa");
          scrollToHash(anchor.hash);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Tab Controls */}
      <div className="bg-cream pt-16 pb-8 px-6 flex flex-col md:flex-row justify-center items-center gap-4 border-b border-black/5">
        <button
          onClick={() => setActiveTab("desa")}
          className={`w-full md:w-auto px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "desa"
              ? "bg-forest text-white shadow-lg scale-105"
              : "bg-white text-charcoal/70 hover:bg-forest/10 hover:text-forest shadow-sm"
          }`}
        >
          Desa Pongkai Istiqomah
        </button>
        <button
          onClick={() => setActiveTab("kkn")}
          className={`w-full md:w-auto px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "kkn"
              ? "bg-forest text-white shadow-lg scale-105"
              : "bg-white text-charcoal/70 hover:bg-forest/10 hover:text-forest shadow-sm"
          }`}
        >
          Kuliah Kerja Nyata (KKN)
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        <div className={activeTab === "desa" ? "block" : "hidden"}>
          <div id="profil">
            <ProfilDesa />
          </div>
          <JelajahDesa />
          <NapakTilas />
        </div>
        <div className={activeTab === "kkn" ? "block" : "hidden"}>
          <KilasKKN />
        </div>
      </div>
    </div>
  );
}
