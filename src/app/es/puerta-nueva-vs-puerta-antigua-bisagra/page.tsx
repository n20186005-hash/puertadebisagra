import Link from "next/link";
import { Metadata } from "next";

const BASE_URL = "https://www.puertadebisagra.com";

export const metadata: Metadata = {
  title: "Puerta Nueva y Puerta Antigua de Bisagra: diferencias y qué ver",
  description:
    "Compara la Puerta Nueva de Bisagra y la Puerta Antigua de Bisagra en Toledo: nombre, época, arquitectura, ubicación y consejos de visita.",
  alternates: {
    canonical: `${BASE_URL}/es/puerta-nueva-vs-puerta-antigua-bisagra`,
  },
  openGraph: {
    title: "Puerta Nueva y Puerta Antigua de Bisagra: diferencias y qué ver",
    description:
      "Guía comparativa entre la Puerta Nueva de Bisagra y la Puerta Antigua o Puerta de Alfonso VI en Toledo.",
    url: `${BASE_URL}/es/puerta-nueva-vs-puerta-antigua-bisagra`,
    locale: "es",
    type: "article",
  },
};

const comparisonRows = [
  ["Nombre habitual", "Puerta Nueva de Bisagra", "Puerta Antigua de Bisagra / Puerta de Alfonso VI"],
  ["Época principal", "Reconstrucción renacentista del siglo XVI", "Origen medieval con fuerte herencia islámica"],
  ["Imagen más conocida", "Fachada monumental con torreones y escudo de Carlos V", "Acceso histórico más sobrio y antiguo"],
  ["Función en la visita", "Entrada monumental al casco histórico", "Punto de interés histórico complementario"],
  ["Qué destaca", "Escala, simbolismo imperial y relación con las murallas", "Antigüedad, carácter medieval y valor histórico"],
];

export default function PuertaNuevaVsAntiguaPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <span>←</span>
          <span>Volver a la guía principal</span>
        </Link>

        <article className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Puerta Nueva y Puerta Antigua de Bisagra
          </h1>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-8 mb-8">
            <p>
              En Toledo es muy frecuente que los viajeros mezclen la Puerta Nueva de Bisagra con
              la Puerta Antigua de Bisagra. Aunque sus nombres son parecidos y ambas forman parte
              de la historia defensiva de la ciudad, no son el mismo monumento ni responden al
              mismo momento histórico.
            </p>
            <p>
              Cuando alguien busca <strong>puerta antigua de bisagra toledo</strong>,
              <strong> puerta vieja de bisagra</strong> o <strong>puerta de Alfonso VI</strong>,
              normalmente está buscando el acceso medieval más antiguo. En cambio, la imagen
              monumental con grandes torreones y escudo imperial corresponde a la
              <strong> Puerta Nueva de Bisagra</strong>, que es la puerta principal que hoy
              identifica a la ciudad en muchas fotografías.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 dark:bg-[#1a1a1a]">
                <tr>
                  <th className="p-4 text-gray-900 dark:text-white">Aspecto</th>
                  <th className="p-4 text-gray-900 dark:text-white">Puerta Nueva</th>
                  <th className="p-4 text-gray-900 dark:text-white">Puerta Antigua</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, nueva, antigua]) => (
                  <tr key={label} className="border-t border-gray-200 dark:border-gray-800">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">{label}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{nueva}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{antigua}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Cuál visitar primero
            </h2>
            <p>
              Si es tu primera vez en Toledo, lo normal es empezar por la Puerta Nueva de Bisagra
              porque está mejor integrada en la llegada turística al casco histórico y es una de
              las imágenes más espectaculares de la ciudad.
            </p>
            <p>
              La Puerta Antigua de Bisagra, también relacionada con la Puerta de Alfonso VI,
              encaja mejor dentro de una ruta histórica por puertas y murallas. No sustituye a la
              Puerta Nueva; más bien la complementa para entender la evolución urbana de Toledo.
            </p>
          </div>
        </article>

        <section className="grid md:grid-cols-2 gap-6 mt-8">
          <Link
            href="/es/historia-puerta-de-bisagra"
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] p-6 hover:border-blue-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Historia de la Puerta de Bisagra
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Origen andalusí, reforma renacentista y contexto histórico del monumento.
            </p>
          </Link>
          <Link
            href="/es/como-llegar-puerta-de-bisagra"
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] p-6 hover:border-blue-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Cómo llegar a la Puerta de Bisagra
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Indicaciones prácticas para organizar la visita desde estaciones y accesos cercanos.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
