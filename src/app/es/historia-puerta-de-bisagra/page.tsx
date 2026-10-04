import Link from "next/link";
import { Metadata } from "next";

const BASE_URL = "https://www.puertadebisagra.com";

export const metadata: Metadata = {
  title: "Historia de la Puerta de Bisagra en Toledo",
  description:
    "Conoce la historia de la Puerta de Bisagra de Toledo: origen andalusí, reconstrucción renacentista, Carlos V y su papel en las murallas de la ciudad.",
  alternates: {
    canonical: `${BASE_URL}/es/historia-puerta-de-bisagra`,
  },
  openGraph: {
    title: "Historia de la Puerta de Bisagra en Toledo",
    description:
      "Origen andalusí, reconstrucción renacentista y evolución de la puerta monumental más conocida de Toledo.",
    url: `${BASE_URL}/es/historia-puerta-de-bisagra`,
    locale: "es",
    type: "article",
  },
};

export default function HistoriaPuertaBisagraPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <span>←</span>
          <span>Volver a la guía principal</span>
        </Link>

        <article className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Historia de la Puerta de Bisagra
          </h1>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-8">
            <p>
              La Puerta de Bisagra de Toledo, conocida en su forma monumental actual como
              Puerta Nueva de Bisagra, tiene una historia larga y compleja. Antes de la gran
              reforma renacentista ya existía un acceso defensivo de época andalusí, asociado
              a la antigua Bab al-Saqra, que controlaba uno de los puntos clave de entrada a la
              ciudad.
            </p>
            <p>
              Toledo fue una plaza estratégica durante siglos y sus puertas no eran solo pasos
              funcionales: también formaban parte del sistema de murallas, defensa y control
              fiscal. Por eso la puerta fue transformándose con el tiempo, adaptándose a nuevas
              necesidades militares y a nuevas formas de representación del poder.
            </p>
            <p>
              En el siglo XVI, bajo el reinado de Carlos V, la puerta fue profundamente
              reconstruida y adquirió la imagen que hoy la hace tan reconocible. La intervención
              suele vincularse a Alonso de Covarrubias, uno de los nombres esenciales del
              Renacimiento toledano. El resultado fue una entrada solemne, monumental y cargada
              de simbología imperial.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-4">
              Del origen musulmán a la imagen imperial
            </h2>
            <p>
              El acceso primitivo respondía a la lógica de una ciudad fortificada medieval. Con
              el paso del tiempo, y especialmente tras la consolidación del poder cristiano, la
              puerta dejó de ser solo una infraestructura defensiva para convertirse también en
              una carta de presentación de Toledo.
            </p>
            <p>
              La fachada exterior con el gran escudo de Carlos V y el águila bicéfala resume ese
              cambio. La puerta ya no solo defendía la ciudad: también proclamaba visualmente la
              autoridad de la monarquía y el peso político de Toledo dentro de la monarquía
              hispánica.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-4">
              Relación con las murallas de Toledo
            </h2>
            <p>
              La Puerta Nueva de Bisagra forma parte inseparable del sistema de murallas
              toledanas. Su escala, su posición y la presencia de torreones circulares la
              convierten en uno de los ejemplos más claros de cómo la arquitectura defensiva fue
              adaptada para asumir también una función simbólica y urbana.
            </p>
            <p>
              Para muchos viajeros, esta puerta marca el comienzo real de la visita al casco
              histórico. Para la historia de la ciudad, representa algo más: la continuidad entre
              la Toledo islámica, la ciudad castellana y la monumentalidad renacentista que hoy
              sigue definiendo su imagen.
            </p>
          </div>
        </article>

        <section className="grid md:grid-cols-2 gap-6 mt-8">
          <Link
            href="/es/como-llegar-puerta-de-bisagra"
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] p-6 hover:border-blue-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Cómo llegar a la Puerta de Bisagra
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Rutas desde la estación de tren, la estación de autobuses y Zocodover.
            </p>
          </Link>
          <Link
            href="/es/puerta-nueva-vs-puerta-antigua-bisagra"
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] p-6 hover:border-blue-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Puerta Nueva vs Puerta Antigua
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Diferencias entre la Puerta Nueva de Bisagra y la Puerta de Alfonso VI.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
