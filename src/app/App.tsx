import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Inicio } from '@/app/pages/Inicio';
import { Plantillas } from '@/app/pages/Plantillas';
import { Contacto } from '@/app/pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/plantillas" element={<Plantillas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
