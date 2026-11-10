import Link from "next/link";
import { Metadata } from "next";

const BASE_URL = "https://www.puertadebisagra.com";

export const metadata: Metadata = {
  title: "Cómo llegar a la Puerta de Bisagra en Toledo",
  description:
    "Guía práctica para llegar a la Puerta de Bisagra desde la estación de tren, la estación de autobuses, Zocodover y aparcamientos cercanos en Toledo.",
  alternates: {
    canonical: `${BASE_URL}/es/como-llegar-puerta-de-bisagra`,
  },
  openGraph: {
    title: "Cómo llegar a la Puerta de Bisagra en Toledo",
    description:
      "Direcciones útiles para visitar la Puerta de Bisagra a pie, en coche o desde las estaciones de Toledo.",
    url: `${BASE_URL}/es/como-llegar-puerta-de-bisagra`,
    locale: "es",
    type: "article",
  },
};

export default function ComoLlegarPuertaBisagraPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] py-12 px-4">
      <div className="max-w-4xl mx-auto"><nav aria-label="Migas de pan" className="text-sm mb-6"><Link href="/es">Puerta de Bisagra</Link> / Guía de visita</nav>
        <Link
          href="/es"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <span>←</span>
          <span>Volver a la guía principal</span>
        </Link>

        <article className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Cómo llegar a la Puerta de Bisagra
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-8">
            <p>
              La Puerta de Bisagra se encuentra en <strong>C. Real del Arrabal, 26, 45003 Toledo</strong>,
              uno de los accesos más claros al casco histórico. Para muchos visitantes es la
              puerta de entrada natural a una ruta a pie por la ciudad.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Desde la estación de tren de Toledo
              </h2>
              <p>
                Desde la estación de tren puedes llegar en taxi, en autobús urbano o caminando si
                quieres convertir el desplazamiento en parte de la visita. Compara las opciones según el equipaje, las pendientes y el itinerario que quieras recorrer. La FAQ municipal describe estas opciones para llegar al centro histórico; consulta la ruta concreta hasta Bisagra antes de salir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Desde la estación de autobuses
              </h2>
              <p>
                La FAQ municipal indica que desde la estación de autobuses se puede llegar al centro histórico a pie, en taxi o en autobús urbano. Para dirigirte específicamente a Bisagra, abre el trazado actualizado desde la estación y compara los cruces, pendientes y accesos.
              </p>
            </section>

            <p><a className="text-blue-600 underline" href="https://www.google.com/maps/dir/?api=1&origin=Estacion+de+Autobuses+de+Toledo&destination=Puerta+de+Bisagra+Toledo&travelmode=walking">Consultar ruta a pie desde la estación de autobuses hasta Bisagra ↗</a></p>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Desde Plaza de Zocodover
              </h2>
              <p>
                Si ya estás dentro del casco histórico, puedes caminar desde Zocodover hacia la
                zona de Real del Arrabal y salir por la puerta. Este recorrido funciona muy bien
                para entender la relación entre la puerta, las murallas y el trazado de la ciudad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                En coche y aparcamiento cercano
              </h2>
              <p>
                Si llegas en coche, conviene revisar con antelación los aparcamientos próximos al
                casco histórico y evitar depender de la circulación interior, que puede estar
                limitada. Lo más práctico suele ser aparcar fuera de la zona monumental y entrar a
                pie por la Puerta de Bisagra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Enlace de navegación
              </h2>
              <p>
                Para navegación en tiempo real, la referencia más útil es Google Maps:
                <a
                  href="https://maps.app.goo.gl/EcXi7kGiSp2Ehgub8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  abrir ubicación de Puerta de Bisagra
                </a>
                .
              </p>
            </section>
          </div>
        <section className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6"><h2 className="text-xl font-bold mb-3">Fuentes y continuación de la visita</h2><p className="text-sm mb-4">Redacción: Guía Puerta de Bisagra · Revisión: 10 de noviembre de 2026.</p><p className="mb-4"><a className="text-blue-600 underline" href="https://turismo.toledo.es/prepara-tu-viaje/preguntas-frecuentes.html">Turismo Toledo: preguntas frecuentes sobre llegada y movilidad</a> · Consultado el 10 de noviembre de 2026. La información municipal se refiere al centro histórico; las rutas hasta Bisagra se consultan por separado.</p><p><a className="text-blue-600 underline" href="https://turismo.toledo.es/recursos/museos-y-monumentos/id1509-puerta-de-bisagra.html">Turismo Toledo: Puerta de Bisagra</a> · <a className="text-blue-600 underline" href="https://www.spain.info/en/places-of-interest/puerta-nueva-bisagra/">Spain.info</a></p><nav className="flex flex-wrap gap-4 mt-5" aria-label="Visitas del entorno"><Link href="/es/santiago-del-arrabal" className="text-blue-600 underline">Santiago del Arrabal</Link><Link href="/es/mezquita-cristo-de-la-luz" className="text-blue-600 underline">Cristo de la Luz</Link><Link href="/es/puerta-del-sol-toledo" className="text-blue-600 underline">Puerta del Sol</Link><Link href="/es/hospital-de-tavera" className="text-blue-600 underline">Hospital de Tavera</Link></nav></section>
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
              Contexto histórico sobre su origen andalusí y la reconstrucción renacentista.
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
              Qué cambia entre ambas puertas y cuál estás viendo en cada caso.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
