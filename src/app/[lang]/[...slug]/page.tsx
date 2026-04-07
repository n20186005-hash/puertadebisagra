import Link from 'next/link';
import { Metadata } from 'next';

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
      title: 'Official Privacy Policy',
      lastUpdate: 'Last updated: March 2026',
      intro: 'This website is managed by the Toledo City Council and the Regional Government of Castilla-La Mancha. As a public service platform, we are committed to protecting your privacy in compliance with the GDPR and Spanish data protection regulations.',
      sections: [
        { heading: '1. Information Collection', text: 'This official website serves as a public information platform and does not actively collect personally identifiable information from users. Any data collected through server logs is used strictly for technical maintenance and improving public services.' },
        { heading: '2. Use of Cookies', text: 'We use necessary cookies to ensure the proper functioning of this public service platform. You can adjust your preferences in the Cookie Settings.' },
        { heading: '3. Third-Party Services (Google Maps)', text: 'To facilitate your visit, this site provides links to Google Maps. When you click these links or interact with embedded maps, Google may process your data in accordance with their own privacy policies. We provide these features solely as a public service for location guidance.' },
        { heading: '4. Contact', text: 'For inquiries regarding this official website or data protection, please contact the Toledo City Council tourist information office.' },
      ],
      backHome: 'Back to Home',
    },
    terms: {
      title: 'Official Terms of Service',
      lastUpdate: 'Last updated: March 2026',
      intro: 'This website is managed by the Toledo City Council and the Regional Government of Castilla-La Mancha.',
      sections: [
        { heading: '1. Acceptance of Terms', text: 'By accessing this official public service website, you agree to these terms, which govern the use of information provided by the municipal and regional governments.' },
        { heading: '2. Use of Content', text: 'The information provided on this website is for public service purposes. The Toledo City Council ensures the accuracy of historical and visitor information to the best of its ability.' },
        { heading: '3. Intellectual Property', text: 'All content on this site, unless otherwise indicated, is the property of the Toledo City Council and protected by copyright laws. Unauthorized commercial use of this public resource is prohibited.' },
        { heading: '4. External Links Disclaimer', text: 'This website contains links to external services (such as Google Maps) to assist visitors. The Toledo City Council is not responsible for the content, terms, or privacy practices of these external platforms.' },
      ],
      backHome: 'Back to Home',
    },
    cookies: {
      title: 'Official Cookie Settings',
      lastUpdate: 'Last updated: March 2026',
      intro: 'This website is managed by the Toledo City Council and the Regional Government of Castilla-La Mancha.',
      description: 'We use cookies to ensure the secure and efficient operation of this public service website. This includes necessary cookies and third-party cookies related to integrated services (such as Google Maps).',
      categories: [
        { id: 'necessary', title: 'Strictly Necessary Cookies', description: 'Essential for the basic functioning of this official website. They cannot be disabled in our systems.', required: true },
        { id: 'analytics', title: 'Analytics Cookies', description: 'Used anonymously to measure public interest and improve our civic services.', required: false },
        { id: 'third-party', title: 'Third-Party Services (Google)', description: 'Cookies set by external services like Google Maps when you interact with location features.', required: false },
      ],
      backHome: 'Back to Home',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
    },
  },
  'zh-Hant': {
    privacy: {
      title: '官方隱私政策 (Privacy Policy)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: '本網站由托萊多市政府和卡斯蒂利亞-拉曼查區域政府管理。作為公共服務平台，我們承諾遵守 GDPR 及西班牙資料保護法規，保護您的隱私。',
      sections: [
        { heading: '1. 資訊收集', text: '本官方網站作為公共資訊平台，不會主動收集使用者的個人識別資訊。透過伺服器日誌收集的任何資料僅用於技術維護和改善公共服務。' },
        { heading: '2. Cookie 的使用', text: '我們使用必要的 Cookie 來確保此公共服務平台的正常運作。您可以在 Cookie 設定中調整您的偏好。' },
        { heading: '3. 第三方服務（Google Maps）', text: '為方便您的參觀，本網站提供 Google Maps 連結。當您點擊這些連結或與嵌入式地圖互動時，Google 可能會根據其隱私政策處理您的資料。我們僅作為位置指引的公共服務提供這些功能。' },
        { heading: '4. 聯絡方式', text: '如對本官方網站或資料保護有任何疑問，請聯絡托萊多市政府旅遊資訊處。' },
      ],
      backHome: '返回首頁',
    },
    terms: {
      title: '官方服務條款 (Terms of Service)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: '本網站由托萊多市政府和卡斯蒂利亞-拉曼查區域政府管理。',
      sections: [
        { heading: '1. 條款接受', text: '存取本官方公共服務網站即表示您同意這些條款，這些條款規範了市政府和區域政府提供的資訊的使用。' },
        { heading: '2. 內容使用', text: '本網站提供的資訊旨在提供公共服務。托萊多市政府盡最大努力確保歷史和參觀資訊的準確性。' },
        { heading: '3. 智慧財產權', text: '除非另有說明，本網站上的所有內容均為托萊多市政府的財產，並受版權法保護。禁止未經授權將此公共資源用於商業用途。' },
        { heading: '4. 外部連結免責聲明', text: '本網站包含指向外部服務（如 Google Maps）的連結以協助遊客。托萊多市政府對這些外部平台的內容、條款或隱私慣例不承擔責任。' },
      ],
      backHome: '返回首頁',
    },
    cookies: {
      title: '官方 Cookie 設定 (Cookie Settings)',
      lastUpdate: '最後更新：2026 年 3 月',
      intro: '本網站由托萊多市政府和卡斯蒂利亞-拉曼查區域政府管理。',
      description: '我們使用 Cookie 來確保此公共服務網站的安全高效運作。這包括必要的 Cookie 以及與整合服務（如 Google Maps）相關的第三方 Cookie。',
      categories: [
        { id: 'necessary', title: '嚴格必要的 Cookie', description: '本官方網站基本運作所必需。無法在我們的系統中停用。', required: true },
        { id: 'analytics', title: '分析 Cookie', description: '以匿名方式使用，用於衡量公眾興趣並改善我們的市政服務。', required: false },
        { id: 'third-party', title: '第三方服務 (Google)', description: '當您與位置功能互動時，由 Google Maps 等外部服務設定的 Cookie。', required: false },
      ],
      backHome: '返回首頁',
      acceptAll: '接受全部',
      rejectAll: '拒絕全部',
    },
  },
  fr: {
    privacy: {
      title: 'Politique de Confidentialité Officielle',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      intro: 'Ce site web est géré par la Mairie de Tolède et le Gouvernement Régional de Castille-La Manche. En tant que plateforme de service public, nous nous engageons à protéger votre vie privée conformément au RGPD et aux réglementations espagnoles sur la protection des données.',
      sections: [
        { heading: '1. Collecte d\'informations', text: 'Ce site officiel sert de plateforme d\'information publique et ne collecte pas activement d\'informations d\'identification personnelle. Les données collectées via les journaux de serveur sont strictement utilisées pour la maintenance technique et l\'amélioration des services publics.' },
        { heading: '2. Utilisation des cookies', text: 'Nous utilisons les cookies nécessaires pour assurer le bon fonctionnement de cette plateforme de service public. Vous pouvez ajuster vos préférences dans les Paramètres des cookies.' },
        { heading: '3. Services Tiers (Google Maps)', text: 'Pour faciliter votre visite, ce site fournit des liens vers Google Maps. Lorsque vous cliquez sur ces liens ou interagissez avec des cartes intégrées, Google peut traiter vos données conformément à ses propres politiques de confidentialité. Nous fournissons ces fonctionnalités uniquement en tant que service public pour l\'orientation.' },
        { heading: '4. Contact', text: 'Pour toute question concernant ce site officiel ou la protection des données, veuillez contacter l\'office de tourisme de la Mairie de Tolède.' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    terms: {
      title: 'Conditions d\'Utilisation Officielles',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      intro: 'Ce site web est géré par la Mairie de Tolède et le Gouvernement Régional de Castille-La Manche.',
      sections: [
        { heading: '1. Acceptation des conditions', text: 'En accédant à ce site de service public, vous acceptez ces conditions qui régissent l\'utilisation des informations fournies par les gouvernements municipal et régional.' },
        { heading: '2. Utilisation du contenu', text: 'Les informations fournies sur ce site sont à des fins de service public. La Mairie de Tolède s\'efforce de garantir l\'exactitude des informations historiques et touristiques.' },
        { heading: '3. Propriété intellectuelle', text: 'Sauf indication contraire, tout le contenu de ce site est la propriété de la Mairie de Tolède et est protégé par les lois sur le droit d\'auteur. L\'utilisation commerciale non autorisée de cette ressource publique est interdite.' },
        { heading: '4. Clause de non-responsabilité des liens externes', text: 'Ce site contient des liens vers des services externes (tels que Google Maps) pour aider les visiteurs. La Mairie de Tolède n\'est pas responsable du contenu, des conditions ou des pratiques de confidentialité de ces plateformes externes.' },
      ],
      backHome: 'Retour à l\'accueil',
    },
    cookies: {
      title: 'Paramètres des Cookies Officiels',
      lastUpdate: 'Dernière mise à jour : Mars 2026',
      intro: 'Ce site web est géré par la Mairie de Tolède et le Gouvernement Régional de Castille-La Manche.',
      description: 'Nous utilisons des cookies pour assurer le fonctionnement sécurisé et efficace de ce site de service public. Cela inclut les cookies nécessaires et les cookies tiers liés aux services intégrés (tels que Google Maps).',
      categories: [
        { id: 'necessary', title: 'Cookies strictement nécessaires', description: 'Essentiels pour le fonctionnement de base de ce site officiel. Ne peuvent pas être désactivés dans nos systèmes.', required: true },
        { id: 'analytics', title: 'Cookies d\'analyse', description: 'Utilisés de manière anonyme pour mesurer l\'intérêt du public et améliorer nos services municipaux.', required: false },
        { id: 'third-party', title: 'Services Tiers (Google)', description: 'Cookies définis par des services externes comme Google Maps lorsque vous interagissez avec les fonctionnalités de localisation.', required: false },
      ],
      backHome: 'Retour à l\'accueil',
      acceptAll: 'Accepter tout',
      rejectAll: 'Refuser tout',
    },
  },
  es: {
    privacy: {
      title: 'Política de Privacidad Oficial',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'Este sitio web está gestionado por el Ayuntamiento de Toledo y la Junta de Comunidades de Castilla-La Mancha. Como plataforma de servicio público, nos comprometemos a proteger su privacidad de acuerdo con el RGPD y las normativas españolas de protección de datos.',
      sections: [
        { heading: '1. Recopilación de información', text: 'Este sitio web oficial sirve como plataforma de información pública y no recopila activamente información de identificación personal de los usuarios. Los datos recopilados a través de registros de servidor se utilizan estrictamente para mantenimiento técnico y mejora de los servicios públicos.' },
        { heading: '2. Uso de cookies', text: 'Utilizamos cookies necesarias para garantizar el funcionamiento adecuado de esta plataforma de servicio público. Puede ajustar sus preferencias en la Configuración de Cookies.' },
        { heading: '3. Servicios de Terceros (Google Maps)', text: 'Para facilitar su visita, este sitio proporciona enlaces a Google Maps. Al hacer clic en estos enlaces o interactuar con mapas integrados, Google puede procesar sus datos de acuerdo con sus propias políticas de privacidad. Proporcionamos estas funciones únicamente como un servicio público de orientación.' },
        { heading: '4. Contacto', text: 'Para consultas sobre este sitio web oficial o protección de datos, comuníquese con la oficina de información turística del Ayuntamiento de Toledo.' },
      ],
      backHome: 'Volver al inicio',
    },
    terms: {
      title: 'Términos de Servicio Oficiales',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'Este sitio web está gestionado por el Ayuntamiento de Toledo y la Junta de Comunidades de Castilla-La Mancha.',
      sections: [
        { heading: '1. Aceptación de los términos', text: 'Al acceder a este sitio web de servicio público oficial, usted acepta estos términos, que rigen el uso de la información proporcionada por los gobiernos municipal y regional.' },
        { heading: '2. Uso del contenido', text: 'La información proporcionada en este sitio web tiene fines de servicio público. El Ayuntamiento de Toledo garantiza la exactitud de la información histórica y turística en la medida de lo posible.' },
        { heading: '3. Propiedad intelectual', text: 'Todo el contenido de este sitio, a menos que se indique lo contrario, es propiedad del Ayuntamiento de Toledo y está protegido por las leyes de derechos de autor. Se prohíbe el uso comercial no autorizado de este recurso público.' },
        { heading: '4. Exención de responsabilidad de enlaces externos', text: 'Este sitio web contiene enlaces a servicios externos (como Google Maps) para ayudar a los visitantes. El Ayuntamiento de Toledo no se hace responsable del contenido, los términos o las prácticas de privacidad de estas plataformas externas.' },
      ],
      backHome: 'Volver al inicio',
    },
    cookies: {
      title: 'Configuración de Cookies Oficial',
      lastUpdate: 'Última actualización: Marzo 2026',
      intro: 'Este sitio web está gestionado por el Ayuntamiento de Toledo y la Junta de Comunidades de Castilla-La Mancha.',
      description: 'Utilizamos cookies para garantizar el funcionamiento seguro y eficiente de este sitio web de servicio público. Esto incluye cookies necesarias y cookies de terceros relacionadas con servicios integrados (como Google Maps).',
      categories: [
        { id: 'necessary', title: 'Cookies estrictamente necesarias', description: 'Esenciales para el funcionamiento básico de este sitio web oficial. No se pueden desactivar en nuestros sistemas.', required: true },
        { id: 'analytics', title: 'Cookies de análisis', description: 'Utilizadas de forma anónima para medir el interés público y mejorar nuestros servicios municipales.', required: false },
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
