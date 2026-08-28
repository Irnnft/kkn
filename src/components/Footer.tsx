import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-forest text-cream py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-white/10 pb-12 mb-8">
          
          <div className="space-y-4">
            <h2 className="font-cormorant text-3xl font-bold tracking-tight">
              Pongkai <span className="font-playfair italic">Istiqomah</span>
            </h2>
            <p className="text-cream/70 text-sm max-w-xs">
              Mewujudkan desa yang mandiri, berbudaya, dan sejahtera melalui kolaborasi masyarakat, pemuda, dan Mahasiswa KKN.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Kontak Desa</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 shrink-0 mt-0.5" />
                <span>Desa Pongkai Istiqomah, Kec. XIII Koto Kampar, Kab. Kampar, Riau</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0" />
                <span>kontak@pongkaiistiqomah.desa.id</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Social Media KKN</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 shrink-0"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a href="https://www.instagram.com/kknpongkaiistiqamah2026/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 shrink-0"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <a href="https://www.tiktok.com/@kknpongkaiistiqamah2026?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#jelajah" className="hover:text-white transition-colors">Jelajah Desa</a></li>
              <li><a href="#cerita" className="hover:text-white transition-colors">Napak Tilas</a></li>
              <li><a href="#kkn" className="hover:text-white transition-colors">Program KKN</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mb-8 border-b border-cream/10 pb-8">
          <img src="/images/logo/LOGO UIN.png" alt="Logo UIN Suska Riau" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/images/logo/LOGO KKN.png" alt="Logo KKN" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/images/logo/LOGO DESA.png" alt="Logo Desa Pongkai Istiqomah" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>

        <div className="text-center text-xs text-cream/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Desa Pongkai Istiqomah. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">Dibuat Oleh Mahasiswa KKN Dari UIN SUSKA RIAU 2026</p>
        </div>
      </div>
    </footer>
  );
}
