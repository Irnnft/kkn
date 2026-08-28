import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MainTabs } from "@/components/MainTabs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MainTabs />
      <Footer />
    </main>
  );
}
