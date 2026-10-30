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

// App State
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
    <div class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2.5">
            <span class="text-lg">${item.avatar.split(" ")[0]}</span>
            <div>
              <span class="text-xs font-bold text-slate-800 block">${item.avatar}</span>
              <span class="text-[10px] text-slate-400">${item.createdAt}</span>
            </div>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full font-medium ${getTagStyle(item.tag)}">
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
          <button onclick="handleReact('${item.id}', 'hug')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${item.userInteractions?.hugged ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-50 hover:bg-emerald-50 text-slate-600'} transition-all">
            <span>🫂</span>
            <span id="hugCount_${item.id}">${item.hugs}</span>
          </button>
          
          <!-- Send Love Button -->
          <button onclick="handleReact('${item.id}', 'love')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${item.userInteractions?.loved ? 'bg-rose-100 text-rose-800' : 'bg-slate-50 hover:bg-rose-50 text-slate-600'} transition-all">
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
    }
  } else if (type === "love") {
    if (item.userInteractions.loved) {
      item.loves -= 1;
      item.userInteractions.loved = false;
    } else {
      item.loves += 1;
      item.userInteractions.loved = true;
      triggerHeartFloat();
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
      colors: ['#F43F5E', '#FB7185', '#FDA4AF']
    });
  }
}

function getTagStyle(tag) {
  if (tag.includes("หมดไฟ")) return "bg-rose-50 text-rose-700";
  if (tag.includes("เรียน")) return "bg-sky-50 text-sky-700";
  if (tag.includes("ความสัมพันธ์")) return "bg-purple-50 text-purple-700";
  if (tag.includes("กำลังใจ")) return "bg-emerald-50 text-emerald-700";
  return "bg-amber-50 text-amber-700";
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
      <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">คุณ</div>
      <div class="bg-emerald-600 text-white rounded-2xl rounded-tr-xs p-3.5 max-w-md shadow-xs text-sm leading-relaxed font-body">
        ${escapeHtml(message)}
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-sm shrink-0 mt-1">🌱</div>
      <div class="bg-white border border-slate-100 rounded-2xl rounded-tl-xs p-4 max-w-md shadow-xs text-sm text-slate-700 leading-relaxed font-body whitespace-pre-line">
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
    <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-sm shrink-0 mt-1">🌱</div>
    <div class="bg-white border border-slate-100 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
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
      <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-sm shrink-0 mt-1">🌱</div>
      <div class="bg-white border border-slate-100 rounded-2xl rounded-tl-xs p-4 max-w-md shadow-xs text-sm text-slate-700 leading-relaxed space-y-2">
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

  const defaultLabels = ["จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "วันนี้"];
  const defaultData = [4, 3, 2, 4, 3, 4, 4]; // default gentle curve

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
        pointBackgroundColor: "#059669",
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

// ================= DRINK ON ME LOUNGE CONTROLS =================
function switchBarTable(table) {
  activeLoungeTable = table;
  const tabs = document.querySelectorAll("#loungeTableTabs .bar-tab");
  tabs.forEach(t => {
    if ((table === "all" && t.innerText.includes("โต๊ะบาร์รวม")) ||
        (table === "burnout" && t.innerText.includes("คนหมดไฟ")) ||
        (table === "midnight" && t.innerText.includes("ดึกดื่น")) ||
        (table === "heartbreak" && t.innerText.includes("พักใจ"))) {
      t.classList.add("active-bar-tab");
      t.classList.remove("bg-slate-800/80", "text-slate-300");
    } else {
      t.classList.remove("active-bar-tab");
      t.classList.add("bg-slate-800/80", "text-slate-300");
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
      b.classList.remove("border-slate-700/80", "bg-slate-900/40");
      let check = b.querySelector(".text-amber-400");
      if (!check) {
        const span = document.createElement("span");
        span.className = "text-amber-400 text-xs";
        span.innerText = "✓";
        b.appendChild(span);
      }
    } else {
      b.classList.remove("active-drink");
      b.classList.add("border-slate-700/80", "bg-slate-900/40");
      let check = b.querySelector(".text-amber-400");
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
    user: "นักเดินทางพักใจ",
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

  input.value = "";
  document.getElementById("treatAllCheckbox").checked = false;

  // Clinking sound effect & toast
  playClinkSound();
  if (isDrinkOnMe) {
    showDrinkToast(`🌟 คุณประกาศ "Drink on Me!" เลี้ยงเครื่องดื่มทุกคนที่โต๊ะแล้ว! 🥂`);
    if (window.confetti) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#F59E0B', '#F43F5E', '#FDE68A']
      });
    }
  } else {
    showDrinkToast(`🍸 เสิร์ฟ ${selectedLoungeDrink} วางบนโต๊ะบาร์แล้ว`);
  }
}

function handleTreatDrink(messageId) {
  const msg = loungeMessages.find(m => m.id === messageId);
  if (!msg) return;

  msg.treatedCount = (msg.treatedCount || 0) + 1;
  totalDrinksTreatedCount += 1;
  const totalEl = document.getElementById("totalDrinksTreated");
  if (totalEl) totalEl.innerText = `${totalDrinksTreatedCount} แก้ว`;

  localStorage.setItem("mindspace_lounge_messages", JSON.stringify(loungeMessages));
  renderLoungeMessages();

  // Glass clinking audio & feedback
  playClinkSound();
  showDrinkToast(`🥂 Drink on Me! คุณได้เลี้ยงเครื่องดื่มให้ "${msg.user}" แล้ว 💖`);

  if (window.confetti) {
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EC4899', '#FBBF24']
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
      <div class="py-16 text-center text-slate-500">
        <span class="text-3xl block mb-2">🕯️</span>
        <p class="text-sm">โต๊ะนี้ยังว่างอยู่ นั่งลงเป็นคนแรกแล้วส่งเสียงคุยกันได้เลยนะ</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="p-4 rounded-2xl ${item.isDrinkOnMe ? 'bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-slate-900/90 border border-amber-400/50' : 'bg-slate-900/70 border border-slate-700/60'} hover:border-amber-400/40 transition-all flex flex-col justify-between">
      <div class="flex items-start justify-between gap-3 mb-2.5">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lg shrink-0">
            ${item.avatar || '🍸'}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-xs text-slate-100">${escapeHtml(item.user)}</span>
              ${item.isDrinkOnMe ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold drink-on-me-badge">🌟 Drink on Me!</span>' : ''}
            </div>
            <span class="text-[10px] text-slate-400">${item.time}</span>
          </div>
        </div>

        <!-- Drink Badge -->
        <span class="text-[11px] px-2.5 py-1 rounded-xl bg-slate-800 text-amber-300 border border-amber-400/30 flex items-center gap-1 shrink-0">
          ${item.drink}
        </span>
      </div>

      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-body whitespace-pre-line mb-3">
        ${escapeHtml(item.content)}
      </p>

      <div class="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span class="text-[11px] text-slate-400">
          🥂 เลี้ยงแล้ว: <strong class="text-amber-300 font-semibold">${item.treatedCount || 0} แก้ว</strong>
        </span>

        <button onclick="handleTreatDrink('${item.id}')" class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-400/40 font-semibold text-xs transition-all flex items-center gap-1.5 active:scale-95">
          <span>🍻 Drink on Me!</span>
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
