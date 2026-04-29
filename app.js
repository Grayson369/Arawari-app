// ============================================================
//  数据层 — 修改这里来更新语言内容
//  每个单词包含：word（词语）、translation（英文）、
//  category（分类ID）、pronunciation（发音）、notes（备注）
// ============================================================

const categories = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '🦘',
    color: '#E8762B',
    description: 'Animals of Balanggarra Country'
  },
  {
    id: 'plants',
    name: 'Plants',
    icon: '🌿',
    color: '#2D6A4F',
    description: 'Plants and bush tucker'
  },
  {
    id: 'phrases',
    name: 'Daily Phrases',
    icon: '💬',
    color: '#6B4C9A',
    description: 'Common words for everyday life'
  },
  {
    id: 'songs',
    name: 'Songs',
    icon: '🎵',
    color: '#C0392B',
    description: 'Traditional songs and chants'
  }
];

const words = [
  // ── Animals ──────────────────────────────────────────────
  { id: 1,  word: 'Garra',      translation: 'Kangaroo',   category: 'animals', pronunciation: 'GAR-ra',        notes: 'Common in open grasslands',
    sentences: ['Garra yawuru.' , 'The kangaroo grazes in the open grasslands at dawn.', 'Ngarri bula, garra!' , 'Come here, kangaroo!'] },
  { id: 2,  word: 'Wirra',      translation: 'Bird',       category: 'animals', pronunciation: 'WIR-ra',        notes: '',
    sentences: ['Wirra wirra garla.' , 'The birds gather near the water.', 'Wirra yawuru mindi.' , 'The bird sings and finds fruit.'] },
  { id: 3,  word: 'Yorna',      translation: 'Fish',       category: 'animals', pronunciation: 'YOR-na',        notes: 'Found in rivers and creeks',
    sentences: ['Yorna garla ngawa.' , 'Yes, there are fish in the water.', 'Mindi mindi yorna.' , 'Fish is good food.'] },
  { id: 4,  word: 'Marra',      translation: 'Snake',      category: 'animals', pronunciation: 'MAR-ra',        notes: '',
    sentences: ['Warra! Marra ngarra.' , 'Watch out! A snake is in the bush.', 'Marra yawuru.' , 'The snake moves quietly through the grass.'] },
  { id: 5,  word: 'Bula',       translation: 'Turtle',     category: 'animals', pronunciation: 'BOO-la',        notes: 'Found in waterways',
    sentences: ['Bula garla ngawa.' , 'The turtle lives in the water, yes.', 'Yorna bula garla.' , 'Fish and turtle share the waterway.'] },
  { id: 6,  word: 'Ngarri',     translation: 'Crocodile',  category: 'animals', pronunciation: 'NGAR-ri',       notes: 'Treat with respect',
    sentences: ['Warra ngarri garla!' , 'Do not enter the water — crocodile!', 'Ngarri garla mindi.' , 'The crocodile waits patiently in the water.'] },
  { id: 7,  word: 'Wunba',      translation: 'Emu',        category: 'animals', pronunciation: 'WOON-ba',       notes: '',
    sentences: ['Wunba yarra.' , 'The emu strides through the tall grass.', 'Wunba mindi ngawa.' , 'The emu also eats fruit.'] },
  { id: 8,  word: 'Djarri',     translation: 'Wallaby',    category: 'animals', pronunciation: 'JAR-ri',        notes: '',
    sentences: ['Djarri ngarra.' , 'The wallaby hides in the bush.', 'Djarri garla mindi.' , 'The wallaby drinks water and eats fruit.'] },

  // ── Plants ───────────────────────────────────────────────
  { id: 9,  word: 'Wandi',      translation: 'Tree',       category: 'plants',  pronunciation: 'WAN-di',        notes: '',
    sentences: ['Wandi garri ngawa.' , 'The tree has strong bark, yes.', 'Wirra wandi.' , 'The bird nests in the tree.'] },
  { id: 10, word: 'Yarra',      translation: 'Grass',      category: 'plants',  pronunciation: 'YAR-ra',        notes: '',
    sentences: ['Garra yarra.' , 'The kangaroo rests in the grass.', 'Yarra garla ngawa.' , 'The grass grows where there is water.'] },
  { id: 11, word: 'Burra',      translation: 'Flower',     category: 'plants',  pronunciation: 'BOOR-ra',       notes: '',
    sentences: ['Burra wandi.' , 'The flower blooms on the tree.', 'Burra mindi ngawa.' , 'The flower will become fruit.'] },
  { id: 12, word: 'Ngarra',     translation: 'Bush',       category: 'plants',  pronunciation: 'NGAR-ra',       notes: '',
    sentences: ['Marra ngarra.' , 'The snake lives in the bush.', 'Djarri ngarra garla.' , 'The wallaby shelters in the bush near the water.'] },
  { id: 13, word: 'Mindi',      translation: 'Fruit',      category: 'plants',  pronunciation: 'MIN-di',        notes: 'Bush tucker',
    sentences: ['Mindi wandi ngawa.' , 'Yes, there is fruit on the tree.', 'Maru mindi mindi.' , 'Thank you for this food!'] },
  { id: 14, word: 'Worra',      translation: 'Root / Yam', category: 'plants',  pronunciation: 'WOR-ra',        notes: 'Important food source',
    sentences: ['Worra mindi mindi ngawa.' , 'Yam is truly good food.', 'Garla worra.' , 'Water the yam plant.'] },
  { id: 15, word: 'Garri',      translation: 'Bark',       category: 'plants',  pronunciation: 'GAR-ri',        notes: 'Used for shelter and tools',
    sentences: ['Garri wandi ngawa.' , 'The bark of this tree is strong.', 'Garri maru.' , 'Thank you for the bark — it will make good shelter.'] },
  { id: 16, word: 'Bundu',      translation: 'Seed',       category: 'plants',  pronunciation: 'BOON-du',       notes: '',
    sentences: ['Bundu wandi.' , 'From this seed a great tree will grow.', 'Mindi bundu ngawa.' , 'Yes, the fruit has seeds inside.'] },

  // ── Daily Phrases ─────────────────────────────────────────
  { id: 17, word: 'Yawuru',     translation: 'Hello',      category: 'phrases', pronunciation: 'ya-WOO-roo',    notes: 'Common greeting',
    sentences: ['Yawuru! Maru.' , 'Hello! Thank you for coming.', 'Yawuru, ngarri bula.' , 'Hello, come here!'] },
  { id: 18, word: 'Maru',       translation: 'Thank you',  category: 'phrases', pronunciation: 'MA-roo',        notes: '',
    sentences: ['Maru mindi mindi.' , 'Thank you for the food.', 'Maru garla ngawa.' , 'Thank you, the water is much needed.'] },
  { id: 19, word: 'Bula bula',  translation: 'Goodbye',    category: 'phrases', pronunciation: 'BOO-la BOO-la', notes: '',
    sentences: ['Bula bula! Maru.' , 'Goodbye! Thank you for everything.', 'Yawuru, bula bula!' , 'Hello today, goodbye tomorrow.'] },
  { id: 20, word: 'Ngawa',      translation: 'Yes',        category: 'phrases', pronunciation: 'NGA-wa',        notes: '',
    sentences: ['Ngawa, maru.' , 'Yes, thank you.', 'Garla ngawa.' , 'Yes, I would like water.'] },
  { id: 21, word: 'Warra',      translation: 'No',         category: 'phrases', pronunciation: 'WAR-ra',        notes: '',
    sentences: ['Warra mindi mindi.' , 'No food needed right now.', 'Warra! Ngarri garla.' , 'No! There is a crocodile in the water.'] },
  { id: 22, word: 'Garla',      translation: 'Water',      category: 'phrases', pronunciation: 'GAR-la',        notes: 'Essential word',
    sentences: ['Garla maru.' , 'Thank you for the water.', 'Ngarri bula garla.' , 'Come here — there is fresh water.'] },
  { id: 23, word: 'Mindi mindi',translation: 'Food',       category: 'phrases', pronunciation: 'MIN-di MIN-di', notes: '',
    sentences: ['Mindi mindi maru.' , 'Thank you for the food.', 'Ngarri bula mindi mindi!' , 'Come here, there is food for everyone!'] },
  { id: 24, word: 'Ngarri bula',translation: 'Come here',  category: 'phrases', pronunciation: 'NGAR-ri BOO-la', notes: '',
    sentences: ['Ngarri bula! Yawuru!' , 'Come here! Hello!', 'Ngarri bula mindi mindi garla.' , 'Come here — there is food and water.'] },

  // ── Songs ─────────────────────────────────────────────────
  { id: 25, word: 'Garla Song',   translation: 'Song of the Water',  category: 'songs', pronunciation: '', notes: 'A song about the rivers and waterways of Balanggarra Country',
    sentences: ['The Garla Song is sung near rivers to honour the water spirits of Balanggarra Country.', 'Elders teach the Garla Song to children so they learn to respect and protect every waterway.'] },
  { id: 26, word: 'Wirra Wirra',  translation: 'Bird Dance Song',    category: 'songs', pronunciation: '', notes: "A children's song imitating the movements of birds",
    sentences: ['Children sing Wirra Wirra and flap their arms like birds during community gatherings.', 'The Wirra Wirra song teaches young ones to observe and move like the birds of Balanggarra Country.'] },
  { id: 27, word: 'Wandi Song',   translation: 'Song of the Tree',   category: 'songs', pronunciation: '', notes: 'A song about the importance of trees in Balanggarra life',
    sentences: ['The Wandi Song is performed at ceremonies to give thanks for the shelter and tools that trees provide.', 'Singing the Wandi Song reminds people that the trees of Balanggarra Country are living ancestors.'] },
  { id: 28, word: 'Morning Song', translation: 'Dawn Greeting',      category: 'songs', pronunciation: '', notes: 'Sung at sunrise to welcome the new day',
    sentences: ['Elders begin each new day with the Morning Song, greeting the sunrise over Balanggarra Country.', 'The Morning Song carries words of gratitude for the land, the water, and all living things.'] }
];

// ============================================================
//  状态
// ============================================================
let previousView = 'home';
let currentCategoryId = null;

// ============================================================
//  页面初始化
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderHomeCategoryGrid();
  renderCategoriesPage();
  renderDictionary(words);
  showView('home');
});

// ============================================================
//  视图切换
// ============================================================
function showView(viewName) {
  // 隐藏所有视图
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  // 显示目标视图
  document.getElementById('view-' + viewName).classList.remove('hidden');
  // 更新导航栏高亮
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('nav-' + viewName);
  if (activeBtn) activeBtn.classList.add('active');

  previousView = viewName;
  window.scrollTo(0, 0);
}

function goBack() {
  showView(previousView === 'category-detail' ? 'categories' : previousView);
}

// ============================================================
//  首页 — 分类卡片
// ============================================================
function renderHomeCategoryGrid() {
  const grid = document.getElementById('home-category-grid');
  grid.innerHTML = categories.map(cat => {
    const count = words.filter(w => w.category === cat.id).length;
    return `
      <div class="category-card" style="border-top-color:${cat.color}"
           onclick="openCategory('${cat.id}')">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${count} words</div>
        <div class="category-desc">${cat.description}</div>
      </div>`;
  }).join('');
}

// ============================================================
//  首页 — 搜索
// ============================================================
function handleHomeSearch(query) {
  const resultsEl = document.getElementById('home-search-results');
  if (!query.trim()) {
    resultsEl.innerHTML = '';
    return;
  }
  const results = filterWords(query);
  if (results.length === 0) {
    resultsEl.innerHTML = '<div class="search-no-result">No results found</div>';
    return;
  }
  resultsEl.innerHTML = results.slice(0, 6).map(w => `
    <div class="search-result-item" onclick="openWord(${w.id})">
      <span class="word">${w.word}</span>
      <span class="translation">${w.translation}</span>
    </div>`).join('');
}

// ============================================================
//  词典页面
// ============================================================
function renderDictionary(list) {
  const el = document.getElementById('dict-word-list');
  if (list.length === 0) {
    el.innerHTML = '<div class="search-no-result">No results found</div>';
    return;
  }
  el.innerHTML = list.map(w => {
    const cat = categories.find(c => c.id === w.category);
    return `
      <div class="word-list-item" style="border-left-color:${cat.color}"
           onclick="openWord(${w.id})">
        <div class="word-list-left">
          <div class="word-text">${w.word}</div>
          ${w.pronunciation ? `<div class="word-pron">${w.pronunciation}</div>` : ''}
        </div>
        <div class="word-list-right">
          <div class="word-translation">${w.translation}</div>
          <span class="word-category-tag" style="background:${cat.color}">${cat.name}</span>
        </div>
      </div>`;
  }).join('');
}

function handleDictSearch(query) {
  renderDictionary(query.trim() ? filterWords(query) : words);
}

// ============================================================
//  分类页面
// ============================================================
function renderCategoriesPage() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = categories.map(cat => {
    const count = words.filter(w => w.category === cat.id).length;
    return `
      <div class="category-card" style="border-top-color:${cat.color}"
           onclick="openCategory('${cat.id}')">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${count} words</div>
        <div class="category-desc">${cat.description}</div>
      </div>`;
  }).join('');
}

// ============================================================
//  分类详情页面
// ============================================================
function openCategory(catId) {
  previousView = 'categories';
  currentCategoryId = catId;
  const cat = categories.find(c => c.id === catId);
  const catWords = words.filter(w => w.category === catId);

  document.getElementById('category-detail-title').textContent = cat.icon + ' ' + cat.name;
  document.getElementById('category-detail-desc').textContent = cat.description;

  const grid = document.getElementById('category-detail-words');
  grid.innerHTML = catWords.map(w => `
    <div class="word-card" style="border-bottom-color:${cat.color}"
         onclick="openWord(${w.id})">
      <div class="wc-word">${w.word}</div>
      <div class="wc-translation">${w.translation}</div>
      ${w.pronunciation ? `<div class="wc-pron">${w.pronunciation}</div>` : ''}
    </div>`).join('');

  // 隐藏所有视图，显示详情页
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-category-detail').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  window.scrollTo(0, 0);
}

// ============================================================
//  单词详情弹窗
// ============================================================
function openWord(wordId) {
  const w = words.find(w => w.id === wordId);
  const cat = categories.find(c => c.id === w.category);

  document.getElementById('modal-tag').textContent = cat.icon + ' ' + cat.name;
  document.getElementById('modal-tag').style.background = cat.color;
  document.getElementById('modal-word').textContent = w.word;
  document.getElementById('modal-translation').textContent = w.translation;

  const pronWrap = document.getElementById('modal-pronunciation-wrap');
  if (w.pronunciation) {
    document.getElementById('modal-pronunciation').textContent = w.pronunciation;
    pronWrap.style.display = 'block';
  } else {
    pronWrap.style.display = 'none';
  }

  const notesWrap = document.getElementById('modal-notes-wrap');
  if (w.notes) {
    document.getElementById('modal-notes').textContent = w.notes;
    notesWrap.style.display = 'block';
  } else {
    notesWrap.style.display = 'none';
  }

  const sentencesWrap = document.getElementById('modal-sentences-wrap');
  if (w.sentences && w.sentences.length) {
    const listEl = document.getElementById('modal-sentences');
    listEl.innerHTML = '';
    for (let i = 0; i < w.sentences.length; i += 2) {
      const arawari = w.sentences[i];
      const english = w.sentences[i + 1] || '';
      const li = document.createElement('li');
      li.innerHTML = `<span class="sentence-arawari">${arawari}</span>${english ? `<span class="sentence-english">${english}</span>` : ''}`;
      listEl.appendChild(li);
    }
    sentencesWrap.style.display = 'block';
  } else {
    sentencesWrap.style.display = 'none';
  }

  document.getElementById('word-modal').classList.remove('hidden');
}

function closeWordModal() {
  document.getElementById('word-modal').classList.add('hidden');
}

function closeModal(event) {
  // 点击遮罩层关闭弹窗
  if (event.target.id === 'word-modal') closeWordModal();
}

function playAudio() {
  // 占位功能 — 接入真实音频文件后在此处添加播放逻辑
  alert('Audio coming soon! Real recordings will be added here.');
}

// ============================================================
//  工具函数
// ============================================================
function filterWords(query) {
  const q = query.toLowerCase();
  return words.filter(w =>
    w.word.toLowerCase().includes(q) ||
    w.translation.toLowerCase().includes(q)
  );
}
