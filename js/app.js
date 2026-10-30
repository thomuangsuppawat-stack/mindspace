/**
 * MindSpace (ฮีลใจ) - Core Application Logic
 * Academic Project 15 Points: Digital Platform for Social Impact
 */

// ================= INITIAL SAMPLE DATA =================
const DEFAULT_VENTS = [
  {
    id: "vent_1",
    avatar: "🐱 น้องแมวส้ม",
    tag: "หมดไฟ",
    content: "ช่วงนี้ทำไมรู้สึกเหนื่อยตลอดเวลาเลย พยายามอ่านหนังสือแต่ไม่เข้าหัว รู้สึกเหมือนตัวเองถอยหลังอยู่คนเดียว ทั้งที่เพื่อนๆ ดูไปข้างหน้ากันหมด...",
    hugs: 42,
    loves: 18,
    createdAt: "10 นาทีที่แล้ว",
    userInteractions: { hugged: false, loved: false }
  },
  {
    id: "vent_2",
    avatar: "🐰 กระต่ายขี้เซา",
    tag: "เครียดเรื่องเรียน",
    content: "งานกลุ่มสัปดาห์นี้เดดไลน์ชนกัน 3 วิชา กลัวทำออกมาได้ไม่ดีแล้วเพื่อนจะผิดหวัง นอนไม่ค่อยหลับมาสองคืนแล้วครับ ขอพลังใจให้ผ่านสัปดาห์นี้ไปได้ทีนะ 🥺",
    hugs: 89,
    loves: 55,
    createdAt: "35 นาทีที่แล้ว",
    userInteractions: { hugged: false, loved: false }
  },
  {
    id: "vent_3",
    avatar: "🌻 ดอกทานตะวัน",
    tag: "อยากได้กำลังใจ",
    content: "วันนี้สอบพรีเซนต์ผ่านไปแล้ว ถึงจะไม่เพอร์เฟกต์ที่สุด แต่อยากบอกตัวเองว่า เก่งมากแล้วนะที่กล้าก้าวขึ้นไปยืนพูดจนจบ ขอบคุณทุกคนในนี้ที่คอยให้กำลังใจกันครับ 🤍",
    hugs: 124,
    loves: 93,
    createdAt: "2 ชั่วโมงที่แล้ว",
    userInteractions: { hugged: false, loved: false }
  },
  {
    id: "vent_4",
    avatar: "🦉 นกฮูกนอนดึก",
    tag: "ความสัมพันธ์",
    content: "ทะเลาะกับเพื่อนสนิทเพราะเข้าใจผิดกัน พยายามอธิบายแต่เหมือนยิ่งพูดยิ่งแย่ รู้สึกโดดเดี่ยวมากเลย การไม่มีใครให้คุยด้วยนี่มันเหงากว่าที่คิดเยอะเลย",
    hugs: 67,
    loves: 24,
    createdAt: "4 ชั่วโมงที่แล้ว",
    userInteractions: { hugged: false, loved: false }
  }
];

// Drink On Me Lounge Initial Messages
const DEFAULT_LOUNGE_MESSAGES = [
  {
    id: "lounge_1",
    user: "บาร์เทนเดอร์ใจดี",
    avatar: "🍸",
    drink: "🍵 ชาคาโมมายล์อุ่น",
    table: "all",
    content: "ยินดีต้อนรับสู่ Drink on Me Lounge ครับทุกคน คืนนี้ใครแบกอะไรมา วางไว้หน้าเคาน์เตอร์ได้เลยนะ สั่งเครื่องดื่มแล้วชนแก้วกันครับ 🥂",
    treatedCount: 38,
    isDrinkOnMe: true,
    time: "20 นาทีที่แล้ว"
  },
  {
    id: "lounge_2",
    user: "ส้มจี๊ดหมดแรง",
    avatar: "🐱",
    drink: "☕ ลาเต้ฟองนุ่ม",
    table: "burnout",
    content: "สัปดาห์นี้ทำโปรเจกต์ไม่ได้นอนเลย พลังงานติดลบมาก แวะมาสั่งลาเต้ฟองนุ่มฮีลใจหน่อย ใครเหนื่อยเหมือนกัน ชนแก้วกันนะ ☕🥺",
    treatedCount: 24,
    isDrinkOnMe: false,
    time: "15 นาทีที่แล้ว"
  },
  {
    id: "lounge_3",
    user: "นกฮูกนอนดึก",
    avatar: "🦉",
    drink: "🍷 ไวน์แดงไร้แอลกอฮอล์",
    table: "midnight",
    content: "ตีหนึ่งแล้วยังคิดมากเรื่องอนาคตอยู่เลย การเติบโตเป็นผู้ใหญ่มันไม่ง่ายเลยจริงๆ ขอแก้วนี้ Drink on Me ให้ทุกคนที่ยังนอนไม่หลับคืนนี้นะครับ 🍷✨",
    treatedCount: 52,
    isDrinkOnMe: true,
    time: "8 นาทีที่แล้ว"
  },
  {
    id: "lounge_4",
    user: "หัวใจดวงเล็ก",
    avatar: "🐰",
    drink: "🥛 นมอุ่นผสมน้ำผึ้ง",
    table: "heartbreak",
    content: "เพิ่งแยกย้ายกับคนที่คิดว่าจะอยู่ด้วยกันไปตลอด... ข้างในมันโหวงมากเลย ขอนั่งตรงมุมเงียบๆ สักพักนะ",
    treatedCount: 45,
    isDrinkOnMe: false,
    time: "3 นาทีที่แล้ว"
  }
];

// ================= USER ACCOUNTS & PERSONAL STATS =================
const DEFAULT_USERS = [
  {
    id: "user_cat",
    username: "somjeed_cat",
    displayName: "น้องส้มจี๊ด",
    avatar: "🐱 น้องแมวส้ม",
    avatarEmoji: "🐱",
    role: "สมาชิกสายดูแลใจ",
    joinedAt: "28 ต.ค. 2026",
    stats: {
      moodLogsCount: 5,
      streakDays: 3,
      ventsCreated: 2,
      hugsGiven: 14,
      drinksTreated: 4,
      breatheSessions: 3,
      breatheMinutes: 6
    },
    moodHistory: [
      { day: "จันทร์", mood: "good", score: 4, factors: ["การเรียน"], note: "อ่านหนังสือเข้าใจดี มีสมาธิขึ้น" },
      { day: "อังคาร", mood: "neutral", score: 3, factors: ["งาน"], note: "งานกลุ่มมีปัญหานิดหน่อยแต่ผ่านไปได้" },
      { day: "พุธ", mood: "tired", score: 2, factors: ["สุขภาพ/การนอน"], note: "นอนดึก รู้สึกเพลียมาก" },
      { day: "พฤหัส", mood: "good", score: 4, factors: ["เพื่อน"], note: "ได้กินไอศกรีมกับเพื่อน คุยกันสนุกมาก" },
      { day: "วันนี้", mood: "good", score: 4, factors: ["การเรียน"], note: "ทำโปรเจกต์ส่งทัน รู้สึกโล่งใจ" }
    ],
    badges: [
      { id: "badge_first_mood", name: "ก้าวแรกฮีลใจ 🌱", icon: "🌱", desc: "เช็กอินอารมณ์ครั้งแรกในแพลตฟอร์ม", unlocked: true },
      { id: "badge_streak_3", name: "สม่ำเสมอเป็นเลิศ 🔥", icon: "🔥", desc: "เช็กอินอารมณ์ติดต่อกันครบ 3 วัน", unlocked: true },
      { id: "badge_hug_giver", name: "สายซัพพอร์ต 🫂", icon: "🫂", desc: "ส่งอ้อมกอดและพลังใจให้เพื่อน 10+ ครั้ง", unlocked: true },
      { id: "badge_pour_care", name: "เจ้ามือใจดี ☕", icon: "☕", desc: "ส่งแก้วกำลังใจในห้องเทความในใจ", unlocked: true },
      { id: "badge_breathe_zen", name: "จิตสงบนิ่ง 🧘‍♂️", icon: "🧘‍♂️", desc: "ฝึกหายใจแบบ 4-7-8 สะสม 3 ครั้ง", unlocked: true }
    ]
  },
  {
    id: "user_rabbit",
    username: "puimeak_rabbit",
    displayName: "กระต่ายปุยเมฆ",
    avatar: "🐰 กระต่ายขี้เซา",
    avatarEmoji: "🐰",
    role: "สมาชิกใหม่",
    joinedAt: "30 ต.ค. 2026",
    stats: {
      moodLogsCount: 2,
      streakDays: 1,
      ventsCreated: 1,
      hugsGiven: 4,
      drinksTreated: 1,
      breatheSessions: 1,
      breatheMinutes: 2
    },
    moodHistory: [
      { day: "เมื่อวาน", mood: "tired", score: 2, factors: ["การเรียน"], note: "การบ้านเยอะมาก เหนื่อยล้า" },
      { day: "วันนี้", mood: "neutral", score: 3, factors: ["เพื่อน"], note: "เริ่มปรับตัวได้แล้ว สบายใจขึ้น" }
    ],
    badges: [
      { id: "badge_first_mood", name: "ก้าวแรกฮีลใจ 🌱", icon: "🌱", desc: "เช็กอินอารมณ์ครั้งแรกในแพลตฟอร์ม", unlocked: true },
      { id: "badge_streak_3", name: "สม่ำเสมอเป็นเลิศ 🔥", icon: "🔥", desc: "เช็กอินอารมณ์ติดต่อกันครบ 3 วัน", unlocked: false },
      { id: "badge_hug_giver", name: "สายซัพพอร์ต 🫂", icon: "🫂", desc: "ส่งอ้อมกอดและพลังใจให้เพื่อน 10+ ครั้ง", unlocked: false },
      { id: "badge_pour_care", name: "เจ้ามือใจดี ☕", icon: "☕", desc: "ส่งแก้วกำลังใจในห้องเทความในใจ", unlocked: true },
      { id: "badge_breathe_zen", name: "จิตสงบนิ่ง 🧘‍♂️", icon: "🧘‍♂️", desc: "ฝึกหายใจแบบ 4-7-8 สะสม 3 ครั้ง", unlocked: false }
    ]
  }
];

// App State
let usersList = [];
let currentUser = null;
let vents = [];
let activeFilter = "all";
let currentMoodKey = "good";
let selectedFactors = [];
let moodChartInstance = null;
let breathingInterval = null;
let isBreathingActive = false;
let audioContext = null;
let isAudioPlaying = false;
let noiseNode = null;
let gainNode = null;

// Drink On Me Lounge State
let loungeMessages = [];
let activeLoungeTable = "all";
let selectedLoungeDrink = "🍵 ชาคาโมมายล์อุ่น";
let totalDrinksTreatedCount = 486;
let isLoungeMusicPlaying = false;
let loungeMusicInterval = null;

// ================= LIFECYCLE & INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Auth & User System
  initAuthSystem();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Load Vents from localStorage or use defaults
  const storedVents = localStorage.getItem("mindspace_vents");
  if (storedVents) {
    try {
      vents = JSON.parse(storedVents);
    } catch (e) {
      vents = [...DEFAULT_VENTS];
    }
  } else {
    vents = [...DEFAULT_VENTS];
    saveVentsToStorage();
  }

  // Load Lounge Messages
  const storedLounge = localStorage.getItem("mindspace_lounge_messages");
  if (storedLounge) {
    try {
      loungeMessages = JSON.parse(storedLounge);
    } catch (e) {
      loungeMessages = [...DEFAULT_LOUNGE_MESSAGES];
    }
  } else {
    loungeMessages = [...DEFAULT_LOUNGE_MESSAGES];
    localStorage.setItem("mindspace_lounge_messages", JSON.stringify(loungeMessages));
  }

  renderVents();
  renderLoungeMessages();
  setupTextareaCounter();
  initMoodChart();
  setupMobileMenu();
});

// Save vents to LocalStorage
function saveVentsToStorage() {
  localStorage.setItem("mindspace_vents", JSON.stringify(vents));
}

// Mobile menu toggle
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

// ================= VENT WALL LOGIC =================
function selectAvatar(avatar) {
  document.getElementById("selectedAvatar").value = avatar;
  const buttons = document.querySelectorAll("#avatarSelector .avatar-opt");
  buttons.forEach(b => {
    if (b.innerText.includes(avatar.split(" ")[0])) {
      b.classList.add("active-avatar");
      b.classList.remove("border-slate-200");
    } else {
      b.classList.remove("active-avatar");
      b.classList.add("border-slate-200");
    }
  });
}

function setupTextareaCounter() {
  const textarea = document.getElementById("ventContent");
  const countEl = document.getElementById("charCount");
  const previewBox = document.getElementById("aiGentlePreview");
  const previewText = document.getElementById("aiGentleText");

  if (!textarea) return;

  textarea.addEventListener("input", (e) => {
    const len = e.target.value.length;
    countEl.innerText = `${len}/300`;

    // Smart empathetic preview detection as user types
    const text = e.target.value.toLowerCase();
    if (len > 15) {
      previewBox.classList.remove("hidden");
      if (text.includes("เหนื่อย") || text.includes("หมดไฟ") || text.includes("ท้อ")) {
        previewText.innerText = "น้องใจดีตรวจพบว่าคุณกำลังเหนื่อยล้า: ขอบคุณที่กล้าเล่าออกมานะ เราพร้อมกอดคุณเสมอ";
      } else if (text.includes("สอบ") || text.includes("เรียน") || text.includes("งาน")) {
        previewText.innerText = "น้องใจดี: เรื่องภาระหน้าที่อาจจะหนัก แต่คุณมีค่ามากกว่าผลคะแนนเสมอนะครับ";
      } else {
        previewText.innerText = "น้องใจดี: ทุกความรู้สึกของคุณมีความหมาย และสมควรได้รับการรับฟังครับ";
      }
    } else {
      previewBox.classList.add("hidden");
    }
  });
}

function handleCreateVent(event) {
  event.preventDefault();
  const avatar = document.getElementById("selectedAvatar").value;
  const tag = document.getElementById("ventTag").value;
  const content = document.getElementById("ventContent").value.trim();

  if (!content) return;

  // Crisis / Emergency Trigger Detection
  const crisisWords = ["อยากตาย", "ฆ่าตัวตาย", "ไม่อยากอยู่แล้ว", "กรีดแขน", "ทำร้ายตัวเอง", "ลาโลก"];
  const hasCrisis = crisisWords.some(w => content.toLowerCase().includes(w));
  if (hasCrisis) {
    openSosModal();
  }

  const newVent = {
    id: "vent_" + Date.now(),
    avatar: avatar,
    tag: tag,
    content: content,
    hugs: 1,
    loves: 1,
    createdAt: "เมื่อสักครู่",
    userInteractions: { hugged: true, loved: false }
  };

  vents.unshift(newVent);
  saveVentsToStorage();
  renderVents();

  if (currentUser) {
    currentUser.stats.ventsCreated = (currentUser.stats.ventsCreated || 0) + 1;
    saveUsersToStorage();
    checkBadgeUnlocks();
  }

  // Reset form
  document.getElementById("ventContent").value = "";
  document.getElementById("charCount").innerText = "0/300";
  document.getElementById("aiGentlePreview").classList.add("hidden");

  // Celebrate with gentle confetti
  if (window.confetti) {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#10B981', '#6EE7B7', '#FDE68A']
    });
  }

  // Update hero stats
  const statVents = document.getElementById("statVents");
  if (statVents) {
    const cur = parseInt(statVents.innerText) || 340;
    statVents.innerText = `${cur + 1}+`;
  }
}

function filterPosts(filter) {
  activeFilter = filter;
  const chips = document.querySelectorAll("#tagFilters .filter-chip");
  chips.forEach(c => {
    if ((filter === "all" && c.innerText === "ทั้งหมด") || c.innerText.includes(filter)) {
      c.classList.add("active-filter");
      c.classList.remove("bg-slate-100", "text-slate-600");
    } else {
      c.classList.remove("active-filter");
      c.classList.add("bg-slate-100", "text-slate-600");
    }
  });
  renderVents();
}

function renderVents() {
  const container = document.getElementById("ventCardsContainer");
  if (!container) return;

  const filtered = activeFilter === "all" 
    ? vents 
    : vents.filter(v => v.tag.includes(activeFilter) || (activeFilter === "หมดไฟ" && v.tag === "หมดไฟ"));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-3xl border border-dashed border-slate-200">
        <span class="text-3xl">🕊️</span>
        <p class="text-slate-500 text-sm mt-2">ยังไม่มีเรื่องราวในหมวดนี้ เป็นคนแรกที่แบ่งปันได้เลยนะ</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2.5">
            <span class="text-xl">${item.avatar.split(" ")[0]}</span>
            <div>
              <span class="text-xs font-bold text-slate-900 block">${item.avatar}</span>
              <span class="text-[10px] text-slate-400">${item.createdAt}</span>
            </div>
          </div>
          <span class="text-[11px] px-3 py-1 rounded-full font-semibold ${getTagStyle(item.tag)}">
            #${item.tag}
          </span>
        </div>

        <p class="text-sm text-slate-700 leading-relaxed font-body whitespace-pre-line mb-4">
          ${escapeHtml(item.content)}
        </p>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span class="text-[11px] text-slate-400">ส่งต่อกำลังใจ:</span>
        <div class="flex items-center gap-2">
          <!-- Hug Button -->
          <button onclick="handleReact('${item.id}', 'hug')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${item.userInteractions?.hugged ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-50 hover:bg-emerald-50 text-slate-600 border border-slate-200'} transition-all font-heading">
            <span>🫂</span>
            <span id="hugCount_${item.id}">${item.hugs}</span>
          </button>
          
          <!-- Send Love Button -->
          <button onclick="handleReact('${item.id}', 'love')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${item.userInteractions?.loved ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-slate-50 hover:bg-rose-50 text-slate-600 border border-slate-200'} transition-all font-heading">
            <span>💖</span>
            <span id="loveCount_${item.id}">${item.loves}</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function handleReact(id, type) {
  const item = vents.find(v => v.id === id);
  if (!item) return;

  if (!item.userInteractions) {
    item.userInteractions = { hugged: false, loved: false };
  }

  if (type === "hug") {
    if (item.userInteractions.hugged) {
      item.hugs -= 1;
      item.userInteractions.hugged = false;
    } else {
      item.hugs += 1;
      item.userInteractions.hugged = true;
      triggerHeartFloat();
      if (currentUser) {
        currentUser.stats.hugsGiven = (currentUser.stats.hugsGiven || 0) + 1;
        saveUsersToStorage();
        checkBadgeUnlocks();
      }
    }
  } else if (type === "love") {
    if (item.userInteractions.loved) {
      item.loves -= 1;
      item.userInteractions.loved = false;
    } else {
      item.loves += 1;
      item.userInteractions.loved = true;
      triggerHeartFloat();
      if (currentUser) {
        currentUser.stats.hugsGiven = (currentUser.stats.hugsGiven || 0) + 1;
        saveUsersToStorage();
        checkBadgeUnlocks();
      }
    }
  }

  saveVentsToStorage();
  renderVents();
}

function triggerHeartFloat() {
  if (window.confetti) {
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#10B981', '#14B8A6', '#F43F5E']
    });
  }
}

function getTagStyle(tag) {
  if (tag.includes("หมดไฟ")) return "bg-amber-50 text-amber-800 border border-amber-200/80";
  if (tag.includes("เรียน")) return "bg-sky-50 text-sky-800 border border-sky-200/80";
  if (tag.includes("ความสัมพันธ์")) return "bg-rose-50 text-rose-800 border border-rose-200/80";
  if (tag.includes("กำลังใจ")) return "bg-emerald-50 text-emerald-800 border border-emerald-200/80";
  return "bg-teal-50 text-teal-800 border border-teal-200/80";
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ================= SECTION 2: AI COMPANION ("น้องใจดี") =================
const AI_RESPONSES = {
  crisis: {
    triggers: ["อยากตาย", "ฆ่าตัวตาย", "ไม่อยากอยู่", "กรีดแขน", "ทำร้ายตัวเอง", "ทรมานจนไม่อยากตื่น"],
    reply: "พี่เป็นห่วงคุณมากเลยนะครับ... สิ่งที่คุณกำลังแบกไว้อยู่ตอนนี้มันคงหนักและเจ็บปวดมากเกินจะทนไหว แต่ขอร้องอย่าเพิ่งทำร้ายตัวเองนะครับ คุณมีค่ามากจริงๆ\n\nโปรดโทรหา **สายด่วนสุขภาพจิต 1323 (โทรฟรีตลอด 24 ชม.)** หรือ **สมาคมสะมาริตันส์ 02-113-6789** ทันทีนะครับ มีเจ้าหน้าที่ที่พร้อมโอบกอดและรับฟังคุณอยู่ตอนนี้เลยนะ 🤍"
  },
  burnout: {
    triggers: ["หมดไฟ", "เหนื่อย", "ท้อ", "ขี้เกียจ", "ไม่มีแรง", "เบื่อ", "ไม่อยากทำอะไร"],
    replies: [
      "ใจดีเข้าใจเลยครับ... การหมดไฟไม่ได้แปลว่าเราไม่เก่งนะ แต่มันคือสัญญาณเตือนจากร่างกายและใจว่า 'เราใช้พลังงานเกินขีดจำกัดแล้ว'\n\nลองอนุญาตให้ตัวเองได้วางทุกอย่างลงสักชั่วขณะ นอนเหยียดยาว ดื่มน้ำเย็นๆ หรือฟังเพลงโปรดดูไหมครับ? โลกไม่ได้ต้องการให้เราสมบูรณ์แบบตลอดเวลาหรอกนะ",
      "ขอบคุณที่บอกใจดีนะครับ เมื่อก่อนคุณคงพยายามมาอย่างหนักมากจริงๆ จนแบตเตอรี่ในใจเริ่มหมด... ลองให้เวลากับการ 'ไม่ต้องทำอะไรเลย' สักครึ่งชั่วโมงดูนะครับ คุณสมควรได้รับการพักผ่อนอย่างเต็มที่นะ",
      "ช่วงนี้อย่าเพิ่งกดดันตัวเองให้ต้องกลับมาสดใสทันทีนะครับ ใจคนเราก็เหมือนสภาพอากาศ มีวันที่ฝนตก มีวันที่แดดออก พักให้พอ แล้วค่อยๆ ก้าวไปทีละนิด ใจดีอยู่ข้างๆ เสมอนะครับ 🫂"
    ]
  },
  study: {
    triggers: ["เรียน", "สอบ", "เกรด", "งานกลุ่ม", "การบ้าน", "อาจารย์", "เดดไลน์", "โปรเจกต์"],
    replies: [
      "เรื่องเรียนและเดดไลน์ช่วงนี้คงบีบหัวใจมากเลยใช่ไหมครับ? ใจดีอยากชวนคุณหายใจเข้าลึกๆ สัก 3 ครั้งก่อนนะ\n\nจำไว้นะครับ เกรดหรือผลคะแนนเป็นแค่ตัววัดในกระดาษ แต่ไม่ได้นิยามคุณค่าทั้งหมดในชีวิตของคุณนะ ลองแบ่งงานออกเป็นชิ้นเล็กๆ แล้วทำทีละอย่าง แค่ได้เริ่มก้าวเล็กๆ ก็ยอดเยี่ยมมากแล้วครับ!",
      "การที่กังวลเรื่องเรียน แสดงว่าคุณเป็นคนที่ตั้งใจและใส่ใจมาก แต่ถ้าเหนื่อยจนปวดหัว ลองพักสายตาสัก 10 นาที เดินไปดื่มน้ำ ยืดเส้นยืดสาย สมองจะได้ปลอดโปร่งขึ้นนะ สู้ๆ นะครับ คุณทำได้แน่นอน ✌️"
    ]
  },
  lonely: {
    triggers: ["เหงา", "โดดเดี่ยว", "ไม่มีใคร", "เพื่อน", "แฟน", "อกหัก", "ทะเลาะ", "แปลกแยก"],
    replies: [
      "ความรู้สึกโดดเดี่ยวหรือไม่มีใครเข้าใจ มันทำให้ข้างในเคว้งคว้างมากเลยใช่ไหมครับ... แต่อย่างน้อยในวินาทีนี้ ใจดีอยู่ตรงนี้กับคุณนะครับ และยังมีเพื่อนๆ ใน MindSpace ที่พร้อมส่งกอดให้คุณเสมอ\n\nการอยู่คนเดียวไม่ได้หมายความว่าคุณไม่มีใครรักนะ บางครั้งความสัมพันธ์ก็ต้องการเวลาในการปรับจูน คืนนี้กอดหมอนข้างแน่นๆ แล้วบอกตัวเองว่าเรายังมีตัวเราเองที่น่ารักอยู่นะครับ",
      "ใจดีส่งกอดอุ่นๆ ไปให้นะครับ 🫂 เรื่องความสัมพันธ์บางทีก็ซับซ้อนและควบคุมได้ยาก สิ่งที่เราทำได้คือใจดีกับตัวเองให้มากๆ ไม่ต้องโทษตัวเองนะครับ คุณทำดีที่สุดในแบบของคุณแล้ว"
    ]
  },
  cheer: {
    triggers: ["กำลังใจ", "ฮีลใจ", "ขอกำลังใจ", "กอด", "พลังบวก", "รัก"],
    replies: [
      "✨ ส่งพลังใจก้อนโตๆ ให้คุณครับ! ✨\n\nวันนี้ไม่ว่าจะเจออะไรมา ใจดีอยากบอกว่า 'คุณผ่านมันมาได้อีกวันแล้วนะ คุณเก่งมากๆ เลย' อย่าลืมยิ้มให้ตัวเองในกระจก หรือให้รางวัลตัวเองด้วยขนมอร่อยๆ สักชิ้นนะครับ 🍰",
      "คุณคือคนที่มีค่าและคู่ควรกับความสุขที่สุดในโลกนะ! แม้วันนี้จะยังไม่ใช่จุดที่ดีที่สุด แต่ทุกก้าวที่คุณเดินมีความหมายเสมอ ใจดีขอเป็นแฟนคลับเบอร์หนึ่งคอยเชียร์คุณนะครับ! 💖"
    ]
  }
};

function handleSendAiMessage(event) {
  event.preventDefault();
  const input = document.getElementById("aiInput");
  const text = input.value.trim();
  if (!text) return;

  // Add User Message
  appendChatMessage("user", text);
  input.value = "";

  // Show Typing Indicator
  showAiTyping();

  // Generate Empathetic Response
  setTimeout(() => {
    removeAiTyping();
    const reply = generateAiReply(text);
    appendChatMessage("ai", reply);

    // If crisis detected, also trigger modal alert
    if (reply.includes("สายด่วนสุขภาพจิต 1323")) {
      setTimeout(() => {
        openSosModal();
      }, 1200);
    }
  }, 1000);
}

function sendQuickPrompt(text) {
  const input = document.getElementById("aiInput");
  input.value = text;
  handleSendAiMessage(new Event("submit"));
}

function generateAiReply(userText) {
  const lower = userText.toLowerCase();

  // Check crisis first
  if (AI_RESPONSES.crisis.triggers.some(t => lower.includes(t))) {
    return AI_RESPONSES.crisis.reply;
  }

  // Check burnout
  if (AI_RESPONSES.burnout.triggers.some(t => lower.includes(t))) {
    const list = AI_RESPONSES.burnout.replies;
    return list[Math.floor(Math.random() * list.length)];
  }

  // Check study
  if (AI_RESPONSES.study.triggers.some(t => lower.includes(t))) {
    const list = AI_RESPONSES.study.replies;
    return list[Math.floor(Math.random() * list.length)];
  }

  // Check lonely / relationship
  if (AI_RESPONSES.lonely.triggers.some(t => lower.includes(t))) {
    const list = AI_RESPONSES.lonely.replies;
    return list[Math.floor(Math.random() * list.length)];
  }

  // Check cheer
  if (AI_RESPONSES.cheer.triggers.some(t => lower.includes(t))) {
    const list = AI_RESPONSES.cheer.replies;
    return list[Math.floor(Math.random() * list.length)];
  }

  // Default empathetic active listening fallback
  return "ขอบคุณมากเลยนะครับที่เปิดใจเล่าให้ใจดีฟัง... สิ่งที่คุณกำลังรู้สึกอยู่นี้เป็นเรื่องจริงและเข้าใจได้เลยนะ ไม่ว่าเรื่องนั้นจะดูเล็กหรือใหญ่สำหรับคนอื่น แต่สำหรับคุณแล้วมันสำคัญเสมอ\n\nอยากเล่ารายละเอียดเพิ่มเติมอีกไหมครับ หรืออยากให้ใจดีอยู่เงียบๆ เป็นเพื่อนตรงนี้ดีครับ? 😊";
}

function appendChatMessage(sender, message) {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `flex items-start gap-3 ${sender === 'user' ? 'flex-row-reverse' : ''}`;

  if (sender === "user") {
    msgDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold font-heading shrink-0 mt-1 shadow-xs">คุณ</div>
      <div class="bg-emerald-600 text-white font-medium rounded-2xl rounded-tr-xs p-3.5 max-w-md shadow-xs text-sm leading-relaxed font-body">
        ${escapeHtml(message)}
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-sm shrink-0 mt-1 shadow-xs">🌱</div>
      <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-xs p-4 max-w-md shadow-xs text-sm text-slate-800 leading-relaxed font-body whitespace-pre-line">
        ${escapeHtml(message)}
      </div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function showAiTyping() {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const typingDiv = document.createElement("div");
  typingDiv.id = "aiTypingIndicator";
  typingDiv.className = "flex items-start gap-3";
  typingDiv.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-sm shrink-0 mt-1 shadow-xs">🌱</div>
    <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
}

function removeAiTyping() {
  const indicator = document.getElementById("aiTypingIndicator");
  if (indicator) {
    indicator.remove();
  }
}

function resetAiChat() {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  container.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-sm shrink-0 mt-1 shadow-xs">🌱</div>
      <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-xs p-4 max-w-md shadow-xs text-sm text-slate-700 leading-relaxed space-y-2 font-body">
        <p>เริ่มต้นบทสนทนาใหม่แล้วครับ 😊 มีอะไรที่อยากแชร์หรืออยากให้ใจดีรับฟัง พิมพ์บอกได้เสมอเลยนะครับ</p>
      </div>
    </div>
  `;
}

// ================= SECTION 3: DAILY MOOD TRACKER & CHART =================
function selectMood(key, label) {
  currentMoodKey = key;
  document.getElementById("selectedMoodKey").value = key;

  const buttons = document.querySelectorAll("#moodButtons .mood-btn");
  buttons.forEach(b => {
    if (b.innerText.includes(label.slice(0, 2))) {
      b.classList.add("active-mood");
      b.classList.remove("border-slate-100", "bg-white");
    } else {
      b.classList.remove("active-mood");
      b.classList.add("border-slate-100", "bg-white");
    }
  });
}

function toggleFactor(btn, factor) {
  if (selectedFactors.includes(factor)) {
    selectedFactors = selectedFactors.filter(f => f !== factor);
    btn.classList.remove("active-factor");
  } else {
    selectedFactors.push(factor);
    btn.classList.add("active-factor");
  }
}

function handleSaveMood() {
  const note = document.getElementById("moodNote").value;
  const moodScores = {
    great: 5,
    good: 4,
    neutral: 3,
    tired: 2,
    stressed: 1
  };

  const newEntry = {
    mood: currentMoodKey,
    score: moodScores[currentMoodKey] || 3,
    factors: [...selectedFactors],
    note: note,
    date: new Date().toLocaleDateString("th-TH", { weekday: "short", day: "numeric", month: "short" })
  };

  // Save to history in localStorage
  let history = JSON.parse(localStorage.getItem("mindspace_mood_history") || "[]");
  history.push(newEntry);
  if (history.length > 7) history.shift();
  localStorage.setItem("mindspace_mood_history", JSON.stringify(history));

  // Sync to Current User Personal Stats
  if (currentUser) {
    currentUser.stats.moodLogsCount = (currentUser.stats.moodLogsCount || 0) + 1;
    currentUser.stats.streakDays = (currentUser.stats.streakDays || 1) + 1;
    if (!currentUser.moodHistory) currentUser.moodHistory = [];
    currentUser.moodHistory.push({
      day: newEntry.date || "วันนี้",
      mood: currentMoodKey,
      score: moodScores[currentMoodKey] || 3,
      factors: [...selectedFactors],
      note: note || "เช็กอินประจำวัน"
    });
    saveUsersToStorage();
    checkBadgeUnlocks();
    updateCheckinGreetingUI();
    updateNavAuthUI();
  }

  // Update chart
  updateMoodChart();

  // Update AI advice summary based on score
  updateAiMoodSummary(currentMoodKey, selectedFactors);

  if (window.confetti) {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 }
    });
  }

  alert("บันทึกอารมณ์เรียบร้อยแล้วครับ ขอบคุณที่ดูแลและสังเกตตัวเองนะ 🌱");
  document.getElementById("moodNote").value = "";
}

function initMoodChart() {
  const ctx = document.getElementById("moodChart");
  if (!ctx) return;

  if (moodChartInstance) {
    moodChartInstance.destroy();
  }

  let defaultLabels = ["จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "วันนี้"];
  let defaultData = [4, 3, 2, 4, 3, 4, 4]; // default gentle curve

  // If currentUser has personal history, display real personal curve
  if (currentUser && currentUser.moodHistory && currentUser.moodHistory.length >= 3) {
    const recent = currentUser.moodHistory.slice(-7);
    defaultLabels = recent.map(r => r.day || "บันทึก");
    defaultData = recent.map(r => r.score);
  }

  moodChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: defaultLabels,
      datasets: [{
        label: "ระดับสุขภาวะใจ (1 = เครียดมาก, 5 = สดใส)",
        data: defaultData,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.12)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "#0f172a",
          titleColor: "#ffffff",
          bodyColor: "#34d399",
          callbacks: {
            label: function(context) {
              const val = context.raw;
              const names = {
                5: "🥳 สดใสมีพลัง (5/5)",
                4: "😊 สบายใจสงบ (4/5)",
                3: "😐 เฉยๆ ทั่วไป (3/5)",
                2: "😔 เหนื่อยล้า (2/5)",
                1: "😫 เครียด/กังวล (1/5)"
              };
              return names[val] || `${val}/5`;
            }
          }
        }
      },
      scales: {
        y: {
          min: 1,
          max: 5,
          ticks: {
            color: "#64748b",
            stepSize: 1,
            callback: function(val) {
              const labels = { 1: "😫 เครียด", 2: "😔 เหนื่อย", 3: "😐 เฉยๆ", 4: "😊 สบายใจ", 5: "🥳 สดใส" };
              return labels[val] || "";
            }
          },
          grid: {
            color: "#f1f5f9"
          }
        },
        x: {
          ticks: {
            color: "#64748b"
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

function updateMoodChart() {
  if (!moodChartInstance) return;
  const moodScores = { great: 5, good: 4, neutral: 3, tired: 2, stressed: 1 };
  const currentVal = moodScores[currentMoodKey] || 3;

  const dataset = moodChartInstance.data.datasets[0].data;
  dataset[dataset.length - 1] = currentVal;
  moodChartInstance.update();
}

function updateAiMoodSummary(moodKey, factors) {
  const el = document.getElementById("aiMoodSummary");
  if (!el) return;

  const factorText = factors.length > 0 ? `โดยเฉพาะในเรื่อง ${factors.join(", ")}` : "";

  if (moodKey === "stressed" || moodKey === "tired") {
    el.innerText = `"AI วิเคราะห์: วันนี้คุณมีระดับความตึงเครียดหรือเหนื่อยล้าค่อนข้างสูง ${factorText} ขอแนะนำให้คืนนี้หยุดการทำงานก่อนเวลา 1 ชั่วโมง ลองอาบน้ำอุ่น ฝึกหายใจแบบ 4-7-8 ในแพลตฟอร์ม และนอนพักให้เพียงพอนะครับ หากรู้สึกไม่ไหว สามารถกดคุยกับน้องใจดีหรือติดต่อสายด่วนได้เสมอ"`;
  } else if (moodKey === "great" || moodKey === "good") {
    el.innerText = `"AI วิเคราะห์: สภาพจิตใจของคุณวันนี้อยู่ในเกณฑ์ที่ดีและมีความสงบ ${factorText} ถือเป็นพลังบวกที่ดีมาก หากมีเวลา ลองส่งต่อกำลังใจให้เพื่อนๆ บนกำแพงฮีลใจดูนะครับ ความสุขจะยิ่งทวีคูณเมื่อเราแบ่งปัน!"`;
  } else {
    el.innerText = `"AI วิเคราะห์: วันนี้เป็นวันที่ราบเรียบและมีความเป็นกลาง เป็นโอกาสที่ดีในการทำกิจกรรมผ่อนคลายง่ายๆ และสังเกตลมหายใจของตนเองครับ"`;
  }
}

// ================= SECTION 4: BREATHE & CALM (4-7-8) =================
function toggleBreathingGuide() {
  const btnText = document.getElementById("breatheBtnText");
  const btnIcon = document.getElementById("breatheBtnIcon");

  if (isBreathingActive) {
    // Stop
    clearInterval(breathingInterval);
    isBreathingActive = false;
    btnText.innerText = "เริ่มฝึกหายใจ (Start)";
    if (window.lucide) {
      btnIcon.setAttribute("data-lucide", "play");
      window.lucide.createIcons();
    }
    resetBreathingUI();
  } else {
    // Start
    isBreathingActive = true;
    btnText.innerText = "หยุดการฝึก (Stop)";
    if (window.lucide) {
      btnIcon.setAttribute("data-lucide", "square");
      window.lucide.createIcons();
    }
    runBreathingCycle();
  }
}

function runBreathingCycle() {
  const actionText = document.getElementById("breatheActionText");
  const countdownEl = document.getElementById("breatheCountdown");
  const subText = document.getElementById("breatheSubText");
  const coreCircle = document.getElementById("breatheCircleCore");

  let phase = "inhale"; // inhale (4s) -> hold (7s) -> exhale (8s)
  let count = 4;

  const updateUI = () => {
    countdownEl.innerText = count;

    if (phase === "inhale") {
      actionText.innerText = "หายใจเข้า...";
      subText.innerText = "สูดลมหายใจช้าๆ ลึกๆ ทางจมูก";
      coreCircle.className = "relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-200 transition-all duration-1000 transform scale-125";
    } else if (phase === "hold") {
      actionText.innerText = "กลั้นหายใจ...";
      subText.innerText = "นิ่ง สงบ สัมผัสความผ่อนคลาย";
      coreCircle.className = "relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-teal-500 to-sky-400 text-white flex flex-col items-center justify-center shadow-xl shadow-teal-200 transition-all duration-1000 transform scale-125";
    } else if (phase === "exhale") {
      actionText.innerText = "ผ่อนลมหายใจออก...";
      subText.innerText = "ค่อยๆ ปล่อยลมออกทางปากช้าๆ";
      coreCircle.className = "relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-400 text-white flex flex-col items-center justify-center shadow-xl shadow-sky-200 transition-all duration-1000 transform scale-95";
    }
  };

  updateUI();

  breathingInterval = setInterval(() => {
    count--;

    if (count <= 0) {
      if (phase === "inhale") {
        phase = "hold";
        count = 7;
      } else if (phase === "hold") {
        phase = "exhale";
        count = 8;
      } else if (phase === "exhale") {
        phase = "inhale";
        count = 4;
        if (currentUser) {
          currentUser.stats.breatheSessions = (currentUser.stats.breatheSessions || 0) + 1;
          currentUser.stats.breatheMinutes = Math.max(1, Math.round(currentUser.stats.breatheSessions * 19 / 60));
          saveUsersToStorage();
          checkBadgeUnlocks();
        }
      }
    }

    updateUI();
  }, 1000);
}

function resetBreathingUI() {
  document.getElementById("breatheActionText").innerText = "พร้อมไหม?";
  document.getElementById("breatheCountdown").innerText = "4";
  document.getElementById("breatheSubText").innerText = "คลิกเพื่อเริ่มฝึก";
  const coreCircle = document.getElementById("breatheCircleCore");
  coreCircle.className = "relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-200 transition-all duration-1000 transform scale-100";
}

// Ambient Sound Synthesizer (Zero external file dependencies)
function toggleCalmSound() {
  const label = document.getElementById("soundLabel");
  const icon = document.getElementById("soundIcon");

  if (isAudioPlaying) {
    if (gainNode) {
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    }
    setTimeout(() => {
      if (audioContext) audioContext.suspend();
    }, 500);
    isAudioPlaying = false;
    label.innerText = "เปิดเสียงคลื่นทะเลบำบัด";
    if (window.lucide) {
      icon.setAttribute("data-lucide", "volume-x");
      window.lucide.createIcons();
    }
  } else {
    startCalmAmbientSound();
    isAudioPlaying = true;
    label.innerText = "ปิดเสียงบำบัด";
    if (window.lucide) {
      icon.setAttribute("data-lucide", "volume-2");
      window.lucide.createIcons();
    }
  }
}

function startCalmAmbientSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) {
      audioContext = new AudioContext();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Generate soothing ocean pink-noise buffer
    const bufferSize = audioContext.sampleRate * 2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2) * 0.08;
    }

    noiseNode = audioContext.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Filter to warm low-pass sound
    const filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 350;

    gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.15, audioContext.currentTime + 1.5);

    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    noiseNode.start(0);
  } catch (err) {
    console.warn("Web Audio not supported or blocked by browser policy:", err);
  }
}

// ================= SOUL POUR ROOM (ห้องเทความในใจ) CONTROLS =================
function switchBarTable(table) {
  activeLoungeTable = table;
  const tabs = document.querySelectorAll("#loungeTableTabs .bar-tab");
  tabs.forEach(t => {
    if ((table === "all" && (t.innerText.includes("โต๊ะเทใจรวม") || t.innerText.includes("โต๊ะบาร์รวม"))) ||
        (table === "burnout" && t.innerText.includes("คนหมดไฟ")) ||
        (table === "midnight" && t.innerText.includes("ดึกดื่น")) ||
        (table === "heartbreak" && t.innerText.includes("พักใจ"))) {
      t.classList.add("active-bar-tab");
      t.classList.remove("bg-white", "text-slate-600", "border-slate-200");
    } else {
      t.classList.remove("active-bar-tab");
      t.classList.add("bg-white", "text-slate-600", "border-slate-200");
    }
  });
  renderLoungeMessages();
}

function selectLoungeDrink(drinkName, tagDesc) {
  selectedLoungeDrink = drinkName;
  const badge = document.getElementById("loungeCurrentDrinkBadge");
  if (badge) {
    const parts = drinkName.split(" ");
    badge.innerText = `${parts[0]} ${parts[1] || ''}`;
  }

  const buttons = document.querySelectorAll("#drinkMenuChoices .drink-choice");
  buttons.forEach(b => {
    if (b.innerText.includes(drinkName.split(" ")[1])) {
      b.classList.add("active-drink");
      b.classList.remove("border-slate-200", "bg-white");
      let check = b.querySelector(".drink-check-icon");
      if (!check) {
        const span = document.createElement("span");
        span.className = "drink-check-icon text-emerald-600 font-bold text-xs";
        span.innerText = "✓";
        b.appendChild(span);
      }
    } else {
      b.classList.remove("active-drink");
      b.classList.add("border-slate-200", "bg-white");
      let check = b.querySelector(".drink-check-icon") || b.querySelector(".text-[#d99b06]");
      if (check) check.remove();
    }
  });
}

function handleSendLoungeMessage(event) {
  event.preventDefault();
  const input = document.getElementById("loungeMsgInput");
  const content = input.value.trim();
  if (!content) return;

  const isDrinkOnMe = document.getElementById("treatAllCheckbox").checked;

  const userAvatars = ["🐱", "🐰", "🦉", "🌻", "🦊", "🐶"];
  const randomAvatar = userAvatars[Math.floor(Math.random() * userAvatars.length)];

  const newMsg = {
    id: "lounge_" + Date.now(),
    user: "เพื่อนร่วมทาง",
    avatar: randomAvatar,
    drink: selectedLoungeDrink,
    table: activeLoungeTable === "all" ? "all" : activeLoungeTable,
    content: content,
    treatedCount: isDrinkOnMe ? 12 : 1,
    isDrinkOnMe: isDrinkOnMe,
    time: "เมื่อสักครู่"
  };

  loungeMessages.unshift(newMsg);
  localStorage.setItem("mindspace_lounge_messages", JSON.stringify(loungeMessages));
  renderLoungeMessages();

  if (isDrinkOnMe && currentUser) {
    currentUser.stats.drinksTreated = (currentUser.stats.drinksTreated || 0) + 1;
    saveUsersToStorage();
    checkBadgeUnlocks();
  }

  input.value = "";
  document.getElementById("treatAllCheckbox").checked = false;

  // Clinking sound effect & toast
  playClinkSound();
  if (isDrinkOnMe) {
    showDrinkToast(`🌟 คุณส่งเครื่องดื่มฮีลใจเลี้ยงทุกคนในห้องแล้ว! ขอบคุณที่แบ่งปันความอบอุ่นนะ ☕✨`);
    if (window.confetti) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#10B981', '#14B8A6', '#F59E0B']
      });
    }
  } else {
    showDrinkToast(`☕ เสิร์ฟ ${selectedLoungeDrink} ไว้บนโต๊ะพักใจแล้วนะ`);
  }
}

function handleTreatDrink(messageId) {
  const msg = loungeMessages.find(m => m.id === messageId);
  if (!msg) return;

  msg.treatedCount = (msg.treatedCount || 0) + 1;
  totalDrinksTreatedCount += 1;
  const totalEl = document.getElementById("totalDrinksTreated");
  if (totalEl) totalEl.innerText = `${totalDrinksTreatedCount} แก้ว`;

  if (currentUser) {
    currentUser.stats.drinksTreated = (currentUser.stats.drinksTreated || 0) + 1;
    saveUsersToStorage();
    checkBadgeUnlocks();
  }

  localStorage.setItem("mindspace_lounge_messages", JSON.stringify(loungeMessages));
  renderLoungeMessages();

  // Glass clinking audio & feedback
  playClinkSound();
  showDrinkToast(`☕ คุณได้ส่งแก้วกำลังใจให้ "${msg.user}" เรียบร้อยแล้ว 💖`);

  if (window.confetti) {
    confetti({
      particleCount: 25,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#10B981', '#F59E0B', '#EC4899']
    });
  }
}

function showDrinkToast(text) {
  const toast = document.getElementById("drinkToast");
  const toastText = document.getElementById("drinkToastText");
  if (!toast || !toastText) return;

  toastText.innerText = text;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

function renderLoungeMessages() {
  const container = document.getElementById("loungeMessagesStream");
  if (!container) return;

  const filtered = activeLoungeTable === "all"
    ? loungeMessages
    : loungeMessages.filter(m => m.table === activeLoungeTable || m.table === "all");

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <span class="text-3xl block mb-2">🕯️</span>
        <p class="text-sm">มุมนี้ยังว่างอยู่ นั่งลงเป็นคนแรกแล้วเทความในใจได้เลยนะ</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="p-4 rounded-3xl ${item.isDrinkOnMe ? 'bg-gradient-to-r from-amber-50/90 via-emerald-50/30 to-white border border-amber-300 shadow-xs' : 'bg-white border border-slate-200/90 shadow-2xs'} hover:border-emerald-300 transition-all flex flex-col justify-between">
      <div class="flex items-start justify-between gap-3 mb-2.5">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-lg shrink-0">
            ${item.avatar || '☕'}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-xs text-slate-900 font-heading">${escapeHtml(item.user)}</span>
              ${item.isDrinkOnMe ? '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-amber-950 shadow-xs font-heading">🌟 ส่งใจให้ทุกคน</span>' : ''}
            </div>
            <span class="text-[10px] text-slate-400 font-body">${item.time}</span>
          </div>
        </div>

        <!-- Drink Badge -->
        <span class="text-[11px] px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 font-medium flex items-center gap-1 shrink-0 font-body">
          ${item.drink}
        </span>
      </div>

      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-body whitespace-pre-line mb-3">
        ${escapeHtml(item.content)}
      </p>

      <div class="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-body">
        <span class="text-[11px] text-slate-500">
          ☕ ส่งกำลังใจแล้ว: <strong class="text-amber-800 font-bold font-heading">${item.treatedCount || 0} แก้ว</strong>
        </span>

        <button onclick="handleTreatDrink('${item.id}')" class="px-3.5 py-1.5 rounded-full bg-amber-50 hover:bg-emerald-600 text-amber-900 hover:text-white border border-amber-300 hover:border-emerald-600 font-bold text-xs transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs font-heading">
          <span>☕ ส่งแก้วนี้แทนใจ</span>
        </button>
      </div>
    </div>
  `).join("");
}

// Procedural Glass Clinking Sound Synthesizer
function playClinkSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = audioContext || new AudioContext();
    if (ctx.state === "suspended") ctx.resume();

    // High harmonic bell/glass resonance
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {}
}

// Procedural Cozy Bar Ambient Lo-Fi Jazz Synthesizer
function toggleLoungeAmbientMusic() {
  const btnLabel = document.getElementById("loungeMusicLabel");
  const btnIcon = document.getElementById("loungeMusicIcon");

  if (isLoungeMusicPlaying) {
    if (loungeMusicInterval) clearInterval(loungeMusicInterval);
    isLoungeMusicPlaying = false;
    btnLabel.innerText = "เปิดดนตรีบาร์ Lo-Fi อบอุ่น";
    if (window.lucide) {
      btnIcon.setAttribute("data-lucide", "music");
      window.lucide.createIcons();
    }
  } else {
    isLoungeMusicPlaying = true;
    btnLabel.innerText = "หยุดดนตรีบาร์";
    if (window.lucide) {
      btnIcon.setAttribute("data-lucide", "volume-x");
      window.lucide.createIcons();
    }
    startLoungeLoFiChords();
  }
}

function startLoungeLoFiChords() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();

  // Cozy Jazzy chord progressions (Fmaj7, Dm9, Gm7, C7b9)
  const chords = [
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [146.83, 220.00, 261.63, 329.63], // Dm9
    [196.00, 233.08, 293.66, 349.23], // Gm7
    [130.81, 196.00, 246.94, 311.13]  // C7b9
  ];

  let chordIndex = 0;

  const playChord = () => {
    if (!isLoungeMusicPlaying) return;
    const currentNotes = chords[chordIndex];
    chordIndex = (chordIndex + 1) % chords.length;

    currentNotes.forEach((freq, i) => {
      setTimeout(() => {
        if (!isLoungeMusicPlaying) return;
        try {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          const filter = audioContext.createBiquadFilter();

          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, audioContext.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(800, audioContext.currentTime);

          gain.gain.setValueAtTime(0.001, audioContext.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, audioContext.currentTime + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 3.2);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(audioContext.destination);

          osc.start();
          osc.stop(audioContext.currentTime + 3.3);
        } catch (e) {}
      }, i * 60);
    });
  };

  playChord();
  loungeMusicInterval = setInterval(playChord, 3500);
}

// ================= MODAL CONTROLS =================
function openSosModal() {
  document.getElementById("sosModal").classList.remove("hidden");
}

function closeSosModal() {
  document.getElementById("sosModal").classList.add("hidden");
}

function openAiDocModal() {
  document.getElementById("aiDocModal").classList.remove("hidden");
}

function closeAiDocModal() {
  document.getElementById("aiDocModal").classList.add("hidden");
}

// ================= USER AUTH & PERSONAL STATS SYSTEM =================
function initAuthSystem() {
  const storedUsers = localStorage.getItem("mindspace_users");
  if (storedUsers) {
    try {
      usersList = JSON.parse(storedUsers);
    } catch (e) {
      usersList = JSON.parse(JSON.stringify(DEFAULT_USERS));
    }
  } else {
    usersList = JSON.parse(JSON.stringify(DEFAULT_USERS));
    localStorage.setItem("mindspace_users", JSON.stringify(usersList));
  }

  const currentUserId = localStorage.getItem("mindspace_current_user_id");
  if (currentUserId) {
    currentUser = usersList.find(u => u.id === currentUserId) || usersList[0];
  } else {
    // Default logged in to Somjeed for smooth out-of-the-box evaluator testing
    currentUser = usersList[0];
    localStorage.setItem("mindspace_current_user_id", currentUser.id);
  }

  updateNavAuthUI();
  updateCheckinGreetingUI();
}

function saveUsersToStorage() {
  localStorage.setItem("mindspace_users", JSON.stringify(usersList));
  if (currentUser) {
    localStorage.setItem("mindspace_current_user_id", currentUser.id);
  } else {
    localStorage.removeItem("mindspace_current_user_id");
  }
}

function updateNavAuthUI() {
  const navContainer = document.getElementById("navAuthContainer");
  const mobileContainer = document.getElementById("mobileAuthContainer");

  if (currentUser) {
    // Desktop button: Avatar + Name + Stats
    if (navContainer) {
      navContainer.innerHTML = `
        <button onclick="openProfileStatsModal()" class="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 hover:bg-emerald-100/90 text-emerald-950 flex items-center gap-2 transition-all shadow-2xs font-heading">
          <span class="text-base">${currentUser.avatarEmoji || '🐱'}</span>
          <div class="text-left hidden sm:block">
            <span class="text-xs font-bold block leading-tight text-slate-800">${escapeHtml(currentUser.displayName)}</span>
            <span class="text-[10px] text-emerald-700 block leading-tight font-body">สถิติสะสม ${currentUser.stats.moodLogsCount} วัน</span>
          </div>
          <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-emerald-600"></i>
        </button>
      `;
    }

    // Mobile button
    if (mobileContainer) {
      mobileContainer.innerHTML = `
        <div class="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">${currentUser.avatarEmoji || '🐱'}</span>
            <div>
              <div class="text-sm font-bold text-slate-900 font-heading">${escapeHtml(currentUser.displayName)}</div>
              <div class="text-xs text-emerald-700 font-body">เช็กอินแล้ว ${currentUser.stats.moodLogsCount} วัน • ปลดล็อก ${currentUser.badges.filter(b => b.unlocked).length} เหรียญ</div>
            </div>
          </div>
          <button onclick="openProfileStatsModal()" class="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold font-heading shadow-xs">
            ดูสถิติ
          </button>
        </div>
      `;
    }
  } else {
    // Guest mode
    if (navContainer) {
      navContainer.innerHTML = `
        <button onclick="openAuthModal()" class="px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1.5 transition-all font-heading shadow-2xs">
          <i data-lucide="log-in" class="w-3.5 h-3.5 text-emerald-600"></i>
          <span>เข้าสู่ระบบ / สถิติ</span>
        </button>
      `;
    }

    if (mobileContainer) {
      mobileContainer.innerHTML = `
        <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div>
            <div class="text-sm font-bold text-slate-800 font-heading">โหมดผู้เยี่ยมชม</div>
            <div class="text-xs text-slate-500 font-body">เข้าสู่ระบบเพื่อจำสถิติสุขภาพจิตของคุณ</div>
          </div>
          <button onclick="openAuthModal()" class="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold font-heading">
            เข้าสู่ระบบ
          </button>
        </div>
      `;
    }
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateCheckinGreetingUI() {
  const greetingEl = document.getElementById("userCheckinGreeting");
  const badgeEl = document.getElementById("userMoodLogCountBadge");

  if (currentUser) {
    if (greetingEl) {
      greetingEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span>${currentUser.avatarEmoji || '🌱'}</span>
          <span class="text-slate-700">กำลังบันทึกในบัญชี: <strong class="text-emerald-800 font-bold font-heading">${escapeHtml(currentUser.displayName)}</strong></span>
        </div>
        <button onclick="openProfileStatsModal()" class="text-emerald-700 hover:text-emerald-900 font-bold underline font-heading text-xs">
          ดูสถิติของคุณ →
        </button>
      `;
    }
    if (badgeEl) {
      badgeEl.innerText = `🌱 บันทึกสะสม ${currentUser.stats.moodLogsCount} วัน (ต่อเนื่อง ${currentUser.stats.streakDays} วัน)`;
    }
  } else {
    if (greetingEl) {
      greetingEl.innerHTML = `
        <span class="text-slate-500">👤 โหมดผู้เยี่ยมชม (สถิติยังไม่ผูกกับบัญชี)</span>
        <button onclick="openAuthModal()" class="text-emerald-700 hover:text-emerald-900 font-bold underline font-heading text-xs">
          เข้าสู่ระบบเพื่อจำสถิติ →
        </button>
      `;
    }
    if (badgeEl) {
      badgeEl.innerText = `🌱 โหมดผู้เยี่ยมชม`;
    }
  }
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("authTabLogin");
  const tabReg = document.getElementById("authTabRegister");
  const panelLogin = document.getElementById("authLoginPanel");
  const panelReg = document.getElementById("authRegisterPanel");

  if (tab === "login") {
    tabLogin.classList.add("active-auth-tab");
    tabLogin.classList.remove("bg-white", "text-slate-600", "border");
    tabReg.classList.remove("active-auth-tab");
    tabReg.classList.add("bg-white", "text-slate-600", "border");
    panelLogin.classList.remove("hidden");
    panelReg.classList.add("hidden");
  } else {
    tabReg.classList.add("active-auth-tab");
    tabReg.classList.remove("bg-white", "text-slate-600", "border");
    tabLogin.classList.remove("active-auth-tab");
    tabLogin.classList.add("bg-white", "text-slate-600", "border");
    panelReg.classList.remove("hidden");
    panelLogin.classList.add("hidden");
  }
}

function openAuthModal() {
  document.getElementById("authModal").classList.remove("hidden");
  switchAuthTab("login");
}

function closeAuthModal() {
  document.getElementById("authModal").classList.add("hidden");
}

function loginDemoAccount(username) {
  const target = usersList.find(u => u.username === username);
  if (!target) return;

  currentUser = target;
  saveUsersToStorage();
  updateNavAuthUI();
  updateCheckinGreetingUI();
  initMoodChart();
  closeAuthModal();

  showDrinkToast(`✨ ยินดีต้อนรับกลับครับคุณ "${currentUser.displayName}" เข้าสู่ระบบเรียบร้อย`);
  if (window.confetti) {
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 }, colors: ['#10B981', '#14B8A6', '#F59E0B'] });
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value.trim().toLowerCase();
  if (!username) return;

  let user = usersList.find(u => u.username.toLowerCase() === username || u.displayName.toLowerCase() === username);

  if (!user) {
    // If not found, create an account on the fly for ease of use
    user = {
      id: "user_" + Date.now(),
      username: username.replace(/\s+/g, '_'),
      displayName: username,
      avatar: "🐱 นามแฝงปลอดภัย",
      avatarEmoji: "🐱",
      role: "สมาชิกทั่วไป",
      joinedAt: "วันนี้",
      stats: {
        moodLogsCount: 1,
        streakDays: 1,
        ventsCreated: 0,
        hugsGiven: 0,
        drinksTreated: 0,
        breatheSessions: 0,
        breatheMinutes: 0
      },
      moodHistory: [
        { day: "วันนี้", mood: "good", score: 4, factors: ["การเริ่มต้นใหม่"], note: "เริ่มต้นเข้าใช้งาน MindSpace" }
      ],
      badges: JSON.parse(JSON.stringify(DEFAULT_USERS[0].badges.map(b => ({ ...b, unlocked: b.id === 'badge_first_mood' }))))
    };
    usersList.push(user);
  }

  currentUser = user;
  saveUsersToStorage();
  updateNavAuthUI();
  updateCheckinGreetingUI();
  initMoodChart();
  closeAuthModal();

  showDrinkToast(`🌟 เข้าสู่ระบบในชื่อ "${currentUser.displayName}" เรียบร้อยแล้ว`);
  if (window.confetti) {
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 }, colors: ['#10B981', '#14B8A6', '#F59E0B'] });
  }
}

let currentRegAvatar = "🐱 น้องแมว";
function selectRegAvatar(avatar) {
  currentRegAvatar = avatar;
  document.getElementById("regSelectedAvatar").value = avatar;
  const buttons = document.querySelectorAll("#regAvatarSelector .reg-avatar-opt");
  buttons.forEach(b => {
    if (b.innerText.includes(avatar.split(" ")[0])) {
      b.classList.add("active-avatar");
      b.classList.remove("border-slate-200");
    } else {
      b.classList.remove("active-avatar");
      b.classList.add("border-slate-200");
    }
  });
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const displayName = document.getElementById("regDisplayName").value.trim();
  const username = document.getElementById("regUsername").value.trim().toLowerCase();

  if (!displayName || !username) return;

  const existing = usersList.find(u => u.username.toLowerCase() === username);
  if (existing) {
    alert("ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว กรุณาเลือกชื่ออื่น หรือเข้าสู่ระบบด้วยชื่อนี้ครับ");
    return;
  }

  const emoji = currentRegAvatar.split(" ")[0] || "🌱";

  const newUser = {
    id: "user_" + Date.now(),
    username: username,
    displayName: displayName,
    avatar: currentRegAvatar,
    avatarEmoji: emoji,
    role: "สมาชิกใหม่",
    joinedAt: "วันนี้",
    stats: {
      moodLogsCount: 1,
      streakDays: 1,
      ventsCreated: 0,
      hugsGiven: 0,
      drinksTreated: 0,
      breatheSessions: 0,
      breatheMinutes: 0
    },
    moodHistory: [
      { day: "วันนี้", mood: "good", score: 4, factors: ["การเริ่มต้นใหม่"], note: "สร้างบัญชีผู้ใช้ใน MindSpace" }
    ],
    badges: JSON.parse(JSON.stringify(DEFAULT_USERS[0].badges.map(b => ({ ...b, unlocked: b.id === 'badge_first_mood' }))))
  };

  usersList.push(newUser);
  currentUser = newUser;
  saveUsersToStorage();
  updateNavAuthUI();
  updateCheckinGreetingUI();
  initMoodChart();
  closeAuthModal();

  showDrinkToast(`🎉 สร้างบัญชีใหม่และเริ่มบันทึกสถิติให้คุณ "${displayName}" แล้ว`);
  if (window.confetti) {
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.5 }, colors: ['#10B981', '#14B8A6', '#F59E0B'] });
  }
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem("mindspace_current_user_id");
  updateNavAuthUI();
  updateCheckinGreetingUI();
  closeProfileStatsModal();
  initMoodChart();
  showDrinkToast("👋 ออกจากระบบเรียบร้อยแล้ว (สลับเข้าสู่โหมดผู้เยี่ยมชม)");
}

function openProfileStatsModal() {
  if (!currentUser) {
    openAuthModal();
    return;
  }

  // Populate user profile info
  const avatarEl = document.getElementById("profileAvatarDisplay");
  const nameEl = document.getElementById("profileNameDisplay");
  const roleEl = document.getElementById("profileRoleBadge");
  const userEl = document.getElementById("profileUsernameDisplay");

  if (avatarEl) avatarEl.innerText = currentUser.avatarEmoji || "🐱";
  if (nameEl) nameEl.innerText = currentUser.displayName;
  if (roleEl) roleEl.innerText = currentUser.role || "สมาชิกสายดูแลใจ";
  if (userEl) userEl.innerText = `@${currentUser.username} • เข้าร่วมเมื่อ ${currentUser.joinedAt || '28 ต.ค. 2026'}`;

  // Populate 4 Stats
  const moodCountEl = document.getElementById("userStatMoodCount");
  const streakEl = document.getElementById("userStatStreak");
  const hugsEl = document.getElementById("userStatHugsGiven");
  const drinksEl = document.getElementById("userStatDrinksTreated");
  const minsEl = document.getElementById("userStatBreatheMins");
  const sessionsEl = document.getElementById("userStatBreatheSessions");

  if (moodCountEl) moodCountEl.innerText = `${currentUser.stats.moodLogsCount || 0} วัน`;
  if (streakEl) streakEl.innerText = `🔥 ต่อเนื่อง ${currentUser.stats.streakDays || 1} วัน`;
  if (hugsEl) hugsEl.innerText = `${currentUser.stats.hugsGiven || 0} ครั้ง`;
  if (drinksEl) drinksEl.innerText = `${currentUser.stats.drinksTreated || 0} แก้ว`;
  if (minsEl) minsEl.innerText = `${currentUser.stats.breatheMinutes || 0} นาที`;
  if (sessionsEl) sessionsEl.innerText = `สะสม ${currentUser.stats.breatheSessions || 0} ครั้ง`;

  // Render Badges
  const badgesContainer = document.getElementById("userBadgesContainer");
  const badgesSummary = document.getElementById("unlockedBadgesSummary");
  if (badgesContainer && currentUser.badges) {
    const unlockedCount = currentUser.badges.filter(b => b.unlocked).length;
    if (badgesSummary) badgesSummary.innerText = `ปลดล็อกแล้ว ${unlockedCount}/${currentUser.badges.length}`;

    badgesContainer.innerHTML = currentUser.badges.map(b => `
      <div class="p-3 rounded-2xl border ${b.unlocked ? 'badge-unlocked border-emerald-300' : 'badge-locked border-slate-200'} flex items-center justify-between gap-3 badge-card">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">${b.icon || '🌱'}</span>
          <div>
            <div class="text-xs font-bold text-slate-900 font-heading flex items-center gap-1.5">
              <span>${b.name}</span>
              ${b.unlocked ? '<span class="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full font-bold">สำเร็จ</span>' : ''}
            </div>
            <div class="text-[10px] text-slate-500 font-body">${b.desc}</div>
          </div>
        </div>
        <span class="text-xs font-bold ${b.unlocked ? 'text-emerald-600' : 'text-slate-400'}">${b.unlocked ? '✓' : '🔒'}</span>
      </div>
    `).join("");
  }

  // Render Recent Mood Logs History
  const historyContainer = document.getElementById("userMoodHistoryList");
  if (historyContainer && currentUser.moodHistory) {
    if (currentUser.moodHistory.length === 0) {
      historyContainer.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">ยังไม่มีบันทึกอารมณ์ในบัญชีนี้</p>`;
    } else {
      const reversed = [...currentUser.moodHistory].reverse().slice(0, 5);
      const moodEmojis = { great: "🥳 สดใส", good: "😊 สบายใจ", neutral: "😐 เฉยๆ", tired: "😔 เหนื่อยล้า", stressed: "😫 เครียด" };

      historyContainer.innerHTML = reversed.map(item => `
        <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-lg">${item.score >= 4 ? '😊' : (item.score === 3 ? '😐' : '😔')}</span>
            <div>
              <div class="font-bold text-slate-800 font-heading">
                ${moodEmojis[item.mood] || item.mood} 
                ${item.factors && item.factors.length > 0 ? `<span class="text-[10px] font-normal text-slate-500 font-body">(${item.factors.join(', ')})</span>` : ''}
              </div>
              <p class="text-[11px] text-slate-600 font-body">${escapeHtml(item.note || 'ไม่มีโน้ต')}</p>
            </div>
          </div>
          <span class="text-[10px] font-semibold text-slate-400 shrink-0 font-heading">${item.day || 'วันนี้'}</span>
        </div>
      `).join("");
    }
  }

  document.getElementById("profileStatsModal").classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeProfileStatsModal() {
  document.getElementById("profileStatsModal").classList.add("hidden");
}

function checkBadgeUnlocks() {
  if (!currentUser || !currentUser.badges) return;

  let unlockedNew = false;
  currentUser.badges.forEach(b => {
    if (!b.unlocked) {
      if (b.id === "badge_first_mood" && currentUser.stats.moodLogsCount >= 1) {
        b.unlocked = true;
        unlockedNew = b;
      } else if (b.id === "badge_streak_3" && currentUser.stats.streakDays >= 3) {
        b.unlocked = true;
        unlockedNew = b;
      } else if (b.id === "badge_hug_giver" && currentUser.stats.hugsGiven >= 10) {
        b.unlocked = true;
        unlockedNew = b;
      } else if (b.id === "badge_pour_care" && currentUser.stats.drinksTreated >= 1) {
        b.unlocked = true;
        unlockedNew = b;
      } else if (b.id === "badge_breathe_zen" && currentUser.stats.breatheSessions >= 3) {
        b.unlocked = true;
        unlockedNew = b;
      }
    }
  });

  if (unlockedNew) {
    saveUsersToStorage();
    showDrinkToast(`🎉 ยินดีด้วย! คุณปลดล็อกเหรียญตรา "${unlockedNew.name}" เรียบร้อยแล้ว!`);
    if (window.confetti) {
      confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 }, colors: ['#10B981', '#F59E0B', '#38BDF8'] });
    }
  }
}
