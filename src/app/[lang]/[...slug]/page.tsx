import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Lang = 'en' | 'zh-Hant' | 'fr' | 'es';

const content: Record<Lang, Record<string, {
  title: string;
  lastUpdate: string;
  intro: string;
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
      intro: 'puertadebisagra.com is an independent travel guide about Puerta de Bisagra in Toledo. This page explains how we handle basic technical information and external services such as Google Maps.',
      sections: [
        { heading: '1. Information Collection', text: 'We do not actively request personal information from visitors through this website. Standard server logs may collect limited technical data needed for security, diagnostics and performance monitoring.' },
        { heading: '2. Use of Cookies', text: 'Necessary cookies may be used to keep the site working properly. You can review the cookie categories described on the Cookie Settings page.' },
        { heading: '3. Third-Party Services (Google Maps)', text: 'This site links to Google Maps and may embed mapping content to help visitors plan routes. Those services are governed by Google\'s own terms and privacy policies.' },
        { heading: '4. Contact', text: 'If you have questions about this independent guide, please use the public official tourism sources linked from the site for institutional enquiries about the monument itself.' },
      ],
      backHome: 'Back to Home',
    },
    terms: {
      title: 'Terms of Service',
      lastUpdate: 'Last updated: March 2026',
      intro: 'These terms apply to the use of puertadebisagra.com as an independent travel guide.',
      sections: [
        { heading: '1. Acceptance of Terms', text: 'By using this site, you agree to use the information as general travel guidance only.' },
        { heading: '2. Informational Use', text: 'We aim to keep historical and visitor information useful and up to date, but conditions can change. Please confirm critical details such as transport, access or public notices with official sources.' },
        { heading: '3. Intellectual Property', text: 'Unless otherwise noted, the original text and design of this website may not be reproduced for commercial purposes without permission.' },
        { heading: '4. External Links Disclaimer', text: 'Links to Google Maps, tourism portals and institutional websites are provided for convenience. We are not responsible for their content, terms or availability.' },
      ],
      backHome: 'Back to Home',
    },
    cookies: {
      title: 'Cookie Settings',
      lastUpdate: 'Last updated: March 2026',
      intro: 'This page describes the cookie categories used by this independent travel guide.',
      description: 'We use essential cookies to keep the site functioning and may rely on third-party services such as Google Maps for route planning and location features.',
      categories: [
        { id: 'necessary', title: 'Strictly Necessary Cookies', description: 'Required for the core functionality of the website.', required: true },
        { id: 'analytics', title: 'Analytics Cookies', description: 'May be used to understand site usage and improve the visitor experience.', required: false },
        { id: 'third-party', title: 'Third-Party Services (Google)', description: 'Cookies set by external services like Google Maps when you interact with location features.', required: false },
      ],
      backHome: 'Back to Home',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
    },
  },
  'zh-Hant': {
    privacy: {
      title: '隱私政策 (Privacy Policy)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: 'puertadebisagra.com 是介紹托萊多 Puerta de Bisagra 的獨立旅遊資訊網站。本頁說明網站如何處理基本技術資訊，以及與 Google Maps 等外部服務的關係。',
      sections: [
        { heading: '1. 資訊收集', text: '本網站不主動要求訪客提供個人身份資料。伺服器可能保留少量技術日誌，用於安全、診斷與效能維護。' },
        { heading: '2. Cookie 的使用', text: '網站可能使用必要 Cookie 以維持基本功能。Cookie 類別可在 Cookie 設定頁查看。' },
        { heading: '3. 第三方服務（Google Maps）', text: '為了協助規劃路線，本站會連向 Google Maps 或嵌入地圖內容。相關資料處理將受 Google 自身條款與隱私政策規範。' },
        { heading: '4. 聯絡方式', text: '若是與景點官方資訊、交通公告或機構業務有關的問題，請以本站列出的官方旅遊來源為準。' },
      ],
      backHome: '返回首頁',
    },
    terms: {
      title: '服務條款 (Terms of Service)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: '以下條款適用於作為獨立旅遊指南的 puertadebisagra.com。',
      sections: [
        { heading: '1. 條款接受', text: '使用本網站，即表示您理解本站內容僅作一般旅遊參考。' },
        { heading: '2. 內容使用', text: '我們會盡力維持資訊實用與更新，但交通、開放狀況與公共公告可能隨時變動，重要資訊請再向官方來源確認。' },
        { heading: '3. 智慧財產權', text: '除非另有說明，本站原創文字與設計不得未經授權作商業性重製。' },
        { heading: '4. 外部連結免責聲明', text: 'Google Maps、旅遊局或政府網站連結僅供延伸查閱，我們不對外部網站內容與可用性負責。' },
      ],
      backHome: '返回首頁',
    },
    cookies: {
      title: 'Cookie 設定 (Cookie Settings)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: '本頁說明這個獨立旅遊網站可能使用的 Cookie 類別。',
      description: '我們會使用必要 Cookie 維持網站正常運作，也可能透過 Google Maps 等第三方服務提供位置與路線功能。',
      categories: [
        { id: 'necessary', title: '嚴格必要的 Cookie', description: '維持網站基本功能所必需。', required: true },
        { id: 'analytics', title: '分析 Cookie', description: '可用於了解網站使用情況並改善旅客體驗。', required: false },
        { id: 'third-party', title: '第三方服務 (Google)', description: '當您與位置功能互動時，由 Google Maps 等外部服務設定的 Cookie。', required: false },
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
      intro: 'puertadebisagra.com est un guide de voyage indépendant consacré à la Puerta de Bisagra à Tolède. Cette page explique le traitement des informations techniques de base et l\'usage de services externes comme Google Maps.',
      sections: [
        { heading: '1. Collecte d\'informations', text: 'Le site ne demande pas activement de données personnelles. Des journaux techniques limités peuvent être conservés à des fins de sécurité, de diagnostic et de performance.' },
        { heading: '2. Utilisation des cookies', text: 'Des cookies nécessaires peuvent être utilisés pour assurer le bon fonctionnement du site. Les catégories sont décrites dans les paramètres des cookies.' },
        { heading: '3. Services tiers (Google Maps)', text: 'Le site peut renvoyer vers Google Maps ou intégrer des cartes pour aider à préparer la visite. Ces services relèvent des conditions et politiques de Google.' },
        { heading: '4. Contact', text: 'Pour les demandes institutionnelles concernant le monument, veuillez consulter les sources touristiques officielles liées depuis le site.' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    terms: {
      title: 'Conditions d\'utilisation',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      intro: 'Ces conditions s\'appliquent à l\'utilisation de puertadebisagra.com en tant que guide touristique indépendant.',
      sections: [
        { heading: '1. Acceptation des conditions', text: 'En utilisant ce site, vous acceptez d\'utiliser son contenu comme information générale de voyage.' },
        { heading: '2. Utilisation du contenu', text: 'Nous faisons de notre mieux pour maintenir des informations utiles et à jour, mais les horaires, accès et conditions de visite peuvent évoluer. Vérifiez les éléments essentiels auprès des sources officielles.' },
        { heading: '3. Propriété intellectuelle', text: 'Sauf mention contraire, les textes originaux et la conception du site ne peuvent pas être reproduits à des fins commerciales sans autorisation.' },
        { heading: '4. Clause sur les liens externes', text: 'Les liens vers Google Maps, les portails touristiques ou les sites institutionnels sont fournis à titre pratique. Nous ne contrôlons pas leur contenu ni leur disponibilité.' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    cookies: {
      title: 'Paramètres des cookies',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      intro: 'Cette page décrit les catégories de cookies pouvant être utilisées sur ce guide touristique indépendant.',
      description: 'Des cookies essentiels peuvent être utilisés pour le fonctionnement du site, ainsi que des services tiers comme Google Maps pour les fonctions de localisation.',
      categories: [
        { id: 'necessary', title: 'Cookies strictement nécessaires', description: 'Indispensables au fonctionnement de base du site.', required: true },
        { id: 'analytics', title: 'Cookies d\'analyse', description: 'Peuvent être utilisés pour comprendre l\'usage du site et améliorer l\'expérience des visiteurs.', required: false },
        { id: 'third-party', title: 'Services Tiers (Google)', description: 'Cookies définis par des services externes comme Google Maps lorsque vous interagissez avec les fonctionnalités de localisation.', required: false },
      ],
      backHome: 'Retour à l\'accueil',
      acceptAll: 'Accepter tout',
      rejectAll: 'Refuser tout',
    },
  },
  es: {
    privacy: {
      title: 'Política de Privacidad',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'puertadebisagra.com es una guía turística independiente sobre la Puerta de Bisagra en Toledo. Aquí explicamos cómo tratamos la información técnica básica del sitio y el uso de servicios externos como Google Maps.',
      sections: [
        { heading: '1. Recopilación de información', text: 'No solicitamos activamente datos personales a través de este sitio. El servidor puede registrar datos técnicos mínimos para seguridad, diagnóstico y rendimiento.' },
        { heading: '2. Uso de cookies', text: 'Podemos usar cookies necesarias para el funcionamiento básico del sitio. Las categorías descritas en la Configuración de Cookies ayudan a entender su finalidad.' },
        { heading: '3. Servicios de terceros (Google Maps)', text: 'Este sitio enlaza a Google Maps y puede mostrar mapas incrustados para facilitar rutas y orientación. El tratamiento de datos relacionado con esos servicios depende de Google y de sus propias políticas.' },
        { heading: '4. Contacto', text: 'Si necesitas información institucional sobre el monumento, horarios especiales o avisos públicos, consulta las fuentes oficiales enlazadas desde el sitio.' },
      ],
      backHome: 'Volver al inicio',
    },
    terms: {
      title: 'Términos de Servicio',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'Estos términos regulan el uso de puertadebisagra.com como guía independiente para visitantes.',
      sections: [
        { heading: '1. Aceptación de los términos', text: 'Al utilizar este sitio, aceptas usar su contenido como orientación general de viaje y visita.' },
        { heading: '2. Uso del contenido', text: 'Intentamos mantener la información útil y actualizada, pero los accesos, rutas, obras o condiciones de visita pueden cambiar. Verifica los datos críticos en las fuentes oficiales antes de desplazarte.' },
        { heading: '3. Propiedad intelectual', text: 'Salvo que se indique lo contrario, los textos originales y el diseño de este sitio no pueden reutilizarse con fines comerciales sin autorización.' },
        { heading: '4. Exención sobre enlaces externos', text: 'Los enlaces a Google Maps, portales turísticos y webs institucionales se ofrecen como ayuda para el visitante. No controlamos su contenido, disponibilidad ni políticas.' },
      ],
      backHome: 'Volver al inicio',
    },
    cookies: {
      title: 'Configuración de Cookies',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'Esta página describe las categorías de cookies que puede utilizar esta guía turística independiente.',
      description: 'Usamos cookies esenciales para el funcionamiento del sitio y podemos apoyarnos en servicios de terceros como Google Maps para funciones de ubicación y planificación de rutas.',
      categories: [
        { id: 'necessary', title: 'Cookies estrictamente necesarias', description: 'Imprescindibles para la funcionalidad básica del sitio.', required: true },
        { id: 'analytics', title: 'Cookies de análisis', description: 'Pueden usarse para entender el uso del sitio y mejorar la experiencia del visitante.', required: false },
        { id: 'third-party', title: 'Servicios de Terceros (Google)', description: 'Cookies configuradas por servicios externos como Google Maps al interactuar con las funciones de ubicación.', required: false },
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

const PAGE_MAP = {
  'privacy-policy': 'privacy',
  'terms-of-service': 'terms',
  'cookie-settings': 'cookies',
} as const;

function getPageKey(slug?: string[]) {
  if (!slug || slug.length !== 1) {
    return null;
  }

  return PAGE_MAP[slug[0] as keyof typeof PAGE_MAP] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = (lang as Lang) || 'es';
  const pageKey = getPageKey(slug);

  if (!pageKey) {
    return {};
  }

  const data = content[currentLang]?.[pageKey] || content.es[pageKey];
  const page = slug![0];

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
    robots: {
      index: false,
      follow: true,
    },
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
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { lang, slug } = await params;
  const currentLang = (lang as Lang) || 'es';
  const pageKey = getPageKey(slug);

  if (!pageKey) {
    notFound();
  }

  const data = content[currentLang]?.[pageKey] || content.es[pageKey];
  const page = slug![0];
  const otherLangs: Lang[] = ['en', 'zh-Hant', 'fr', 'es'];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <span>←</span>
          <span>{data.backHome}</span>
        </Link>

        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{data.lastUpdate}</p>
        
        {data.intro && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
            <p className="text-blue-800 font-medium text-sm leading-relaxed">{data.intro}</p>
          </div>
        )}

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
