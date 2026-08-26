/**
 * 匿名化した撮影・コラボ実績データ
 * クリエイター名、アカウント、動画URLはプライバシー保護のため
 * 保持・表示しません。登録者・フォロワー数と再生数のみ掲載します。
 */
const collaborationCases = [
  {
    caseNumber: '01', platform: 'YouTube',
    image: 'assets/images/message-01.png',
    imageAlt: '新店舗での先行撮影をイメージした撮影風景',
    audienceLabel: 'CHANNEL SUBSCRIBERS', audienceValue: 'XXX,XXX+',
    videoViews: 'XXX,XXX+', measuredAt: '集計時点（後日掲載）',
    title: '新店舗オープン前の先行撮影', store: '新店舗',
    projectType: '新店舗先行撮影',
    description: 'オープン前の店舗を先行撮影。店内紹介やクレーンゲームへのチャレンジを通じて、新店舗の魅力を紹介していただきました。',
    tags: ['新店舗', '先行撮影', 'YouTube']
  },
  {
    caseNumber: '02', platform: 'YouTube',
    image: 'assets/images/hero.png',
    imageAlt: 'クレーンゲームチャレンジ企画をイメージした撮影風景',
    audienceLabel: 'CHANNEL SUBSCRIBERS', audienceValue: 'XXX,XXX+',
    videoViews: 'XXX,XXX+', measuredAt: '集計時点（後日掲載）',
    title: 'クレーンゲームチャレンジ企画', store: '万代店舗',
    projectType: 'クレーンゲーム企画',
    description: '万代のクレーンゲームを舞台に、景品獲得チャレンジ企画を撮影していただきました。',
    tags: ['クレーンゲーム', 'チャレンジ', 'YouTube']
  },
  {
    caseNumber: '03', platform: 'TikTok / Instagram',
    image: 'assets/images/message-01.png',
    imageAlt: '店舗紹介とSNS企画をイメージした撮影風景',
    audienceLabel: 'FOLLOWERS', audienceValue: 'XXX,XXX+',
    videoViews: 'XXX,XXX+', measuredAt: '集計時点（後日掲載）',
    title: '店舗紹介・SNS企画', store: '万代店舗',
    projectType: '店舗紹介・ショート動画',
    description: '店内や景品、クレーンゲームなど、万代ならではの魅力をSNSコンテンツとして紹介していただきました。',
    tags: ['店舗紹介', 'SNS', 'ショート動画']
  }
];

const caseGrid = document.querySelector('#case-grid');
if (caseGrid) {
  caseGrid.innerHTML = collaborationCases.map(item => `
    <article class="case-card case-card-private reveal">
      <div class="case-top"><b>CASE ${item.caseNumber}</b><span>${item.platform}</span></div>
      <div class="case-privacy"><small>CREATOR INFORMATION</small><strong>PRIVATE</strong></div>
      <div class="case-stat case-audience"><small>${item.audienceLabel}</small><strong>${item.audienceValue}</strong></div>
      <figure class="case-image"><img src="${item.image}" alt="${item.imageAlt}" loading="lazy"><figcaption>撮影イメージ</figcaption></figure>
      <h3>${item.title}</h3>
      <div class="case-stat views"><small>VIDEO VIEWS</small><strong>${item.videoViews}</strong><em>動画再生数</em></div>
      <dl><div><dt>撮影店舗</dt><dd>${item.store}</dd></div><div><dt>企画タイプ</dt><dd>${item.projectType}</dd></div></dl>
      <p class="case-description">${item.description}</p>
      <div class="case-tags">${item.tags.map(tag => `<span>#${tag}</span>`).join('')}</div>
      <small class="case-date">※${item.measuredAt}</small>
    </article>`).join('');
}
