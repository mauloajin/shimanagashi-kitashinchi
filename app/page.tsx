const business = {
  name: "深夜食堂 しまながし 北新地 グルメ居酒屋",
  englishName: "Shinya Shokudo Shimanagashi Kitashinchi Gourmet Izakaya",
  romanName: "Shinya Shokudo Shimanagashi Kitashinchi Gourmet Izakaya",
  area: "大阪市北区堂島・北新地",
  category: "和食店・グルメ居酒屋",
  address: "〒530-0003 大阪府大阪市北区堂島1丁目5-35 堂島レジャービル 4F",
  phone: "090-6324-5657",
  officialSite: "https://s.tabelog.com/osaka/A2701/A270101/27121170/",
  instagram: "https://www.instagram.com/shimanagashi2025/",
  mapUrl: "https://maps.app.goo.gl/1nHnNBv1FCFHwTHv5",
  priceRange: "￥4,000～8,000",
  rating: "4.4",
  reviewCount: "132",
  latitude: 34.6963622,
  longitude: 135.4969245
};

const japaneseKeywords = [
  "深夜食堂 しまながし", "しまながし 北新地", "北新地 グルメ居酒屋", "北新地 和食店", "堂島 和食",
  "堂島 居酒屋", "北新地 深夜 食事", "北新地 深夜営業", "北新地 夕食", "北新地 ディナー",
  "北新地 飲み会後", "北新地 仕事終わり 食事", "大阪 北新地 和食", "大阪 堂島 居酒屋", "堂島レジャービル 4F",
  "北新地駅 徒歩5分", "西梅田駅 徒歩5分", "大阪市北区堂島 和食", "大阪市北区堂島 居酒屋", "北新地 一品料理",
  "旬の食材 一品料理", "和食 居酒屋料理", "大阪 深夜 和食", "梅田 深夜 食事", "北新地 しめごはん",
  "北新地 〆 食事", "北新地 夜ご飯", "堂島 夜ご飯", "北新地 予約 電話", "北新地 Instagram DM 予約",
  "深夜食堂 大阪", "深夜食堂 北新地", "大阪 グルメ居酒屋", "北新地 食べログ", "しまながし 食べログ",
  "しまながし Instagram", "北新地 地図", "堂島 地図", "大阪 堂島 アクセス", "北新地 アクセス",
  "イートイン 北新地", "宅配非対応", "北新地 和食 ディナー", "堂島 和食 ディナー", "大阪 和食 ディナー",
  "北新地 レアカツ 口コミ", "北新地 麻婆豆腐 口コミ", "北新地 焼きそば", "北新地 レバー", "和牛ユッケ 口コミ",
  "北新地 紹興酒 口コミ", "北新地 カウンター 口コミ", "堂島 4階 和食", "北新地 月曜定休", "18時営業開始",
  "26時まで営業", "25時30分以降 連絡", "ランチ 鰻流", "うなる ランチ", "12時 ランチ",
  "ランチ L.O.13:30", "北新地 昼営業", "北新地 夜営業", "大阪市北区 レストラン", "堂島 レストラン",
  "北新地 レストラン", "大阪 居酒屋料理", "大阪 和食 一品料理", "大阪 旬の食材", "北新地 電話番号",
  "しまながし 電話", "しまながし 住所", "しまながし 営業時間", "しまながし 定休日", "しまながし 予約",
  "北新地 堂島 グルメ", "堂島 グルメ居酒屋", "北新地 日本料理", "大阪 日本料理", "大阪市北区 日本料理",
  "北新地 食事", "堂島 食事", "梅田 食事", "西梅田 食事", "北新地 二次会後 食事",
  "北新地 遅い時間 ごはん", "大阪 遅い時間 ごはん", "堂島 遅い時間 ごはん", "北新地 ご飯", "堂島 ご飯",
  "大阪 夜 和食", "大阪 夜 居酒屋", "北新地 Googleマップ", "しまながし Googleマップ", "北新地 口コミ",
  "しまながし 口コミ", "北新地 評価 4.4", "大阪 堂島 公式サイト", "北新地 公式サイト", "堂島 予約"
];

const englishKeywords = [
  "Shinya Shokudo Shimanagashi", "Shimanagashi Kitashinchi", "Kitashinchi izakaya", "Kitashinchi Japanese restaurant",
  "Dojima Japanese restaurant", "Dojima izakaya", "Osaka late night restaurant", "Kitashinchi late night dining",
  "Japanese food in Kitashinchi", "Izakaya in Osaka", "Dojima dinner", "Kitashinchi dinner", "restaurant near Kitashinchi Station",
  "restaurant near Nishi-Umeda Station", "Osaka Japanese dinner", "Kitashinchi food after drinks", "late dinner in Osaka",
  "Japanese small dishes Osaka", "seasonal Japanese dishes Osaka", "Osaka izakaya food", "Kitashinchi restaurant reservation",
  "phone reservation Kitashinchi", "Instagram DM reservation Osaka", "Dojima Leisure Building restaurant", "Osaka Kita Ward restaurant",
  "Dojima restaurant 4th floor", "Google Maps Kitashinchi restaurant", "Tabelog Kitashinchi", "Shimanagashi Tabelog",
  "Shimanagashi Instagram", "Kitashinchi map", "Dojima map", "Osaka restaurant access", "Kitashinchi access",
  "dine-in Kitashinchi", "Japanese izakaya dishes", "Osaka dinner after work", "Kitashinchi dinner after work",
  "late night Japanese food Osaka", "Osaka dinner until late", "Kitashinchi restaurant open until late", "Osaka izakaya reservation",
  "Kitashinchi reviews", "Shimanagashi reviews", "Osaka restaurant reviews", "Kitashinchi rating 4.4", "Osaka food guide",
  "Kitashinchi food guide", "Dojima food guide", "Japanese restaurant in Osaka", "Osaka izakaya guide", "Umeda late night food",
  "Nishi-Umeda dinner", "Dojima late dinner", "Kitashinchi casual Japanese dinner", "Japanese restaurant in Dojima",
  "Osaka local restaurant", "Kitashinchi local restaurant", "Dojima local restaurant", "Osaka gourmet izakaya",
  "Kitashinchi gourmet izakaya", "Japanese dinner in Kita Ward", "Osaka Kita Ward izakaya", "late night meal Kitashinchi",
  "meal after drinking Osaka", "Japanese food near Umeda", "Osaka restaurant phone number", "Shimanagashi address",
  "Shimanagashi opening hours", "Shimanagashi closed Monday", "Kitashinchi Monday closed restaurant", "Osaka restaurant official site",
  "Kitashinchi official restaurant site", "Dojima reservation", "Osaka dining guide", "visitor guide Kitashinchi",
  "English guide Osaka restaurant"
];

const faqs = [
  {
    q: "予約はできますか？",
    a: "Googleビジネスプロフィールの投稿では、夜営業の予約は電話またはInstagramのDMで受け付けると案内されています。"
  },
  {
    q: "営業時間は何時までですか？",
    a: "投稿ではディナーは18:00〜26:00と案内されています。25:30以降に来店予定の場合は事前連絡が推奨されています。"
  },
  {
    q: "最寄り駅からのアクセスは？",
    a: "投稿では北新地駅から徒歩5分、西梅田駅から徒歩5分と案内されています。住所は堂島レジャービル4Fです。"
  },
  {
    q: "ランチ営業はありますか？",
    a: "投稿ではランチは12:00〜14:00、L.O.13:30で、ランチは「鰻流（うなる）」としての営業と案内されています。"
  }
];

const reviews = [
  "北新地で遅い時間まで営業",
  "海老とレバーはこれだけで何杯でも飲みたい程クセになる。",
  "和牛ユッケ 謎の醤油クリームがめちゃくちゃ美味しかった"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  alternateName: [business.englishName, business.romanName],
  description:
    "大阪市北区堂島の和食店・グルメ居酒屋。Googleビジネスプロフィール掲載情報をもとに、住所、電話番号、営業時間、公式サイト、予約方法を案内しています。",
  url: "https://shimanagashi-kitashinchi.vercel.app",
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    postalCode: "530-0003",
    addressRegion: "大阪府",
    addressLocality: "大阪市北区",
    streetAddress: "堂島1丁目5-35 堂島レジャービル 4F",
    addressCountry: "JP"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude
  },
  servesCuisine: ["和食", "居酒屋料理", "Japanese"],
  priceRange: business.priceRange,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "02:00"
    }
  ],
  sameAs: [business.officialSite, business.instagram, business.mapUrl]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#features">特徴</a>
          <a href="#info">店舗情報</a>
          <a href="#access">アクセス</a>
          <a href="#english">English Guide</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="heroGrid">
          <section className="heroText">
            <p className="eyebrow">{business.area} / {business.category}</p>
            <h1>{business.name}</h1>
            <p className="lead">
              北新地・堂島で、夜の食事や飲み会後の一品料理を探す人に向けた和食店・グルメ居酒屋です。
              Googleビジネスプロフィールの情報では、旬の食材を使った一品料理を中心に案内されています。
            </p>
            <div className="actions">
              <a className="primary" href={`tel:${business.phone.replaceAll("-", "")}`}>電話する</a>
              <a className="secondary" href={business.mapUrl}>地図を開く</a>
            </div>
          </section>
          <aside className="heroPanel" aria-label="基本情報の要約">
            <div>
              <span>評価</span>
              <strong>{business.rating}</strong>
              <small>Googleクチコミ {business.reviewCount}件</small>
            </div>
            <div>
              <span>価格帯</span>
              <strong>{business.priceRange}</strong>
              <small>Googleマップ表示</small>
            </div>
            <div>
              <span>予約</span>
              <strong>電話 / Instagram DM</strong>
              <small>夜営業の案内より</small>
            </div>
          </aside>
        </div>
      </header>

      <section id="features" className="section">
        <div className="sectionHeading">
          <p>Features</p>
          <h2>確認できた特徴</h2>
        </div>
        <div className="featureGrid">
          <article>
            <h3>北新地・堂島エリア</h3>
            <p>住所は大阪市北区堂島1丁目の堂島レジャービル4F。投稿では北新地駅・西梅田駅から徒歩5分と案内されています。</p>
          </article>
          <article>
            <h3>夜営業の和食店</h3>
            <p>Googleビジネスプロフィールでは和食店として掲載。ディナーは18:00〜26:00と投稿に記載されています。</p>
          </article>
          <article>
            <h3>一品料理中心の案内</h3>
            <p>オーナー投稿では、旬の食材を使った一品料理を中心に用意していると説明されています。</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="sectionHeading">
            <p>Profile</p>
            <h2>店舗紹介</h2>
          </div>
          <p>
            深夜食堂 しまながし 北新地 グルメ居酒屋は、大阪市北区堂島にある和食店です。
            夜営業の予約は電話またはInstagramのDMで受け付けると案内されており、25時30分以降の来店予定は事前連絡が推奨されています。
          </p>
          <p>
            北新地で深夜の食事、堂島での和食ディナー、飲み会後のしめごはん、仕事終わりの食事を探す人に向けて、
            住所・電話番号・営業時間・地図リンク・公式サイトをまとめています。
          </p>
        </div>
        <div className="quoteBox">
          <h2>口コミより</h2>
          <ul>
            {reviews.map((review) => (
              <li key={review}>“{review}”</li>
            ))}
          </ul>
          <p>上記はGoogleマップ上で確認できた短い口コミ抜粋です。</p>
        </div>
      </section>

      <section id="info" className="section infoSection">
        <div className="sectionHeading">
          <p>Information</p>
          <h2>店舗基本情報</h2>
        </div>
        <dl className="infoList">
          <div><dt>店舗名</dt><dd>{business.name}</dd></div>
          <div><dt>英語表記</dt><dd>{business.englishName}</dd></div>
          <div><dt>ローマ字表記</dt><dd>{business.romanName}</dd></div>
          <div><dt>業態</dt><dd>{business.category}</dd></div>
          <div><dt>住所</dt><dd>{business.address}</dd></div>
          <div><dt>電話番号</dt><dd><a href={`tel:${business.phone.replaceAll("-", "")}`}>{business.phone}</a></dd></div>
          <div><dt>営業時間</dt><dd>ディナー 18:00〜26:00。ランチ 12:00〜14:00（L.O.13:30、ランチは「鰻流」として営業との投稿あり）</dd></div>
          <div><dt>定休日</dt><dd>月曜日。不定休日はInstagramのストーリーで案内との投稿あり</dd></div>
          <div><dt>公式サイト</dt><dd><a href={business.officialSite}>食べログ掲載ページ</a></dd></div>
          <div><dt>Instagram</dt><dd><a href={business.instagram}>@shimanagashi2025</a></dd></div>
          <div><dt>予約方法</dt><dd>夜営業は電話またはInstagram DMで受付との投稿あり</dd></div>
        </dl>
      </section>

      <section id="access" className="section access">
        <div className="sectionHeading">
          <p>Access</p>
          <h2>アクセス</h2>
        </div>
        <p>
          Googleビジネスプロフィールの投稿では、北新地駅から徒歩5分、西梅田駅から徒歩5分と案内されています。
          Google Maps APIは使用せず、外部リンクで地図を確認できます。
        </p>
        <a className="mapLink" href={business.mapUrl}>Googleマップで開く</a>
      </section>

      <section id="english" className="section english">
        <div className="sectionHeading">
          <p>English Guide</p>
          <h2>{business.englishName}</h2>
        </div>
        <p>
          Shinya Shokudo Shimanagashi Kitashinchi Gourmet Izakaya is a Japanese restaurant and izakaya-style dining spot in
          Dojima, Kita-ku, Osaka, near Kitashinchi and Nishi-Umeda. According to the Google Business Profile post, the dinner
          hours are 18:00 to 26:00, and guests planning to visit after 1:30 a.m. are asked to contact the restaurant in advance.
        </p>
        <p>
          The address is 1-5-35 Dojima, Dojima Leisure Building 4F, Kita-ku, Osaka 530-0003. Dinner reservations are described
          as available by phone or Instagram DM. This page is useful for searches such as Kitashinchi izakaya, Dojima Japanese
          restaurant, Osaka late night dining, Japanese food near Kitashinchi Station, and restaurant near Nishi-Umeda Station.
        </p>
      </section>

      <section id="faq" className="section faq">
        <div className="sectionHeading">
          <p>FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section keywords">
        <div className="sectionHeading">
          <p>Search Terms</p>
          <h2>関連キーワード</h2>
        </div>
        <h3>日本語キーワード</h3>
        <p>{japaneseKeywords.join(" / ")}</p>
        <h3>English Keywords</h3>
        <p>{englishKeywords.join(" / ")}</p>
      </section>
    </main>
  );
}
