import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"
import Hero from "@/pages/hero-section/Hero";
import About from "@/pages/about/About";
import Service from "@/pages/services/Service";
import Projects from "@/pages/projects/Projects";
import Testimonials from "@/pages/testimonials/Testimonials";
import Contact from "@/pages/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="Home"><Hero /></section>
      <section id="About Me"><About /></section>
      <section id="Services"><Service /></section>
      <section id="Projects"><Projects /></section>
      <section id="Testimonials"><Testimonials /></section>
      <section id="Contact"><Contact /></section>
      <Footer />
    </>
  );
}
