import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-forest text-cream py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          
          <div className="space-y-4">
            <h2 className="font-cormorant text-3xl font-bold tracking-tight">
              Pongkai <span className="font-playfair italic">Istiqomah</span>
            </h2>
            <p className="text-cream/70 text-sm max-w-xs">
              Mewujudkan desa yang mandiri, berbudaya, dan sejahtera melalui kolaborasi masyarakat dan pemuda.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
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
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#jelajah" className="hover:text-white transition-colors">Jelajah Desa</a></li>
              <li><a href="#cerita" className="hover:text-white transition-colors">Napak Tilas</a></li>
              <li><a href="#kkn" className="hover:text-white transition-colors">Program KKN</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-cream/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Desa Pongkai Istiqomah. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">Dibuat dengan niat dan kerja keras irfan di tengah malam 2026</p>
        </div>
      </div>
    </footer>
  );
}
