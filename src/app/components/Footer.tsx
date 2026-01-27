import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-2"> <FontAwesomeIcon
            icon={faDigitalOcean}
            className="text-3xl text-blue-600 group-hover:rotate-12 transition-transform"
          /> <span className="text-2xl font-extrabold tracking-tighter text-white-900">
            Nova<span className="text-blue-600">Digital</span>
          </span> </h3>
        <p className="text-gray-400 mb-4">
          Digitalizamos tu negocio y lo llevamos al mundo online
        </p>
        <p className="text-gray-400">
          © 2026 NovaDigital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
