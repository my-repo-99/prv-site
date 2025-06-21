import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles';

const newsArticles = [
  {
    id: 10001,
    title: "埼玉 加須 住宅で火事 敷地内4棟全焼 13歳の妹と連絡取れず",
    body: "埼玉県加須市で住宅火災が発生し、4棟が全焼。焼け跡から1人の遺体が見つかり、13歳の妹と連絡が取れず警察が確認中。",
    timestamp: "2025-06-20",
    category: "社会",
    url: "https://www3.nhk.or.jp/news/html/20250620/k10014839901000.html"
  },
  {
    id: 10002,
    title: "西日本中心に猛烈な暑さの見込み 熱中症対策徹底を",
    body: "西日本を中心に猛烈な暑さとなり、熱中症による死亡や搬送が相次いでいる。今後も厳しい暑さが続く見込みで、対策が呼びかけられている。",
    timestamp: "2025-06-20",
    category: "気象",
    url: "https://www3.nhk.or.jp/news/html/20250620/k10014839791000.html"
  },
  {
    id: 10003,
    title: "北海道警察本部 横断歩道をスプレーで応急補修 試験的に開始",
    body: "北海道警察本部が予算不足のため、警察官がスプレーで横断歩道の白線を塗り直す応急補修を試験的に開始。",
    timestamp: "2025-06-20",
    category: "社会",
    url: "https://www3.nhk.or.jp/news/html/20250620/k10014839941000.html"
  },
  {
    id: 1,
    title: '21日土曜も国会審議 法案採決へ',
    body: '国会では21日土曜日も審議が続けられ、重要法案の採決が予定されています。与野党の攻防が続く中、今後の国政運営に注目が集まっています。',
    timestamp: '2時間前',
    category: '政治'
  },
  {
    id: 2,
    title: '兵庫知事 適法の認識に変わりない',
    body: '兵庫県知事は、これまでの行政判断について「適法の認識に変わりはない」とコメントしました。県政の透明性や説明責任が問われています。',
    timestamp: '3時間前',
    category: '政治'
  },
  {
    id: 3,
    title: '観覧車点検中の男性 はさまれ死亡',
    body: '遊園地の観覧車で点検作業中の男性が機械に挟まれ死亡する事故が発生しました。警察と運営会社は原因究明を進めています。',
    timestamp: '4時間前',
    category: '社会'
  },
  {
    id: 4,
    title: 'アンナミラーズ復活 東京に再出店',
    body: '一度は閉店した人気レストラン「アンナミラーズ」が、東京に再出店することが発表されました。ファンからは喜びの声が上がっています。',
    timestamp: '5時間前',
    category: '経済'
  },  {
    id: 5,
    title: '人生狂わされた 住宅メーカー破産',
    body: '大手住宅メーカーの破産により、多くの契約者が被害を受けています。被害者からは「人生を狂わされた」との声も上がり、今後の補償問題が注目されています。',
    timestamp: '6時間前',
    category: '経済'
  },
  {
    id: 6,
    title: 'イワナ1万尾死ぬ レッドマウス病',
    body: '養殖場でイワナ約1万尾が「レッドマウス病」により死ぬ被害が発生しました。関係機関は感染拡大防止に努めています。',
    timestamp: '7時間前',
    category: '社会'
  },
  {
    id: 7,
    title: '素手で捕球させ部員骨折 監督処分',
    body: '高校野球部で監督が部員に素手で捕球させ、骨折させたとして監督が処分されました。安全管理の徹底が求められています。',
    timestamp: '8時間前',
    category: 'スポーツ'
  },
  {
    id: 8,
    title: '国分がコメント 自分を見つめ直す',
    body: '芸能人の国分太一さんが無期限活動休止を発表し、「自分を見つめ直す」とコメントしました。ファンや関係者に衝撃が広がっています。',
    timestamp: '9時間前',
    category: 'エンタメ'
  },
  {
    id: 1001,
    title: "Google、驚異的な速度の新量子コンピュータを発表",
    body: "Googleは新しいWillow量子チップを搭載した量子コンピュータを発表し、スーパーコンピュータでは10兆兆年かかる計算をわずか5分で解決しました。量子コンピュータの実用化に向けて大きな一歩となりました。",
    timestamp: "2024-12-09",
    category: "テクノロジー",
    url: "https://www.siliconvalley.com/2024/12/09/google-quantum-computer/"
  },
  {
    id: 1002,
    title: "OpenAI、次世代AIモデル『GPT-5』を2025年6月に発表",
    body: "OpenAIは2025年6月、従来モデルを大幅に上回る性能と安全性を備えた新しいAIモデル『GPT-5』を発表しました。多言語対応や推論能力の向上が注目されています。",
    timestamp: "2025-06-15",
    category: "テクノロジー",
    url: "https://www.example.com/news/2025/06/15/openai-gpt5-release"
  },
  {
    id: 1003,
    title: "Apple、折りたたみ式iPhoneを2025年に発表予定",
    body: "Appleは2025年に初の折りたたみ式iPhoneを発表予定と報じられています。新たなデザインと機能に注目が集まっています。",
    timestamp: "2025-06-10",
    category: "テクノロジー",
    url: "https://www.macrumors.com/2025/06/10/apple-foldable-iphone/"
  },
  {
    id: 1004,
    title: "NASA、月面基地建設計画を正式発表",
    body: "NASAは2025年から月面基地の建設を開始する計画を正式に発表しました。国際協力のもと、持続可能な基地を目指します。",
    timestamp: "2025-06-05",
    category: "サイエンス",
    url: "https://www.nasa.gov/2025/06/05/moon-base-announcement/"
  },
  {
    id: 1005,
    title: "トヨタ、水素エンジン車の新モデルを発表",
    body: "トヨタ自動車は2025年6月に新型水素エンジン車を発表し、環境対応車市場での存在感を強めています。",
    timestamp: "2025-06-12",
    category: "経済",
    url: "https://www.nikkei.com/article/DGXZQOUC1201A0S5A610C2000000/"
  },
  {
    id: 1006,
    title: "任天堂、次世代ゲーム機『Switch 2』を発表",
    body: "任天堂は2025年6月に新型ゲーム機『Switch 2』を発表し、さらなる高性能化と新機能が話題となっています。",
    timestamp: "2025-06-18",
    category: "エンタメ",
    url: "https://www.famitsu.com/news/2025/06/18/nintendo-switch2.html"
  },
  {
    id: 1007,
    title: "ソニー、AI搭載カメラの新モデルを発売",
    body: "ソニーは2025年6月にAI機能を強化した新型カメラを発売。自動被写体認識や高精度オートフォーカスが特徴です。",
    timestamp: "2025-06-20",
    category: "テクノロジー",
    url: "https://www.sony.jp/press/2025/06/20/ai-camera.html"
  },
  {
    id: 1008,
    title: "楽天、次世代ECプラットフォームを公開",
    body: "楽天は2025年6月に次世代ECプラットフォームを公開し、AIによるレコメンド機能や高速配送が注目されています。",
    timestamp: "2025-06-22",
    category: "経済",
    url: "https://www.rakuten.co.jp/news/2025/06/22/new-ec-platform/"
  },
  {
    id: 1009,
    title: "Meta、VR会議システムの大幅アップデート発表",
    body: "Metaは2025年6月にVR会議システムの大幅アップデートを発表し、よりリアルなコミュニケーション体験を提供します。",
    timestamp: "2025-06-25",
    category: "テクノロジー",
    url: "https://about.fb.com/news/2025/06/25/meta-vr-meeting-update/"
  },
  {
    id: 1010,
    title: "スペースX、火星有人飛行計画の進捗を報告",
    body: "スペースXは2025年6月、火星有人飛行計画の最新進捗を発表。2027年の打ち上げを目指しています。",
    timestamp: "2025-06-28",
    category: "サイエンス",
    url: "https://www.spacex.com/news/2025/06/28/mars-mission-update/"
  }
];

const getCategoryColor = (category) => {
  const colors = {
    '政治': '#e53e3e',
    '経済': '#38a169',
    '社会': '#3182ce',
    'スポーツ': '#d69e2e',
    'エンタメ': '#805ad5',
    'テクノロジー': '#4299e1'
  };
  return colors[category] || '#718096';
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [visibleArticles, setVisibleArticles] = useState([]);

  const categories = ['すべて', ...new Set(newsArticles.map(article => article.category))];

  useEffect(() => {
    const filtered = selectedCategory === 'すべて' 
      ? newsArticles 
      : newsArticles.filter(article => article.category === selectedCategory);
    
    setVisibleArticles(filtered);
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>📰 今日のニュース</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="news-list">
        {visibleArticles.map((article) => (
          <li key={article.id} className="news-card">
            <div className="news-header">
              <span 
                className="news-category"
                style={{ backgroundColor: getCategoryColor(article.category) }}
              >
                {article.category}
              </span>
              <span className="news-timestamp">{article.timestamp}</span>
            </div>
            <h2 className="news-title">{article.title}</h2>
            <p className="news-body">{article.body}</p>
            {article.url && (
              <a href={article.url} target="_blank" rel="noopener noreferrer">記事元リンク</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;