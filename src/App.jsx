import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.replace("#", ""));

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToSection />

      <Navbar />

      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
