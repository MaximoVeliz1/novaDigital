import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import {
  faTachographDigital,
  faDesktop,
  faGlobe,
  faMobileScreenButton,
  faSatelliteDish, 
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export function Inicio() {
  return (
    <div className="antialiased">
      <section
        id="inicio"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80"
            className="w-full h-full object-cover"
            alt="Fondo Tecnológico"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-black/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-pulse">
              / Soluciones Digitales
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
              Soluciones Web para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Nuevos Negocios
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Digitalizamos tu emprendimiento y lo elevamos al mundo online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#que-ofrecemos"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
              >
                Descubre Nuestros Servicios
              </a>
              <Link
                to="/plantillas"
                className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Ver Plantillas
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador de scroll (Sutil) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ¿Quiénes somos? - Refinado minimalista */}
      <section id="quienes-somos" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-8 tracking-tight">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg text-gray-500 text-center leading-relaxed">
            Somos un equipo enfocado en ayudar a emprendedores y pequeños
            negocios a dar su primer paso en el mundo digital mediante páginas
            web profesionales, accesibles y fáciles de administrar.
          </p>
        </div>
      </section>

      {/* ¿Qué ofrecemos? - Grid mejorado */}
      <section id="que-ofrecemos" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16 tracking-tight">
            ¿Qué ofrecemos?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <FontAwesomeIcon
                icon={faDigitalOcean}
                className="text-5xl mb-6 text-blue-500 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Digitalización de pequeños negocios
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Llevamos tu negocio al mundo digital con soluciones a medida.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <FontAwesomeIcon
                icon={faTachographDigital}
                className="text-5xl mb-6 text-blue-600 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Diseño de páginas profesionales
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sitios web modernos que destacan tu marca ante la competencia.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-5xl mb-6 text-blue-600 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Catálogos digitales
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Muestra tu oferta de forma atractiva y organizada para tus
                clientes.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-5xl mb-6 text-blue-600 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Información Actualizada
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Mantén tu contenido al día de forma fácil, rápida y sin
                complicaciones.
              </p>
            </div>

            {/* Tarjeta 5: ICONOS AL MISMO NIVEL */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <div className="flex justify-center items-end gap-3 mb-6 text-blue-600">
                <FontAwesomeIcon
                  icon={faDesktop}
                  className="text-5xl group-hover:scale-110 transition-transform"
                />
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-3xl group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Acceso Multidispositivo
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Diseño responsive que se adapta perfectamente a móviles, tablets
                y PC.
              </p>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <FontAwesomeIcon
                icon={faSatelliteDish}
                className="text-5xl mb-6 text-blue-600 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Aumenta tu alcance
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Llega a más clientes potenciales y expande tu presencia online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro objetivo - Diseño elegante */}
      <section
        id="objetivo"
        className="py-24 px-4 bg-white border-t border-gray-100"
      >
        <div className="container mx-auto max-w-4xl bg-blue-600 rounded-3xl p-12 text-center shadow-2xl shadow-blue-200">
          <h2 className="text-4xl font-bold text-white mb-8">
            Nuestro objetivo
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed italic">
            "Brindar a los nuevos negocios una presencia digital sólida que les
            permita promocionar sus servicios, aumentar su alcance y mejorar su
            competitividad."
          </p>
        </div>
      </section>
    </div>
  );
}
