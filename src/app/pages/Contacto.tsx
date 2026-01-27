import { useState } from "react";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipoNegocio: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Tu número real sin el '+' ni espacios
    const telefono = "593992070230";

    // El mensaje se formatea para que WhatsApp lo reciba con saltos de línea (%0A)
    const mensajeWhatsApp = encodeURIComponent(
      `Hola NovaDigital! 🚀\n` +
        `Mi nombre es: ${formData.nombre}\n` +
        `Mi correo: ${formData.correo}\n` +
        `Me interesa: ${formData.tipoNegocio}\n` +
        `Mi idea: ${formData.mensaje}`,
    );

    // Esta es la URL final que se genera
    window.open(`https://wa.me/${telefono}?text=${mensajeWhatsApp}`, "_blank");
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna Izquierda: Branding e Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl font-black text-gray-900 mb-6 tracking-tighter">
                Hagamos algo <br />
                <span className="text-blue-600">increíble.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                ¿Tienes una idea? Nosotros tenemos la tecnología para hacerla
                realidad. Completa el formulario y recibe una asesoría gratuita.
              </p>
            </div>
            <div className="grid gap-6">
              {/* Tarjeta de Correo */}
              <a
                href="mailto:contacto@novadigital.com"
                className="flex items-center justify-between p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg group"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">📧</span>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      Escríbenos
                    </p>
                    <p className="text-gray-900 font-semibold text-lg">
                      contacto@novadigital.com
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 p-3 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>

              {/* Tarjeta de WhatsApp */}
              <button
                onClick={() =>
                  window.open("https://wa.me/593992070230", "_blank")
                }
                className="w-full flex items-center justify-between p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg group text-left"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">📱</span>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      WhatsApp
                    </p>
                    <p className="text-gray-900 font-semibold text-lg">
                      +593 992 070 230
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 p-3 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </button>

              {/* Tarjeta de Oficina Central */}
              <a
                href="https://maps.app.goo.gl/vtE1Qs7rFHrjRa6L9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg group"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      Oficina Central
                    </p>
                    <p className="text-gray-900 font-semibold text-lg">
                      Av. Las Aguas, Guayaquil
                    </p>
                    <p className="text-sm text-gray-400">
                      Facultad de Ingeniería Industrial
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 p-3 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario Estilizado */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all"
                    placeholder="Juan Pérez"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                  />
                </div>

                <div className="group">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all"
                    placeholder="tu@negocio.com"
                    value={formData.correo}
                    onChange={(e) =>
                      setFormData({ ...formData, correo: e.target.value })
                    }
                  />
                </div>

                <div className="group">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Tipo de Proyecto
                  </label>
                  <select
                    className="w-full mt-2 px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all"
                    value={formData.tipoNegocio}
                    onChange={(e) =>
                      setFormData({ ...formData, tipoNegocio: e.target.value })
                    }
                  >
                    <option value="">Selecciona tu negocio</option>
                    <option value="veterinaria">Veterinaria</option>
                    <option value="tienda">Tienda / Ecommerce</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="group">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Cuéntanos tu idea
                  </label>
                  <textarea
                    rows={4}
                    className="w-full mt-2 px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all resize-none"
                    placeholder="Me gustaría una web que..."
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-lg shadow-blue-500/40 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
