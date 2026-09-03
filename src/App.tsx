import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CakeCollection from "./components/CakeCollection";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import OrderSection from "./components/OrderSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CakeCollection />
        <Gallery />
        <WhyChooseUs />
        <OrderSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
