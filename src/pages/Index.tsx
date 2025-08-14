import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import Work from "@/components/sections/Work"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
