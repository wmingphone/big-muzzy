// ============================================================
//  数据
// ============================================================

const BASE = 'https://archive.org/download/muzzy-in-english/'

const EPISODES = [
  { id: 1,  part: 1, title: '你好，我是 Muzzy',  en: "Hello, I'm Muzzy",    emoji: '👋', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2001.mp4' },
  { id: 2,  part: 1, title: '你是谁？',           en: 'Who Are You?',         emoji: '🤔', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2002.mp4' },
  { id: 3,  part: 1, title: '你叫什么名字？',      en: "What's Your Name?",   emoji: '📛', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2003.mp4' },
  { id: 4,  part: 1, title: '我饿了',             en: "I'm Hungry",           emoji: '🍎', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2004.mp4' },
  { id: 5,  part: 1, title: '你在做什么？',        en: 'What Are You Doing?', emoji: '🎭', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2005.mp4' },
  { id: 6,  part: 1, title: '再见，Muzzy',         en: 'Goodbye, Muzzy',      emoji: '🌈', videoUrl: BASE + '01%20Muzzy%20In%20Gondoland%2006.mp4' },
  { id: 7,  part: 2, title: 'Muzzy 回来了',        en: 'Muzzy Comes Back',    emoji: '🎉', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2001.mp4' },
  { id: 8,  part: 2, title: '在花园里',            en: 'In the Garden',       emoji: '🌷', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2002.mp4' },
  { id: 9,  part: 2, title: '在宫殿里',            en: 'At the Palace',       emoji: '🏰', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2003.mp4' },
  { id: 10, part: 2, title: '大钟',               en: 'The Big Clock',        emoji: '🕐', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2004.mp4' },
  { id: 11, part: 2, title: '机器人',              en: 'The Robot',           emoji: '🤖', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2005.mp4' },
  { id: 12, part: 2, title: '再见了',              en: 'Goodbye Again',       emoji: '🌟', videoUrl: BASE + '02%20Muzzy%20Comes%20Back%2006.mp4' },
]

const VOCAB = [
  // 颜色
  { id: 1,  en: 'red',     zh: '红色', cat: '颜色', emoji: '🔴' },
  { id: 2,  en: 'blue',    zh: '蓝色', cat: '颜色', emoji: '🔵' },
  { id: 3,  en: 'green',   zh: '绿色', cat: '颜色', emoji: '🟢' },
  { id: 4,  en: 'yellow',  zh: '黄色', cat: '颜色', emoji: '🟡' },
  { id: 5,  en: 'orange',  zh: '橙色', cat: '颜色', emoji: '🟠' },
  { id: 6,  en: 'purple',  zh: '紫色', cat: '颜色', emoji: '🟣' },
  { id: 7,  en: 'black',   zh: '黑色', cat: '颜色', emoji: '⚫' },
  { id: 8,  en: 'white',   zh: '白色', cat: '颜色', emoji: '⚪' },
  // 数字
  { id: 9,  en: 'one',     zh: '一',   cat: '数字', emoji: '1️⃣' },
  { id: 10, en: 'two',     zh: '二',   cat: '数字', emoji: '2️⃣' },
  { id: 11, en: 'three',   zh: '三',   cat: '数字', emoji: '3️⃣' },
  { id: 12, en: 'four',    zh: '四',   cat: '数字', emoji: '4️⃣' },
  { id: 13, en: 'five',    zh: '五',   cat: '数字', emoji: '5️⃣' },
  { id: 14, en: 'six',     zh: '六',   cat: '数字', emoji: '6️⃣' },
  { id: 15, en: 'seven',   zh: '七',   cat: '数字', emoji: '7️⃣' },
  { id: 16, en: 'eight',   zh: '八',   cat: '数字', emoji: '8️⃣' },
  { id: 17, en: 'nine',    zh: '九',   cat: '数字', emoji: '9️⃣' },
  { id: 18, en: 'ten',     zh: '十',   cat: '数字', emoji: '🔟' },
  // 人物
  { id: 19, en: 'king',    zh: '国王', cat: '人物', emoji: '👑' },
  { id: 20, en: 'queen',   zh: '王后', cat: '人物', emoji: '👸' },
  { id: 21, en: 'boy',     zh: '男孩', cat: '人物', emoji: '👦' },
  { id: 22, en: 'girl',    zh: '女孩', cat: '人物', emoji: '👧' },
  { id: 23, en: 'man',     zh: '男人', cat: '人物', emoji: '👨' },
  { id: 24, en: 'woman',   zh: '女人', cat: '人物', emoji: '👩' },
  { id: 25, en: 'mother',  zh: '妈妈', cat: '人物', emoji: '🤱' },
  { id: 26, en: 'father',  zh: '爸爸', cat: '人物', emoji: '👨‍👧' },
  // 动作
  { id: 27, en: 'eat',     zh: '吃',   cat: '动作', emoji: '🍽️' },
  { id: 28, en: 'drink',   zh: '喝',   cat: '动作', emoji: '🥤' },
  { id: 29, en: 'sleep',   zh: '睡觉', cat: '动作', emoji: '😴' },
  { id: 30, en: 'run',     zh: '跑步', cat: '动作', emoji: '🏃' },
  { id: 31, en: 'fly',     zh: '飞',   cat: '动作', emoji: '🦋' },
  { id: 32, en: 'swim',    zh: '游泳', cat: '动作', emoji: '🏊' },
  { id: 33, en: 'play',    zh: '玩耍', cat: '动作', emoji: '⚽' },
  { id: 34, en: 'work',    zh: '工作', cat: '动作', emoji: '💼' },
  { id: 35, en: 'look',    zh: '看',   cat: '动作', emoji: '👀' },
  { id: 36, en: 'come',    zh: '来',   cat: '动作', emoji: '🤗' },
  { id: 37, en: 'go',      zh: '去',   cat: '动作', emoji: '🚶' },
  { id: 38, en: 'sit',     zh: '坐',   cat: '动作', emoji: '🪑' },
  // 食物
  { id: 39, en: 'apple',   zh: '苹果', cat: '食物', emoji: '🍎' },
  { id: 40, en: 'orange',  zh: '橙子', cat: '食物', emoji: '🍊' },
  { id: 41, en: 'cake',    zh: '蛋糕', cat: '食物', emoji: '🎂' },
  { id: 42, en: 'milk',    zh: '牛奶', cat: '食物', emoji: '🥛' },
  { id: 43, en: 'tea',     zh: '茶',   cat: '食物', emoji: '🍵' },
  { id: 44, en: 'water',   zh: '水',   cat: '食物', emoji: '💧' },
  // 形容词
  { id: 45, en: 'big',     zh: '大的',   cat: '形容词', emoji: '🐘' },
  { id: 46, en: 'small',   zh: '小的',   cat: '形容词', emoji: '🐭' },
  { id: 47, en: 'hungry',  zh: '饿的',   cat: '形容词', emoji: '😋' },
  { id: 48, en: 'happy',   zh: '开心的', cat: '形容词', emoji: '😊' },
  { id: 49, en: 'sad',     zh: '难过的', cat: '形容词', emoji: '😢' },
  { id: 50, en: 'good',    zh: '好的',   cat: '形容词', emoji: '👍' },
  { id: 51, en: 'old',     zh: '旧的',   cat: '形容词', emoji: '⏳' },
  { id: 52, en: 'new',     zh: '新的',   cat: '形容词', emoji: '✨' },
  // 地点 & 物品
  { id: 53, en: 'garden',  zh: '花园', cat: '地点与物品', emoji: '🌷' },
  { id: 54, en: 'palace',  zh: '宫殿', cat: '地点与物品', emoji: '🏰' },
  { id: 55, en: 'clock',   zh: '时钟', cat: '地点与物品', emoji: '🕐' },
  { id: 56, en: 'table',   zh: '桌子', cat: '地点与物品', emoji: '🪑' },
  { id: 57, en: 'tree',    zh: '树',   cat: '地点与物品', emoji: '🌳' },
  { id: 58, en: 'flower',  zh: '花',   cat: '地点与物品', emoji: '🌸' },
  // 问候
  { id: 59, en: 'hello',   zh: '你好', cat: '问候语', emoji: '👋' },
  { id: 60, en: 'goodbye', zh: '再见', cat: '问候语', emoji: '🤗' },
]

// ============================================================
//  美式发音（Web Speech API）
// ============================================================

let _usVoice = null

function _loadVoice() {
  const voices = window.speechSynthesis.getVoices()
  _usVoice =
    voices.find(v => v.lang === 'en-US' && /samantha|zira|david|alex|karen/i.test(v.name)) ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en'))
}

if (window.speechSynthesis) {
  _loadVoice()
  window.speechSynthesis.onvoiceschanged = _loadVoice
}

function speak(word) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(word)
  u.lang  = 'en-US'
  u.rate  = 0.85
  u.pitch = 1
  if (_usVoice) u.voice = _usVoice
  window.speechSynthesis.speak(u)
}

// ============================================================
//  本地存储
// ============================================================

const STORE_KEY = 'bigmuzzy_v1'

function defaultState() {
  return {
    watchedEps: [],
    learnedVocab: [],
    stars: 0,
    streak: 0,
    lastStudyDate: null,
    studyDates: [],
    dailyVocab: null,
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    return raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState()
  } catch { return defaultState() }
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state))
}

let state = load()

// ============================================================
//  工具函数
// ============================================================

function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

function showToast(msg) {
  const el = document.getElementById('toast')
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(el._timer)
  el._timer = setTimeout(() => el.classList.remove('show'), 2500)
}

function addStars(n) {
  state.stars += n
  save()
  renderHeader()
}

// ============================================================
//  连续学习天数
// ============================================================

function updateStreak() {
  const t = today()
  if (state.lastStudyDate === t) return

  if (state.lastStudyDate) {
    const prev = new Date(state.lastStudyDate)
    const now  = new Date(t)
    const diff = Math.round((now - prev) / 86400000)
    state.streak = diff === 1 ? state.streak + 1 : 1
  } else {
    state.streak = 1
  }

  state.lastStudyDate = t
  if (!state.studyDates.includes(t)) state.studyDates.push(t)
  save()
}

// ============================================================
//  每日单词集
// ============================================================

function getDailyVocab() {
  const t = today()
  if (state.dailyVocab && state.dailyVocab.date === t) return state.dailyVocab

  const unlearned = VOCAB.filter(v => !state.learnedVocab.includes(v.id))
  const pool = unlearned.length >= 5 ? unlearned : [...VOCAB]
  pool.sort(() => Math.random() - 0.5)
  const ids = pool.slice(0, 5).map(v => v.id)

  state.dailyVocab = { date: t, ids, progress: 0, done: false }
  save()
  return state.dailyVocab
}

// ============================================================
//  渲染 - 顶部区域
// ============================================================

function renderHeader() {
  document.getElementById('streak-num').textContent = state.streak
  document.getElementById('total-stars').textContent = state.stars

  const h = new Date().getHours()
  const greeting =
    h < 6  ? '🌙 凌晨了，早点睡觉哦！' :
    h < 12 ? '☀️ 早上好！今天也要好好学习哦！' :
    h < 18 ? '🌤️ 下午好！继续加油，你最棒！' :
             '🌙 晚上好！睡前学几个单词吧！'
  document.getElementById('greeting').textContent = greeting
  document.getElementById('today-date').textContent =
    new Date().toLocaleDateString('zh-CN', { year:'numeric', month:'long', day:'numeric', weekday:'long' })
}

function renderProgress() {
  const epDone  = state.watchedEps.length
  const vocDone = state.learnedVocab.length
  document.getElementById('ep-count').textContent  = epDone
  document.getElementById('voc-count').textContent = vocDone
  document.getElementById('ep-fill').style.width   = `${(epDone  / 12) * 100}%`
  document.getElementById('voc-fill').style.width  = `${(vocDone / 60) * 100}%`
  document.getElementById('streak-num').textContent = state.streak
  document.getElementById('total-stars').textContent = state.stars
}

// ============================================================
//  今日任务 Tab
// ============================================================

function renderToday() {
  renderTasks()
  renderRecommended()
  renderDailyPreview()
}

function renderTasks() {
  const dv = getDailyVocab()
  document.getElementById('task-list').innerHTML = `
    <div class="task-item ${state.watchedEps.length > 0 ? 'done' : ''}">
      <span class="task-check">${state.watchedEps.length > 0 ? '✅' : '⭕'}</span>
      <span>📺 看一集 Big Muzzy（已看 ${state.watchedEps.length}/12 集）</span>
    </div>
    <div class="task-item ${dv.done ? 'done' : ''}">
      <span class="task-check">${dv.done ? '✅' : '⭕'}</span>
      <span>📖 学会今日 5 个单词（进度 ${dv.progress}/5）</span>
    </div>
    <div class="task-item ${state.streak >= 1 ? 'done' : ''}">
      <span class="task-check">${state.streak >= 1 ? '✅' : '⭕'}</span>
      <span>🔥 今日打卡（已连续 ${state.streak} 天）</span>
    </div>
  `
}

function renderRecommended() {
  const next = EPISODES.find(ep => !state.watchedEps.includes(ep.id))
  const el = document.getElementById('recommended-ep')
  if (!next) {
    el.innerHTML = `<div class="all-done-box">🎊 恭喜！Big Muzzy 全部看完啦！你真了不起！</div>`
    return
  }
  const epNum = next.part === 1 ? next.id : next.id - 6
  el.innerHTML = `
    <div class="rec-card">
      <span class="rec-emoji">${next.emoji}</span>
      <div class="rec-info">
        <div class="rec-part">Part ${next.part} · 第 ${epNum} 集</div>
        <div class="rec-title">${next.title}</div>
        <div class="rec-en">${next.en}</div>
      </div>
      <div class="rec-btns">
        <button class="rec-play-btn" onclick="openVideo(${next.id})">▶ 看视频</button>
        <button class="rec-btn" onclick="watchEpisode(${next.id})">看完了 ✓</button>
      </div>
    </div>
  `
}

function renderDailyPreview() {
  const dv    = getDailyVocab()
  const words = dv.ids.map(id => VOCAB.find(v => v.id === id))
  const el    = document.getElementById('daily-vocab-preview')

  const chips = words.map(w => `
    <div class="vocab-chip ${state.learnedVocab.includes(w.id) ? 'learned' : ''}">
      <span>${w.emoji}</span>
      <span style="font-weight:700">${w.en}</span>
      ${state.learnedVocab.includes(w.id) ? '<span class="chip-check">✓</span>' : ''}
    </div>
  `).join('')

  el.innerHTML = `
    <div class="daily-vocab-grid">${chips}</div>
    ${dv.done
      ? `<div class="done-msg">🌟 今日单词全部完成！厉害！</div>`
      : `<button class="go-vocab-btn" onclick="switchTab('vocab')">开始练习单词 →</button>`
    }
  `
}

// 从今日推荐卡片点击标记
function watchEpisode(id) {
  if (state.watchedEps.includes(id)) return
  state.watchedEps.push(id)
  addStars(2)
  save()
  showToast('🎉 太棒了！+2 颗星星！')
  renderProgress()
  renderToday()
  renderEpisodes()
}

// ============================================================
//  看视频 Tab
// ============================================================

function renderEpisodes() {
  ;[1, 2].forEach(part => {
    document.getElementById(`ep-grid-${part}`).innerHTML =
      EPISODES.filter(ep => ep.part === part).map(ep => {
        const epNum = part === 1 ? ep.id : ep.id - 6
        const done  = state.watchedEps.includes(ep.id)
        return `
          <div class="ep-card ${done ? 'watched' : ''}">
            ${done ? `<div class="ep-badge">✓ 已看</div>` : ''}
            <span class="ep-emoji">${ep.emoji}</span>
            <div class="ep-num">第 ${epNum} 集</div>
            <div class="ep-title">${ep.title}</div>
            <div class="ep-en">${ep.en}</div>
            <div class="ep-actions">
              <button class="ep-play-btn" onclick="openVideo(${ep.id})">▶ 看视频</button>
              <button class="ep-mark-btn ${done ? 'marked' : ''}" onclick="toggleEpisode(${ep.id})">
                ${done ? '✓ 已看' : '标记已看'}
              </button>
            </div>
          </div>
        `
      }).join('')
  })
}

function toggleEpisode(id) {
  if (state.watchedEps.includes(id)) {
    state.watchedEps = state.watchedEps.filter(i => i !== id)
    save()
    showToast('已取消标记')
  } else {
    state.watchedEps.push(id)
    addStars(2)
    save()
    showToast('🎉 看完一集！+2 颗星星！')
  }
  renderProgress()
  renderEpisodes()
  renderToday()
}

// ── 视频播放 Modal ──
let currentVideoEpId = null

function openVideo(epId) {
  const ep = EPISODES.find(e => e.id === epId)
  currentVideoEpId = epId

  const epNum = ep.part === 1 ? ep.id : ep.id - 6
  document.getElementById('vm-title').textContent =
    `Part ${ep.part} · 第 ${epNum} 集  ${ep.title}`

  const video = document.getElementById('vm-video')
  video.src = ep.videoUrl
  video.load()
  video.play().catch(() => {})

  const btn = document.getElementById('vm-watched-btn')
  const already = state.watchedEps.includes(epId)
  btn.textContent = already ? '✓ 已标记为看完' : '看完了，标记已看 ✓'
  btn.disabled    = already
  btn.className   = already ? 'vm-watched-btn done' : 'vm-watched-btn'

  document.getElementById('video-modal').classList.add('open')
}

function closeVideo() {
  const video = document.getElementById('vm-video')
  video.pause()
  video.src = ''
  document.getElementById('video-modal').classList.remove('open')
  currentVideoEpId = null
}

function markWatchedFromModal() {
  if (!currentVideoEpId || state.watchedEps.includes(currentVideoEpId)) return
  state.watchedEps.push(currentVideoEpId)
  addStars(2)
  save()
  showToast('🎉 看完一集！+2 颗星星！')
  renderProgress()
  renderEpisodes()
  renderToday()
  const btn = document.getElementById('vm-watched-btn')
  btn.textContent = '✓ 已标记为看完'
  btn.disabled    = true
  btn.className   = 'vm-watched-btn done'
}

// ============================================================
//  学单词 Tab - 翻卡片
// ============================================================

let fcQueue = []
let fcFlipped = false

function renderVocab() {
  const el = document.getElementById('vocab-content')
  const dv = getDailyVocab()

  if (dv.done) {
    el.innerHTML = `
      <div class="vocab-done">
        <div class="done-big-emoji">🌟</div>
        <div class="done-title">今日单词全部学会了！</div>
        <div class="done-sub">明天继续，你越来越棒！</div>
        <button class="btn-outline" onclick="showAllVocab()">查看全部单词 📖</button>
      </div>
    `
    return
  }

  const todayWords = dv.ids.map(id => VOCAB.find(v => v.id === id))
  const remaining  = todayWords.filter(w => !state.learnedVocab.includes(w.id))

  if (remaining.length === 0) {
    state.dailyVocab.done = true
    addStars(5)
    save()
    showToast('🎊 今日单词全部学完！+5 颗星星！')
    renderVocab()
    renderToday()
    renderProgress()
    return
  }

  fcQueue   = [...remaining]
  fcFlipped = false
  renderCard(el, todayWords)
}

function renderCard(el, todayWords) {
  const word = fcQueue[0]
  const done = todayWords.filter(w => state.learnedVocab.includes(w.id)).length
  const total = todayWords.length

  el.innerHTML = `
    <div class="fc-header">
      <div class="fc-progress-text">今日进度 ${done} / ${total} 个单词</div>
      <div class="fc-bar"><div class="fc-bar-fill" style="width:${(done/total)*100}%"></div></div>
    </div>

    <div class="flashcard" id="flashcard" onclick="flipCard()">
      <div class="card-inner" id="card-inner">
        <div class="card-face card-front">
          <div class="card-cat">${word.cat}</div>
          <div class="card-emoji">${word.emoji}</div>
          <div class="card-word">${word.en}</div>
          <button class="speak-btn" onclick="event.stopPropagation();speak('${word.en}')">🔊 听发音</button>
          <div class="card-hint">点击卡片翻转看中文 👆</div>
        </div>
        <div class="card-face card-back">
          <div class="card-cat">${word.cat}</div>
          <div class="card-emoji">${word.emoji}</div>
          <div class="card-word-zh">${word.zh}</div>
          <div class="card-word-sub">${word.en}</div>
          <button class="speak-btn speak-btn-back" onclick="event.stopPropagation();speak('${word.en}')">🔊 再听一遍</button>
        </div>
      </div>
    </div>

    <div class="fc-btns" id="fc-btns">
      <button class="btn-again" onclick="cardAgain()">再练一次 ↩</button>
      <button class="btn-known" onclick="cardKnown(${word.id})">认识了！⭐</button>
    </div>

    <div class="fc-remaining">还剩 ${fcQueue.length} 个单词</div>
  `
  // 新卡出现时自动读一遍
  setTimeout(() => speak(word.en), 300)
}

function flipCard() {
  const inner = document.getElementById('card-inner')
  const btns  = document.getElementById('fc-btns')
  if (!inner) return
  fcFlipped = !fcFlipped
  inner.classList.toggle('flipped', fcFlipped)
  btns.style.display = fcFlipped ? 'flex' : 'none'
}

function cardKnown(id) {
  if (!state.learnedVocab.includes(id)) {
    state.learnedVocab.push(id)
    state.dailyVocab.progress = (state.dailyVocab.progress || 0) + 1
    addStars(1)
    save()
    showToast('✨ 学会一个！+1 颗星星！')
  }
  fcFlipped = false
  renderVocab()
  renderProgress()
}

function cardAgain() {
  // 把当前单词移到队列末尾
  fcQueue.push(fcQueue.shift())
  fcFlipped = false
  const dv = getDailyVocab()
  const todayWords = dv.ids.map(id => VOCAB.find(v => v.id === id))
  renderCard(document.getElementById('vocab-content'), todayWords)
}

function showAllVocab() {
  const el   = document.getElementById('vocab-content')
  const cats = [...new Set(VOCAB.map(v => v.cat))]

  el.innerHTML = `
    <button class="btn-back" onclick="renderVocab()">← 返回练习</button>
    ${cats.map(cat => `
      <div class="all-vocab-cat">
        <div class="all-vocab-cat-title">${cat}</div>
        <div class="all-vocab-grid">
          ${VOCAB.filter(v => v.cat === cat).map(w => `
            <div class="all-vocab-item ${state.learnedVocab.includes(w.id) ? 'learned' : ''}">
              <span class="avi-emoji">${w.emoji}</span>
              <span class="avi-en">${w.en}</span>
              <span class="avi-zh">${w.zh}</span>
              ${state.learnedVocab.includes(w.id) ? '<span class="avi-check">✓</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `
}

// ============================================================
//  成就 Tab
// ============================================================

function renderHistory() {
  const BADGES = [
    { emoji:'🌱', name:'初学者',    desc:'开始第一天',      earned: state.studyDates.length >= 1 },
    { emoji:'🔥', name:'三天连续',  desc:'连续学习3天',     earned: state.streak >= 3 },
    { emoji:'💪', name:'一周坚持',  desc:'连续学习7天',     earned: state.streak >= 7 },
    { emoji:'📖', name:'单词达人',  desc:'学会30个单词',    earned: state.learnedVocab.length >= 30 },
    { emoji:'📚', name:'词汇大师',  desc:'学会全部60词',    earned: state.learnedVocab.length >= 60 },
    { emoji:'🎬', name:'追剧达人',  desc:'看完 Part 1',     earned: EPISODES.filter(e=>e.part===1).every(e=>state.watchedEps.includes(e.id)) },
    { emoji:'🏆', name:'Muzzy 毕业',desc:'看完全部12集',    earned: state.watchedEps.length >= 12 },
    { emoji:'⭐', name:'星星富翁',  desc:'获得50颗星',      earned: state.stars >= 50 },
  ]

  document.getElementById('history-content').innerHTML = `
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-num">${state.studyDates.length}</div><div class="stat-label">学习天数</div></div>
      <div class="stat-card"><div class="stat-num">${state.streak}</div><div class="stat-label">连续天数</div></div>
      <div class="stat-card"><div class="stat-num">${state.stars}</div><div class="stat-label">星星数量</div></div>
      <div class="stat-card"><div class="stat-num">${state.learnedVocab.length}</div><div class="stat-label">已学单词</div></div>
    </div>

    <h2 class="section-title">🏅 成就徽章</h2>
    <div class="badges-grid">
      ${BADGES.map(b => `
        <div class="badge-card ${b.earned ? '' : 'locked'}">
          <div class="badge-emoji">${b.earned ? b.emoji : '🔒'}</div>
          <div class="badge-name">${b.name}</div>
          <div class="badge-desc">${b.desc}</div>
        </div>
      `).join('')}
    </div>

    <h2 class="section-title">📅 本月学习日历</h2>
    ${renderCalendar()}
  `
}

// ============================================================
//  说明 Tab
// ============================================================

function renderAbout() {
  document.getElementById('about-content').innerHTML = `
    <section class="about-hero">
      <div class="about-kicker">Big Muzzy 每日学习</div>
      <h2>一个轻量的儿童英语启蒙记录页</h2>
      <p>这里可以看学习进度、练每日单词、听英文发音，并用星星和成就帮助孩子保持节奏。</p>
    </section>

    <div class="about-grid">
      <article class="about-card">
        <div class="about-icon">💾</div>
        <h3>进度保存</h3>
        <p>学习记录只保存在当前浏览器的 localStorage 中，不会上传到服务器。换设备或清理浏览器数据后，进度可能会消失。</p>
      </article>
      <article class="about-card">
        <div class="about-icon">📺</div>
        <h3>视频来源</h3>
        <p>视频播放地址来自 archive.org 的公开在线播放链接。公开视频可能受版权、地区或网络状态影响。</p>
      </article>
      <article class="about-card">
        <div class="about-icon">🔊</div>
        <h3>单词发音</h3>
        <p>单词发音使用浏览器自带的 Speech API。不同浏览器、系统和语音包的发音效果可能不同。</p>
      </article>
      <article class="about-card">
        <div class="about-icon">🌱</div>
        <h3>使用建议</h3>
        <p>建议每天 10-20 分钟，先看一小段视频，再练 5 个单词。孩子不需要一次学太多，稳定重复更重要。</p>
      </article>
    </div>

    <div class="public-note">
      <strong>公开分享提示：</strong>
      本页面是个人学习记录工具，不是 Big Muzzy 官方产品。公开上线时请用于免费学习交流，不要用于收费课程、广告推广或暗示官方授权。
    </div>
  `
}

function renderCalendar() {
  const now    = new Date()
  const year   = now.getFullYear()
  const month  = now.getMonth()
  const first  = new Date(year, month, 1).getDay()
  const days   = new Date(year, month + 1, 0).getDate()
  const label  = now.toLocaleDateString('zh-CN', { year:'numeric', month:'long' })

  const blanks = Array(first).fill(`<div class="cal-day"></div>`).join('')
  let cells = ''
  for (let d = 1; d <= days; d++) {
    const ds      = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
    const isToday = ds === today()
    const studied = state.studyDates.includes(ds)
    cells += `<div class="cal-day ${studied?'studied':''} ${isToday?'today':''}">${d}${studied?'<span>⭐</span>':''}</div>`
  }

  return `
    <div class="calendar">
      <div class="cal-header">${label}</div>
      <div class="cal-grid">
        <div class="cal-day-name">日</div><div class="cal-day-name">一</div>
        <div class="cal-day-name">二</div><div class="cal-day-name">三</div>
        <div class="cal-day-name">四</div><div class="cal-day-name">五</div>
        <div class="cal-day-name">六</div>
        ${blanks}${cells}
      </div>
    </div>
  `
}

// ============================================================
//  标签切换
// ============================================================

function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name))
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === `pane-${name}`))
  if (name === 'vocab')    renderVocab()
  if (name === 'history')  renderHistory()
  if (name === 'episodes') renderEpisodes()
  if (name === 'today')    renderToday()
  if (name === 'about')    renderAbout()
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab))
  })
}

// ============================================================
//  启动
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  updateStreak()
  renderHeader()
  renderProgress()
  renderToday()
  renderEpisodes()
  initTabs()
})
