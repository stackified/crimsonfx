import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import AboutSection3 from "@/components/ui/about-section";

export default function AboutPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main>
        <AboutSection3 />
      </main>
      <Footer />
    </>
  );
}
