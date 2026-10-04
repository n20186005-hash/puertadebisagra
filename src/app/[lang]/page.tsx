import Image from "next/image";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { dictionaries } from "@/i18n/dictionaries";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import Reviews from "@/components/Reviews";
import { Metadata } from "next";

const GOOGLE_MAPS_SHORT_LINK = "https://maps.app.goo.gl/EcXi7kGiSp2Ehgub8";
const BASE_URL = "https://www.puertadebisagra.com";
const SPANISH_GUIDE_SECTIONS = [
  {
    id: "historia",
    title: "Historia de la Puerta de Bisagra",
    paragraphs: [
      "La historia de la Puerta de Bisagra empieza en época andalusí, cuando existía una puerta defensiva conocida como Bab al-Saqra. Su posición era estratégica: controlaba uno de los accesos más importantes a Toledo desde el norte y conectaba la ciudad amurallada con los caminos de entrada.",
      "Durante el siglo XVI, en tiempos de Carlos V, el acceso fue profundamente transformado y adoptó la imagen renacentista que hoy identifica a la ciudad. La intervención se asocia a Alonso de Covarrubias y convirtió la antigua puerta en una fachada monumental, pensada tanto para defender como para representar el poder imperial.",
      "Por eso, cuando alguien busca Puerta de Bisagra Toledo o Puerta Nueva de Bisagra, en realidad está buscando un monumento que resume varias etapas de la historia urbana de Toledo: la herencia islámica, la reforma cristiana y el papel simbólico de la ciudad dentro de la monarquía hispánica.",
    ],
  },
  {
    id: "arquitectura",
    title: "Arquitectura y elementos que no debes perderte",
    paragraphs: [
      "La fachada exterior destaca por sus dos grandes torreones circulares y por el enorme escudo imperial de Carlos V con el águila bicéfala. Esa composición es una de las imágenes más reconocibles del patrimonio monumental toledano.",
      "Al cruzar la puerta, el espacio interior se organiza en varios cuerpos con patio intermedio, arcos de paso y un trazado pensado para combinar función defensiva y solemnidad ceremonial. La diferencia entre la fachada exterior y la interior también ayuda a entender cómo evolucionó el acceso principal a la ciudad.",
      "Si te interesa la arquitectura militar o la historia de las murallas de Toledo, merece la pena observar la relación de la puerta con el lienzo de muralla, el grosor de los volúmenes y la forma en que el conjunto domina la entrada al casco histórico.",
    ],
  },
  {
    id: "visita",
    title: "Cómo visitar la Puerta de Bisagra",
    paragraphs: [
      "La visita es muy sencilla porque se trata de un monumento exterior y de paso libre. No hace falta entrada ni reserva, así que suele ser una parada natural al comenzar una ruta a pie por Toledo.",
      "Muchos viajeros dedican entre 10 y 20 minutos a contemplar la puerta, hacer fotos y continuar hacia el casco histórico. Si quieres fotografiar la fachada con menos gente, la mejor hora suele ser a primera hora de la mañana o al final de la tarde.",
      "La zona es cómoda para peatones y razonablemente accesible, aunque conviene recordar que Toledo tiene cuestas y pavimento histórico en buena parte del recorrido posterior hacia el centro.",
    ],
  },
  {
    id: "como-llegar",
    title: "Cómo llegar a la Puerta de Bisagra",
    paragraphs: [
      "Desde la estación de tren de Toledo, puedes llegar en taxi, autobús urbano o caminando si quieres enlazar la visita con una ruta panorámica hacia el centro. Desde la estación de autobuses, el trayecto es aún más directo y corto.",
      "Si vienes desde la Plaza de Zocodover, basta con bajar hacia Real del Arrabal para encontrar la puerta desde el interior del casco histórico. En coche, conviene revisar los aparcamientos cercanos antes de entrar en la zona monumental, ya que el tráfico dentro del centro histórico está limitado.",
      "Como punto práctico de orientación, la dirección es C. Real del Arrabal, 26, 45003 Toledo, Spain, y el enlace corto de Google Maps es una buena referencia para navegación y consulta de rutas en tiempo real.",
    ],
  },
];

const SPANISH_CLUSTER_LINKS = [
  {
    href: "/es/historia-puerta-de-bisagra",
    title: "Historia de la Puerta de Bisagra",
    description: "Contexto histórico ampliado sobre el origen andalusí, la reconstrucción renacentista y su papel en las murallas de Toledo.",
  },
  {
    href: "/es/como-llegar-puerta-de-bisagra",
    title: "Cómo llegar a la Puerta de Bisagra",
    description: "Rutas desde la estación de tren, la estación de autobuses, Zocodover y aparcamientos cercanos.",
  },
  {
    href: "/es/puerta-nueva-vs-puerta-antigua-bisagra",
    title: "Puerta Nueva vs Puerta Antigua de Bisagra",
    description: "Comparativa clara entre la Puerta Nueva de Bisagra y la Puerta Antigua o Puerta de Alfonso VI.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = lang || 'es';
  const dict = dictionaries[currentLang as keyof typeof dictionaries] || dictionaries.es;

  const languages = ['es', 'en', 'zh-Hant', 'fr'];
  const alternates: Record<string, string> = {
    'x-default': `${BASE_URL}/es`,
  };

  languages.forEach((l) => {
    alternates[l] = `${BASE_URL}/${l}`;
  });

  return {
    title: dict.seo?.title || dict.hero.title,
    description: dict.seo?.description || dict.intro.text.substring(0, 160),
    alternates: {
      canonical: `${BASE_URL}/${currentLang}`,
      languages: alternates,
    },
    openGraph: {
      title: dict.seo?.title || dict.hero.title,
      description: dict.seo?.description || dict.intro.text.substring(0, 160),
      url: `${BASE_URL}/${currentLang}`,
      locale: currentLang,
    }
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang as keyof typeof dictionaries] || dictionaries.es;
  const showSpanishCluster = lang === "es";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.seo?.title || dict.hero.title,
        description: dict.seo?.description || dict.intro.text,
        url: `${BASE_URL}/${lang}`,
        inLanguage: lang,
      },
      {
        "@type": "TouristAttraction",
        name: "Puerta de Bisagra",
        alternateName: "Puerta Nueva de Bisagra",
        description: "Historic monumental gate in Toledo and one of the main entrances to the old town.",
        url: `${BASE_URL}/${lang}`,
        image: `${BASE_URL}/gallery/images%20(1).jpg`,
        hasMap: GOOGLE_MAPS_SHORT_LINK,
        address: {
          "@type": "PostalAddress",
          streetAddress: "C. Real del Arrabal, 26",
          addressLocality: "Toledo",
          postalCode: "45003",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 39.8623177,
          longitude: -4.0256734,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-end items-center gap-4">
        <ThemeToggle />
        <LanguageToggle currentLang={lang} />
      </header>

      <section
        className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/gallery/images (1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 drop-shadow-md font-light">
            {dict.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-medium">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2">
              ⭐ {dict.hero.rating}
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2">
              🕒 {dict.hero.hours}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs opacity-90">
            {dict.hero.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 border border-white/30 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <section className="mb-24 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 mb-12 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center justify-center gap-2">
              🏛️ {dict.intro.officialManagementTitle}
            </h2>
            <p className="text-blue-800 dark:text-blue-200 text-base md:text-lg leading-relaxed font-medium">
              {dict.intro.officialManagement}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {dict.intro.text}
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 mb-12 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center justify-center gap-2">
              ℹ️ {dict.intro.visitorInfoTitle}
            </h2>
            <p className="text-green-800 dark:text-green-200 text-base md:text-lg leading-relaxed">
              {dict.intro.visitorInfo}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {dict.intro.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </section>

        {showSpanishCluster && (
          <>
            <section className="mb-24 space-y-10">
              {SPANISH_GUIDE_SECTIONS.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] p-8 shadow-sm"
                >
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </section>

            <section className="mb-24">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Más guías sobre la Puerta de Bisagra
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {SPANISH_CLUSTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#121212] p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{link.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{link.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="mb-24">
          <Gallery 
            title={dict.gallery.title}
            description={dict.gallery.description}
            linkText={dict.gallery.linkText}
            viewOriginal={dict.gallery.viewOriginal}
            prevPage={dict.gallery.prevPage}
            nextPage={dict.gallery.nextPage}
            prevImage={dict.gallery.prevImage}
            nextImage={dict.gallery.nextImage}
            close={dict.gallery.close}
            goToPageText={dict.gallery.goToPageText}
          />
        </section>

        <section className="mb-24">
          <Reviews 
            title={dict.reviews.title}
            declaration={dict.reviews.declaration}
            reviews={dict.reviews.items}
            moreText={dict.reviews.moreText}
            googleMapsLink={GOOGLE_MAPS_SHORT_LINK}
          />
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{dict.map.title}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-[450px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.532093951985!2d-4.028248423096909!3d39.86231772153421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0ba8e10b3327%3A0x758f5e27c9442996!2sPuerta%20de%20Bisagra!5e0!3m2!1sen!2sus!4v1774594960452!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={GOOGLE_MAPS_SHORT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium"
            >
              🗺️ {dict.map.openLink}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-[#111] py-16 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">
              {dict.footer.officialLinksTitle}
            </h3>
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {dict.footer.links?.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm mb-12">
            <Link href={`/${lang}/privacy-policy`} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              {dict.nav.privacy}
            </Link>
            <Link href={`/${lang}/terms-of-service`} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              {dict.nav.terms}
            </Link>
            <Link href={`/${lang}/cookie-settings`} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              {dict.nav.cookies}
            </Link>
          </nav>

          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p className="text-xs opacity-70">{dict.footer.dataRef}</p>
            <p className="pt-4">{dict.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
