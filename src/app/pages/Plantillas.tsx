import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/plantilla.css";

const listaPlantillas = [
  {
    id: "imgtemp-vet-01",
    nombre: "Veterinaria",
    descripcion:
      "Gestión completa para clínicas veterinarias. Incluye secciones de servicios médicos, catálogo de productos especializados y un sistema de agendamiento directo. Ideal para profesionales que buscan proyectar confianza y modernidad.",
    imagenes: [
      "/assets/plantillas/veterinaria/PaginawebEjemplo.jpeg",
      "/assets/plantillas/veterinaria/FacturaEjemplo.jpg",
      "/assets/plantillas/veterinaria/Factura2.jpg",
    ],
  },
  {
    nombre: "Peluquería & Barbería",
    descripcion:
      "Diseño elegante y visual enfocado en resaltar tus trabajos. Cuenta con galería de estilos, perfiles para cada barbero o estilista y un botón flotante para reservas inmediatas por WhatsApp.",
    imagenes: [
      "/assets/plantillas/Peluqueria/paginawebPelu.jpg",
      "/assets/plantillas/Peluqueria/factura1.jpg",
      "/assets/plantillas/Peluqueria/Peluqueria.jpg",
    ],
  },
  {
    nombre: "Juguetería",
    descripcion:
      "Una interfaz colorida y amigable pensada para captar la atención. Organiza tus juguetes por categorías de edad o tipo de aprendizaje, facilitando la navegación de los padres.",
    imagenes: [
      "/assets/plantillas/Jugueteria/PaginaWeb.jpg",
      "/assets/plantillas/Jugueteria/Ejemplo.jpg",
      "/assets/plantillas/Jugueteria/factura.jpg",
    ],
  },
  {
    nombre: "Papeleria",
    descripcion:
      "Una plataforma versátil y dinámica diseñada para resaltar la variedad de tus productos. Organiza tu inventario por departamentos o colecciones exclusivas, ofreciendo una experiencia de compra ágil, intuitiva y visualmente atractiva para tus clientes.",
    imagenes: 
    ["/assets/plantillas/Papeleria/web.png"],
  },
];

export function Plantillas() {
  // Estado para la plantilla seleccionada (Modal)
  const [plantillaActiva, setPlantillaActiva] = useState<any>(null);

  return (
    <div className="pt-32 pb-20 px-4 bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">
            Explora Nuestras <span className="text-blue-600">Demos</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Haz clic en cualquier imagen para ver los detalles al estilo
            Instagram. Diseños 100% adaptables a tu marca.
          </p>
        </div>

        {/* GRID DE PLANTILLAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaPlantillas.map((item) => (
            <div
              key={item.nombre}
              className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100 flex flex-col group"
            >
              {/* CARRUSEL QUE ABRE EL MODAL AL HACER CLIC */}
              <div
                className="h-64 relative cursor-pointer"
                onClick={() => setPlantillaActiva(item)}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  className="h-full w-full"
                >
                  {item.imagenes.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={item.nombre}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Overlay sutil de "Ver más" al pasar el mouse */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Ver Detalles
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.nombre}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-2">
                  {item.descripcion}
                </p>
                <button
                  onClick={() => setPlantillaActiva(item)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-bold transition-all"
                >
                  Detalles de Plantilla
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL ESTILO --- */}
      {plantillaActiva && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setPlantillaActiva(null)}
        >
          <div
            className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Parte Izquierda: Visual (Carrusel Grande) */}
            <div className="w-full md:w-2/3 bg-gray-100 relative h-[40vh] md:h-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-full w-full"
              >
                {plantillaActiva.imagenes.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      className="w-full h-full object-contain bg-slate-200"
                      alt="Vista previa"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Parte Derecha: Información (Descripción) */}
            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col bg-white">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-gray-900 tracking-tighter">
                  {plantillaActiva.nombre}
                </h2>
                <button
                  onClick={() => setPlantillaActiva(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex-grow overflow-y-auto pr-2">
                <p className="text-gray-600 leading-relaxed mb-8 text-lg italic">
                  "{plantillaActiva.descripcion}"
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    Incluido en el diseño:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "Diseño Responsive",
                      "Optimización de Carga",
                      "Integración WhatsApp",
                      "Panel Editable",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <span className="mr-3 text-blue-500">✦</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  to="/contacto"
                  className="block w-full bg-blue-600 text-white text-center py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all"
                  onClick={() => setPlantillaActiva(null)}
                >
                  Lo quiero para mi negocio
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
