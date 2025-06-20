import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const newsArticles = [
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
];

const getCategoryColor = (category) => {
  const colors = {
    '政治': '#e53e3e',
    '経済': '#38a169',
    '社会': '#3182ce',
    'スポーツ': '#d69e2e',
    'エンタメ': '#805ad5'
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;