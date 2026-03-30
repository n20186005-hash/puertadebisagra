import Link from 'next/link';
import { Metadata } from 'next';

type Lang = 'en' | 'zh-Hant' | 'fr' | 'es';

const content: Record<Lang, Record<string, {
  title: string;
  lastUpdate: string;
  description?: string;
  sections?: { heading: string; text: string }[];
  categories?: { id: string; title: string; description: string; required: boolean }[];
  backHome: string;
  acceptAll?: string;
  rejectAll?: string;
}>> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdate: 'Last updated: March 2026',
      sections: [
        { heading: '1. Information Collection', text: 'We are committed to protecting your privacy. This website serves primarily as an information platform and does not generally actively collect personally identifiable information from users. However, through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records.' },
        { heading: '2. Use of Cookies', text: 'To provide a better user experience and understand how the site is used, we may use cookies. These cookies are used to remember user preferences and analyze site traffic. You can adjust cookie settings in your browser.' },
        { heading: '3. Third-Party Links', text: 'This site may contain links to third-party websites (such as Google Maps). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy statements of each site that collects personal information when you leave our site.' },
        { heading: '4. Contact Us', text: 'If you have any questions or concerns about this privacy policy, please contact us at: claritleonelmnicol@gmail.com' },
      ],
      backHome: 'Back to Home',
    },
    terms: {
      title: 'Terms of Service',
      lastUpdate: 'Last updated: March 2026',
      sections: [
        { heading: '1. Acceptance of Terms', text: 'By accessing and using this website, you agree to be bound by these terms of service. If you do not agree to any part of these conditions, please do not use this site.' },
        { heading: '2. Use of Content', text: 'The information provided on this website is for general informational purposes only. While we strive to maintain accurate and up-to-date information, we make no representation or warranty of any kind, express or implied, as to the completeness, accuracy, reliability, or adequacy of the information.' },
        { heading: '3. Intellectual Property', text: 'Unless otherwise indicated, all content on this site (including text, images, logos) is protected by copyright. No reproduction, distribution, or commercial use is authorized without explicit permission. Photo credits may include royalty-free resources from platforms such as Unsplash or contributors on Google Maps.' },
        { heading: '4. Limitation of Liability', text: 'To the fullest extent permitted by law, this site and its owners shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this site. When visiting natural sites, please always prioritize safety.' },
      ],
      backHome: 'Back to Home',
    },
    cookies: {
      title: 'Cookie Settings',
      lastUpdate: 'Last updated: March 2026',
      description: 'We use cookies to improve your browsing experience. You can choose to accept or reject certain types of cookies. Please note that disabling some cookies may affect the functionality of the website.',
      categories: [
        { id: 'necessary', title: 'Strictly Necessary Cookies', description: 'These cookies are always active. They are necessary for the website to function and cannot be disabled in our systems. They are usually set in response to actions you take that amount to a request for services, such as setting your privacy preferences or language.', required: true },
        { id: 'analytics', title: 'Analytics Cookies', description: 'These cookies allow us to count visits and traffic sources so that we can measure and improve the performance of our site. They help us know which pages are the most popular and how visitors move around the site.', required: false },
        { id: 'marketing', title: 'Marketing Cookies', description: 'These cookies may be set up within our website by our advertising partners. They can be used by these companies to build a profile of your interests and show you relevant advertisements on other websites.', required: false },
      ],
      backHome: 'Back to Home',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
    },
  },
  'zh-Hant': {
    privacy: {
      title: '隱私政策',
      lastUpdate: '最後更新：2026 年 3 月',
      sections: [
        { heading: '1. 資訊收集', text: '我們致力於保護您的隱私。本網站主要作為資訊平台，不會主動收集使用者的個人識別資訊。然而，透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，例如瀏覽器類型、存取時間和頁面瀏覽記錄。' },
        { heading: '2. Cookie 的使用', text: '為提供更好的使用者體驗並了解網站的使用情況，我們可能會使用 Cookie。這些 Cookie 用於記住使用者偏好並分析網站流量。您可以在瀏覽器中調整 Cookie 設定。' },
        { heading: '3. 第三方連結', text: '本網站可能包含指向第三方網站的連結（例如 Google Maps）。我們不對這些外部網站的隱私慣例負責。當您離開我們的網站時，建議您閱讀每個收集個人資訊的網站的隱私聲明。' },
        { heading: '4. 聯絡我們', text: '如果您對本隱私政策有任何問題或疑慮，請透過以下方式與我們聯繫：claritleonelmnicol@gmail.com' },
      ],
      backHome: '返回首頁',
    },
    terms: {
      title: '服務條款',
      lastUpdate: '最後更新：2026 年 3 月',
      sections: [
        { heading: '1. 條款接受', text: '存取和使用本網站，即表示您同意受這些服務條款的約束。如果您不同意這些條件的任何部分，請勿使用本網站。' },
        { heading: '2. 內容使用', text: '本網站提供的資訊僅供一般資訊目的使用。雖然我們努力維護準確和最新的資訊，但對資訊的完整性、準確性、可靠性或適用性不作任何明示或暗示的陳述或保證。' },
        { heading: '3. 智慧財產權', text: '除非另有說明，本網站上的所有內容（包括文字、圖片、標誌）均受版權保護。未經明確許可，不得進行任何複製、分發或商業使用。照片來源可能包括來自 Unsplash 或 Google Maps 貢獻者的免費資源。' },
        { heading: '4. 責任限制', text: '在法律允許的最大範圍內，本網站及其所有者不對因使用或無法使用本網站而造成的任何直接、間接、附帶或後果性損害負責。參觀自然景點時，請始終優先考慮安全。' },
      ],
      backHome: '返回首頁',
    },
    cookies: {
      title: 'Cookie 設定',
      lastUpdate: '最後更新：2026 年 3 月',
      description: '我們使用 Cookie 來改善您的瀏覽體驗。您可以選擇接受或拒絕某些類型的 Cookie。請注意，停用某些 Cookie 可能會影響網站的功能。',
      categories: [
        { id: 'necessary', title: '嚴格必要的 Cookie', description: '這些 Cookie 會始終保持啟用狀態。它們是網站運作所必需的，無法在我們的系統中停用。它們通常會因應您在網站上的操作而設定，例如設定您的隱私偏好或語言。', required: true },
        { id: 'analytics', title: '分析 Cookie', description: '這些 Cookie 使我們能夠計算造訪次數和流量來源，以便我們可以測量和改善網站的效果。它們幫助我們了解哪些頁面最受欢迎以及訪客如何在網站上流動。', required: false },
        { id: 'marketing', title: '行銷 Cookie', description: '這些 Cookie 可能會由我們的廣告合作夥伴在我們的網站上設定。它們可用於這些公司建立您的興趣個人資料，並在其他網站上向您展示相關廣告。', required: false },
      ],
      backHome: '返回首頁',
      acceptAll: '接受全部',
      rejectAll: '拒絕全部',
    },
  },
  fr: {
    privacy: {
      title: 'Politique de confidentialité',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      sections: [
        { heading: '1. Collecte d\'informations', text: 'Nous nous engageons à protéger votre vie privée. Ce site sert principalement de plateforme d\'information et ne collecte généralement pas activement d\'informations d\'identification personnelle des utilisateurs. Cependant, par le biais des journaux de serveur et des outils d\'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les temps d\'accès et les enregistrements de pages vues.' },
        { heading: '2. Utilisation des cookies', text: 'Pour offrir une meilleure expérience utilisateur et comprendre comment le site est utilisé, nous pouvons utiliser des cookies. Ces cookies sont utilisés pour se souvenir des préférences des utilisateurs et analyser le trafic du site. Vous pouvez ajuster les paramètres des cookies dans votre navigateur.' },
        { heading: '3. Liens tiers', text: 'Ce site peut contenir des liens vers des sites tiers (par exemple, Google Maps). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à lire les déclarations de confidentialité de chaque site qui collecte des informations personnelles lorsque vous quittez notre site.' },
        { heading: '4. Nous contacter', text: 'Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à : claritleonelmnicol@gmail.com' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    terms: {
      title: 'Conditions d\'utilisation',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      sections: [
        { heading: '1. Acceptation des conditions', text: 'En accédant et en utilisant ce site Web, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas une partie quelconque de ces conditions, veuillez ne pas utiliser ce site.' },
        { heading: '2. Utilisation du contenu', text: 'Les informations fournies sur ce site Web sont à des fins d\'information générale uniquement. Bien que nous nous efforcions de maintenir les informations exactes et à jour, nous ne faisons aucune représentation ou garantie d\'aucune sorte, expresse ou implicite, quant à l\'exhaustivité, l\'exactitude, la fiabilité ou l\'adéquation des informations.' },
        { heading: '3. Propriété intellectuelle', text: 'Sauf indication contraire, tout le contenu de ce site (y compris les textes, images, logos) est protégé par le droit d\'auteur. Aucune reproduction, distribution ou utilisation commerciale n\'est autorisée sans autorisation explicite. Les crédits photos peuvent inclure des ressources libres de droits provenant de plateformes telles qu\'Unsplash ou de contributeurs sur Google Maps.' },
        { heading: '4. Limitation de responsabilité', text: 'Dans toute la mesure permise par la loi, ce site et ses propriétaires ne seront pas responsables des dommages directs, indirects, accessoires ou consécutifs découlant de l\'utilisation ou de l\'incapacité d\'utiliser ce site. Lors de la visite de sites naturels, veuillez toujours donner la priorité à la sécurité.' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    cookies: {
      title: 'Paramètres des cookies',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez choisir d\'accepter ou de refuser certains types de cookies. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité du site Web.',
      categories: [
        { id: 'necessary', title: 'Cookies strictement nécessaires', description: 'Ces cookies sont toujours actifs. Ils sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu\'en réponse à des actions effectuées par vous qui équivalent à une demande de services, telles que la définition de vos préférences de confidentialité ou de votre langue.', required: true },
        { id: 'analytics', title: 'Cookies d\'analyse', description: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus populaires et comment les visiteurs se déplacent sur le site.', required: false },
        { id: 'marketing', title: 'Cookies marketing', description: 'Ces cookies peuvent être mis en place au sein de notre site Web par nos partenaires publicitaires. Ils peuvent être utilisés par ces sociétés pour établir un profil de vos intérêts et vous proposer des publicités pertinentes sur d\'autres sites Web.', required: false },
      ],
      backHome: 'Retour à l\'accueil',
      acceptAll: 'Accepter les cookies',
      rejectAll: 'Refuser',
    },
  },
  es: {
    privacy: {
      title: 'Política de privacidad',
      lastUpdate: 'Última actualización: Marzo 2026',
      sections: [
        { heading: '1. Recopilación de información', text: 'Nos comprometemos a proteger su privacidad. Este sitio sirve principalmente como plataforma de información y generalmente no recopila activamente información de identificación personal de los usuarios. Sin embargo, a través de registros de servidor y herramientas de análisis, podemos recopilar información no identificable personalmente, como el tipo de navegador, los tiempos de acceso y los registros de visitas a la página.' },
        { heading: '2. Uso de cookies', text: 'Para ofrecer una mejor experiencia de usuario y comprender cómo se utiliza el sitio, podemos utilizar cookies. Estas cookies se utilizan para recordar las preferencias del usuario y analizar el tráfico del sitio. Puede ajustar la configuración de las cookies en su navegador.' },
        { heading: '3. Enlaces de terceros', text: 'Este sitio puede contener enlaces a sitios web de terceros (por ejemplo, Google Maps). No somos responsables de las prácticas de privacidad de estos sitios externos. Le recomendamos que lea las declaraciones de privacidad de cada sitio que recopila información personal cuando abandona nuestro sitio.' },
        { heading: '4. Contáctenos', text: 'Si tiene alguna pregunta o inquietud sobre esta política de privacidad, contáctenos en: claritleonelmnicol@gmail.com' },
      ],
      backHome: 'Volver al inicio',
    },
    terms: {
      title: 'Términos de servicio',
      lastUpdate: 'Última actualización: Marzo 2026',
      sections: [
        { heading: '1. Aceptación de los términos', text: 'Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos de servicio. Si no acepta alguna parte de estas condiciones, no utilice este sitio.' },
        { heading: '2. Uso del contenido', text: 'La información proporcionada en este sitio web es solo para fines informativos generales. Aunque nos esforzamos por mantener la información precisa y actualizada, no hacemos ninguna representación o garantía de ningún tipo, expresa o implícita, sobre la integridad, precisión, confiabilidad o idoneidad de la información.' },
        { heading: '3. Propiedad intelectual', text: 'A menos que se indique lo contrario, todo el contenido de este sitio (incluidos textos, imágenes, logotipos) está protegido por derechos de autor. No se autoriza ninguna reproducción, distribución o uso comercial sin permiso explícito. Los créditos fotográficos pueden incluir recursos libres de regalías de plataformas como Unsplash o contribuyentes en Google Maps.' },
        { heading: '4. Limitación de responsabilidad', text: 'En la máxima medida permitida por la ley, este sitio y sus propietarios no serán responsables de los daños directos, indirectos, incidentales o consecuentes que surjan del uso o la imposibilidad de usar este sitio. Al visitar sitios naturales, siempre priorice la seguridad.' },
      ],
      backHome: 'Volver al inicio',
    },
    cookies: {
      title: 'Configuración de cookies',
      lastUpdate: 'Última actualización: Marzo 2026',
      description: 'Utilizamos cookies para mejorar su experiencia de navegación. Puede elegir aceptar o rechazar ciertos tipos de cookies. Tenga en cuenta que deshabilitar algunas cookies puede afectar la funcionalidad del sitio web.',
      categories: [
        { id: 'necessary', title: 'Cookies estrictamente necesarias', description: 'Estas cookies siempre están activas. Son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Generalmente solo se configuran en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad o idioma.', required: true },
        { id: 'analytics', title: 'Cookies de análisis', description: 'Estas cookies nos permiten contar las visitas y las fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más populares y cómo se mueven los visitantes por el sitio.', required: false },
        { id: 'marketing', title: 'Cookies de marketing', description: 'Nuestros socios publicitarios pueden configurar estas cookies en nuestro sitio web. Estas empresas pueden utilizarlas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios web.', required: false },
      ],
      backHome: 'Volver al inicio',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar todo',
    },
  },
};

const langNames: Record<Lang, string> = {
  en: 'English',
  'zh-Hant': '繁體中文',
  fr: 'Français',
  es: 'Español',
};

const BASE_URL = 'https://www.puertadebisagra.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; page: 'privacy-policy' | 'terms-of-service' | 'cookie-settings' }>;
}): Promise<Metadata> {
  const { lang, page } = await params;
  const currentLang = (lang as Lang) || 'es';
  const pageKey = page === 'privacy-policy' ? 'privacy' : page === 'terms-of-service' ? 'terms' : 'cookies';
  const data = content[currentLang]?.[pageKey] || content.es[pageKey];

  const currentPath = `/${currentLang}/${page}`;
  const otherLangs: Lang[] = ['en', 'zh-Hant', 'fr', 'es'];

  const alternates: Record<string, string> = {
    'x-default': `${BASE_URL}/es/${page}`,
  };

  otherLangs.forEach((l) => {
    alternates[l] = `${BASE_URL}/${l}/${page}`;
  });

  return {
    title: `${data.title} | Puerta de Bisagra`,
    alternates: {
      canonical: `${BASE_URL}${currentPath}`,
      languages: alternates,
    },
    openGraph: {
      title: `${data.title} | Puerta de Bisagra`,
      url: `${BASE_URL}${currentPath}`,
      locale: currentLang,
    }
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string; page: 'privacy-policy' | 'terms-of-service' | 'cookie-settings' }>;
}) {
  const { lang, page } = await params;
  const currentLang = (lang as Lang) || 'es';
  const pageKey = page === 'privacy-policy' ? 'privacy' : page === 'terms-of-service' ? 'terms' : 'cookies';
  const data = content[currentLang]?.[pageKey] || content.es[pageKey];

  const currentPath = `/${currentLang}/${page}`;
  const otherLangs: Lang[] = ['en', 'zh-Hant', 'fr', 'es'];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <span>←</span>
          <span>{data.backHome}</span>
        </Link>

        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{data.lastUpdate}</p>

        {'sections' in data && (
          <div className="space-y-6">
            {data.sections?.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        )}

        {'description' in data && (
          <>
            <p className="text-gray-600 mb-8">{data.description}</p>
            <div className="space-y-6">
              {data.categories?.map((category) => (
                <div key={category.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className={`relative w-14 h-7 rounded-full ${category.required ? 'bg-gray-400' : 'bg-blue-600'}`}>
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full ${category.required ? '' : 'translate-x-8'}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">{data.acceptAll}</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">{data.rejectAll}</button>
            </div>
          </>
        )}

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-medium mb-4">Available Languages</h3>
          <div className="flex gap-4 flex-wrap">
            {otherLangs.map((l) => (
              <Link key={l} href={`/${l}/${page}`} className={`text-blue-600 hover:underline ${l === currentLang ? 'font-bold' : ''}`}>
                {langNames[l]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
