import Image from "next/image";
import Gallery from "@/components/Gallery";
import Link from "next/link";

const content = {
  en: {
    hero: {
      title: "Puerta de Bisagra",
      subtitle: "Porta Magna",
      description: "The Most Magnificent Gate of Toledo's Ancient City",
    },
    about: {
      heading: "About the Gate",
      intro: "Puerta de Bisagra (also known as Puerta de Bisagra Nueva) is one of the most magnificent and iconic gates of Toledo's ancient city in Spain. It is not only an iconic entrance to the old city, but also a vivid witness to Toledo's status as the 'City of Three Cultures' (the intertwined history of Christianity, Judaism, and Islam).",
      tags: ["Symbol of Three Cultures", "Imperial Entrance", "Medieval Walls"],
    },
    sections: [
      {
        num: "1",
        title: "Location & Overall Impression",
        color: "orange",
        content: [
          "Puerta de Bisagra is located on the north side of Toledo's ancient city, near Real del Arrabal Street. Travelers coming from Madrid, the train station, or bus station almost all enter the old city through here.",
          "It stands like a small castle in the medieval wall system, with a majestic and eye-catching appearance, making it a favorite photo spot for many tourists.",
          "Passing through the gate, you enter a small square called Plaza de Armas, surrounded by stone walls, where you can also see a statue of Charles V, further reinforcing its imperial atmosphere.",
        ],
      },
      {
        num: "2",
        title: "History: From Moorish Origins to Renaissance Rebuild",
        color: "blue",
        content: [
          "The origins of this gate can be traced back to the Moorish (Arab/Muslim) period. The original Arabic name was close to 'Bab al-Saqra' (gate leading to the Sagra region), and it may have existed as early as the 10th century.",
          "The existing 'New Gate' was largely rebuilt in Renaissance style by the famous architect Alonso de Covarrubias in 1559, and was further perfected during the reign of Philip II.",
          "This 'Moorish origin + Renaissance rebuild' fusion is the unique charm of Toledo's medieval walls: it witnessed the transition from Islamic rule to Christian reconquest to the peak of the Spanish Empire.",
        ],
      },
      {
        num: "3",
        title: "Architectural Features: Perfect Combination of Military Defense & Imperial Symbol",
        color: "emerald",
        content: [
          "Puerta de Bisagra is built from stone and brick, divided into outer and inner facades:",
        ],
        subsections: [
          {
            title: "Outer Facade (Facing Outside)",
            text: "Guarded by two huge circular towers, with a triumphal arch in the middle. At the top sits the prominent emblem of Charles V (Holy Roman Emperor, also known as Carlos I) — the double-headed eagle coat of arms. This emblem is the visual focus of the entire gate, symbolizing the vast territory and power of the Spanish Empire.",
          },
          {
            title: "Inner Facade (Facing Inside)",
            text: "Designed with a semicircular arch, flanked by square towers, creating a more solemn and elegant overall appearance. The entire gate combines medieval military defense style (thick towers, defensive functions) with Renaissance decorative elements.",
          },
        ],
        footer: "Nearby you can also visit the Santiago del Arrabal Church and other ancient sites.",
      },
      {
        num: "4",
        title: "Cultural Significance & Interesting Legends",
        color: "purple",
        content: [
          "As an important part of the medieval walls, Puerta de Bisagra is not only a defensive structure but also a symbol of Toledo's multicultural history. It embodies the fusion of Islamic architectural techniques with Christian imperial glory.",
        ],
        legend: {
          title: "🕯️ Legend of the Angel Guardian",
          text: "A local legend tells of the 'Angel Guardian': it is said that the Black Death (or plague) tried to enter the city through this gate but was stopped by the guardian angel on the gate, who only took a few people as God permitted. Although this story has folkloric embellishments, it adds a layer of mysterious and legendary charm to this ancient gate.",
        },
      },
    ],
    keywordsTitle: "SEO Keywords (Chinese-English)",
    practicalInfo: "Practical Information",
    address: "Address",
    ticket: "Admission",
    hours: "Suggested Visit",
  },
  zh: {
    hero: {
      title: "Puerta de Bisagra",
      subtitle: "新比萨格拉门",
      description: "西班牙托莱多古城最宏伟的城门",
    },
    about: {
      heading: "關於城門",
      intro: "Puerta de Bisagra（比萨格拉门，也称新比萨格拉门）是西班牙托莱多古城最宏伟、最具代表性的城门之一。它不仅是进入老城区的标志性入口，更是托莱多作为'三文化之城'（基督教、犹太教、伊斯兰教交融历史）的生动见证。",
      tags: ["三文化之城象征", "帝国入口", "中世纪城墙"],
    },
    sections: [
      {
        num: "1",
        title: "位置与整体印象",
        color: "orange",
        content: [
          "比萨格拉门位于托莱多古城北侧，靠近 Real del Arrabal 街。从马德里方向来的游客、火车站或长途汽车站出发，几乎都会从这里进入古城。",
          "它像一座小型城堡，矗立在中世纪城墙体系中，外观雄伟醒目，成为许多游客拍照打卡的首选。",
          "穿过城门，便进入一个名为 Plaza de Armas 的小广场，周围石墙环绕，还能看到查理五世的雕像，进一步强化了它的帝国气息。",
        ],
      },
      {
        num: "2",
        title: "历史沿革：从摩尔人起源到文艺复兴重建",
        color: "blue",
        content: [
          "这座门的起源可以追溯到摩尔人（阿拉伯/穆斯林）统治时期，阿拉伯语原名接近'Bab al-Saqra'（通往 Sagra 地区的门），可能早在 10 世纪就已存在。",
          "现存的'新门'则是 1559 年由著名建筑师 Alonso de Covarrubias 在文艺复兴风格下大规模重建的，并在费利佩二世时期继续完善。",
          "这种'摩尔人起源 + 文艺复兴重建'的融合，正是托莱多中世纪城墙的独特魅力：它见证了从伊斯兰统治到基督教收复、再到西班牙帝国巅峰的变迁。",
        ],
      },
      {
        num: "3",
        title: "建筑特色：军事防御与帝国象征的完美结合",
        color: "emerald",
        content: [
          "比萨格拉门采用石材和砖块建造，分为外侧和内侧两个立面：",
        ],
        subsections: [
          {
            title: "外侧（面向城外）",
            text: "由两个巨大的圆形塔楼守护，中间是凯旋式的垫石拱门，顶部醒目地雕刻着查理五世（Charles V，神圣罗马帝国皇帝）的巨大徽章——双头鹰纹章。这枚徽章是整座门的视觉焦点，象征西班牙帝国的广阔疆域和权力。",
          },
          {
            title: "内侧（面向城内）",
            text: "采用半圆拱设计，两侧是方形塔楼，整体更显庄重典雅。整座门融合了中世纪军事防御风格和文艺复兴时期的装饰元素，成为托莱多城墙中最具视觉冲击力的入口。",
          },
        ],
        footer: "附近还有 Santiago del Arrabal 教堂等古迹，顺路参观非常方便。",
      },
      {
        num: "4",
        title: "文化意义与有趣传说",
        color: "purple",
        content: [
          "作为中世纪城墙的重要组成部分，比萨格拉门不仅是防御工事，更是托莱多多元历史的象征。它体现了伊斯兰建筑技艺与基督教帝国荣耀的交汇，反映了托莱多'三文化共存'的包容传统。",
        ],
        legend: {
          title: "🕯️ 天使守护传说",
          text: "当地流传着一个关于'天使守护'的传说：据说黑死病（或瘟疫）曾试图通过此门进入城市，却被门上的守护天使阻挡，只在上帝允许下带走了少数人。这个故事为这座古门增添了一层神秘与传奇的魅力。",
        },
      },
    ],
    keywordsTitle: "适合科普写作的关键词（中英对照）",
    practicalInfo: "实用信息",
    address: "地址",
    ticket: "门票",
    hours: "建议游览",
  },
};

const colorMap: Record<string, string> = {
  orange: "from-orange-50 to-amber-50",
  blue: "from-blue-50 to-indigo-50",
  emerald: "from-emerald-50 to-teal-50",
  purple: "from-purple-50 to-fuchsia-50",
};

const bgMap: Record<string, string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
};

const keywords = [
  { zh: "比萨格拉门", en: "Puerta de Bisagra Nueva" },
  { zh: "托莱多城门", en: "Toledo City Gate" },
  { zh: "摩尔人起源", en: "Moorish Origin" },
  { zh: "查理五世徽章", en: "Coat of Arms of Charles V" },
  { zh: "文艺复兴重建", en: "Renaissance Rebuild" },
  { zh: "中世纪城墙", en: "Medieval Walls of Toledo" },
];

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const text = content[lang as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/gallery/images (1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {text.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white/90">{text.hero.subtitle}</p>
          <p className="text-lg text-white/70">{text.hero.description}</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="text-white text-3xl">↓</span>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{text.about.heading}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {text.about.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            {text.about.tags.map((tag, index) => (
              <span key={index} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {text.sections.map((section) => (
          <section key={section.num} className="mb-16">
            <div className={`bg-gradient-to-r ${colorMap[section.color]} rounded-2xl p-8 md:p-12`}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className={`w-8 h-8 ${bgMap[section.color]} text-white rounded-full flex items-center justify-center text-sm`}>
                  {section.num}
                </span>
                {section.title}
              </h3>
              {section.content.map((para, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              {section.subsections && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {section.subsections.map((sub, index) => (
                    <div key={index} className="bg-white/60 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-2">{sub.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{sub.text}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.footer && (
                <p className="text-gray-600 leading-relaxed">{section.footer}</p>
              )}
              {section.legend && (
                <div className="bg-white/60 rounded-xl p-6 border-l-4 border-purple-400 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{section.legend.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic">{section.legend.text}</p>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="mb-16 text-center">
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{text.keywordsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {keywords.map((keyword, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full text-sm shadow-sm">
                  <strong className="text-orange-600">{keyword.zh}</strong> / {keyword.en}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Photo Gallery</h2>
          <Gallery />
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{text.practicalInfo}</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">📍 {text.address}</h4>
              <p className="text-gray-600 text-sm">Plaza de Armas, 45002 Toledo, Spain</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">💰 {text.ticket}</h4>
              <p className="text-gray-600 text-sm">Free admission (open-air attraction)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">🕐 {text.hours}</h4>
              <p className="text-gray-600 text-sm">30 minutes - 1 hour recommended</p>
            </div>
          </div>
        </section>

        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href={`/${lang}/privacy-policy`} className="text-blue-600 hover:underline">Privacy Policy</Link>
          <Link href={`/${lang}/terms-of-service`} className="text-blue-600 hover:underline">Terms of Service</Link>
          <Link href={`/${lang}/cookie-settings`} className="text-blue-600 hover:underline">Cookie Settings</Link>
        </nav>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Puerta de Bisagra</h2>
          <p className="text-gray-400 mb-6">Toledo, Spain · Imperial Entrance · Symbol of Three Cultures</p>
          <p className="text-gray-500 text-sm">© 2026 Puerta de Bisagra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
