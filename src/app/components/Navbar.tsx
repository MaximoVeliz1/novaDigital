import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <FontAwesomeIcon icon={faDigitalOcean} className="text-3xl text-blue-600 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            Nova<span className="text-blue-600">Digital</span>
          </span>
        </Link>

        <div className="flex space-x-8 items-center">
          {/* Menu Desplegable */}
          <div className="relative group">
            <button 
              onMouseEnter={() => setIsOpen(true)}
              className="text-gray-700 hover:text-blue-600 font-bold flex items-center gap-1 py-2"
            >
              Inicio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>

            {isOpen && (
              <div 
                onMouseLeave={() => setIsOpen(false)}
                className="absolute left-0 mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2"
              >
                <Link to="/" onClick={closeMenu} className="block px-4 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50">Ir al Inicio</Link>
                <hr className="border-gray-50 mx-2" />
                <a href="/#quienes-somos" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">¿Quiénes somos?</a>
                <a href="/#que-ofrecemos" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">¿Qué ofrecemos?</a>
                <a href="/#objetivo" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">Nuestro objetivo</a>
              </div>
            )}
          </div>

          <Link to="/plantillas" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">Plantillas</Link>
          <Link to="/contacto" className="text-gray-700 hover:text-blue-600 font-bold transition-colors px-4 py-2 bg-blue-50 rounded-full">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}