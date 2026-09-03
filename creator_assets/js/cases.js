/**
 * 撮影・コラボ実績データ
 * 一部実績はご許可をいただいたクリエイター名・チャンネル名を掲載しています。
 */
const collaborationCases = [
  {
    caseNumber: '01', platform: 'YouTube',
    creatorName: 'さとちんTV様',
    youtubeId: '8ILkEpIhy-s',
    image: 'creator_assets/image/message-01.png',
    imageAlt: 'さとちんTV様のクレーンゲーム撮影動画',
    audienceLabel: 'CHANNEL SUBSCRIBERS', audienceValue: '510,000+',
    videoViews: '78,000+', measuredAt: '2026年9月集計時点',
    title: '新店舗オープン前の先行撮影', store: 'アミューズメントパーク万代トリアス久山店',
    projectType: '新店舗先行撮影',
    description: 'オープン前の店舗を先行撮影。店内紹介やクレーンゲームへのチャレンジを通じて、新店舗の魅力を紹介していただきました。',
    tags: ['新店舗', '先行撮影', 'YouTube']
  },
  {
    caseNumber: '02', platform: 'YouTube',
    creatorName: 'もっかいちゃんねる様',
    youtubeId: 'anmv7lruFWo',
    image: 'creator_assets/image/hero.png',
    imageAlt: 'クレーンゲームチャレンジ企画の撮影動画',
    audienceLabel: 'CHANNEL SUBSCRIBERS', audienceValue: '510,000+',
    videoViews: '70,000+', measuredAt: '2026年9月集計時点',
    title: 'クレーンゲーム攻略解説動画撮影', store: 'アミューズメントパーク万代トリアス久山店',
    projectType: 'クレーンゲーム攻略解説',
    description: '万代のクレーンゲームを舞台に、攻略解説動画を撮影していただきました。',
    tags: ['クレーンゲーム', '攻略', '解説', 'YouTube']
  },
  {
    caseNumber: '03', platform: 'YouTube',
    creatorName: 'れのれらTV / RenoRera TV様',
    youtubeId: '974hD2LznH4',
    image: 'creator_assets/image/message-01.png',
    imageAlt: 'れのれらTV / RenoRera TV様のクレーンゲーム撮影動画',
    audienceLabel: 'CHANNEL SUBSCRIBERS', audienceValue: '319,000+',
    videoViews: '26,000+', measuredAt: '2026年9月集計時点',
    title: 'クレーンゲーム体験・店舗PR動画', store: '万代仙台南店',
    projectType: 'クレーンゲーム体験・タイアップ動画',
    description: '万代の店舗を舞台に、1時間クレーンゲーム取り放題企画を実施。ご家族でクレーンゲームを楽しむ様子を通して、万代ならではの遊びの魅力を発信していただきました。',
    tags: ['クレーンゲーム', '店舗PR', 'YouTube']
  }
];

const caseGrid = document.querySelector('#case-grid');
if (caseGrid) {
  caseGrid.innerHTML = collaborationCases.map(item => `
    <article class="case-card case-card-private reveal">
      <div class="case-top"><b>CASE ${item.caseNumber}</b><span>${item.platform}</span></div>
      <div class="case-stat case-audience"><small>${item.audienceLabel}</small><strong>${item.audienceValue}</strong></div>
      <figure class="case-image ${item.youtubeId ? 'has-embed' : ''}">
        ${item.youtubeId
      ? `<iframe src="https://www.youtube.com/embed/${item.youtubeId}" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      : `<img src="${item.image}" alt="${item.imageAlt}" loading="lazy"><figcaption>撮影イメージ</figcaption>`
    }
      </figure>
      <h3>${item.title}</h3>
      <div class="case-stat views"><small>VIDEO VIEWS</small><strong>${item.videoViews}</strong><em>動画再生数</em></div>
      <dl>
        <div><dt>クリエイター</dt><dd><strong>${item.creatorName}</strong></dd></div>
        <div><dt>撮影店舗</dt><dd>${item.store}</dd></div>
        <div><dt>企画タイプ</dt><dd>${item.projectType}</dd></div>
      </dl>
      <p class="case-description">${item.description}</p>
      <div class="case-tags">${item.tags.map(tag => `<span>#${tag}</span>`).join('')}</div>
      <small class="case-date">※${item.measuredAt}</small>
    </article>`).join('');
}
