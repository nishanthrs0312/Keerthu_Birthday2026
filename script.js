/**
 * ==============================================================================
 * Birthday Wish Website - Interactive Script
 * Fully customizable configuration below!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// CONFIGURATION: Easily edit names, dates, memories, and reasons here!
// ------------------------------------------------------------------------------
const BIRTHDAY_CONFIG = {
  // Her Name
  herName: "My Keerthuuuuuuuu 💖😘🫂",

  // Your Name
  yourName: "Nishanth",

  // Birthday milestone (e.g., "20th", "21st", "Special")
  ageMilestone: "20th",

  // Date she was born OR the date you met (Format: YYYY-MM-DDTHH:MM:SS)
  // For count-up counter (e.g., days lighting up the world / days together)
  startDate: "2006-12-05T00:00:00",

  // Counter mode: "birthday" (since she was born) or "relationship" (since you met)
  counterTitle: "Lighting Up My World For",

  // Audio track (Replace with your local MP3 e.g. "music/our-song.mp3" or any URL)
  musicTitle: "Can't Help Falling in Love",
  musicSubtitle: "Romantic Piano Instrumental",

  // Memories Photo Gallery (6 to 8 items with high-res placeholders)
  memories: [
    {
      title: "The Day It All Began",
      date: "Mar 24, 2024",
      caption: "The Day It all Began 💖",
      image: "1778406343251.png",
      story: "The first day we both started taking to each other through snapchat. "
    },
    {
      title: "Our First Date",
      date: "Nov 11, 2024",
      caption: "Our first date 💖",
      image: "WhatsApp Image 2026-11-22 at 10.16.11 AM.jpeg",
      story: "I still remember our first date, how nervous I was.... to ask if I could hold your hand. My heart was racing, but the moment you hold my hand  everything felt a little more beautiful. At the end of the movie when you rested your head on my shoulder I secretly wished that moment would never end."
    },
    {
      title: "The Special Date",
      date: "Aug 30, 2025",
      caption: "The Special Date 💖",
      image: "WhatsApp Image 2026-11-22 at 10.26.15 AM.jpeg",
      story: "Do you remember the day where there are..... lots of kisses.... and madam was blushing sooo much .Every time I kissed you, that shy little smile of yours made my heart melt all over again"
    },
    {
      title: "CIT Outing",
      date: "Feb 9, 2026",
      caption: "CIT Outing 💖",
      image: "renew.jpg",
      story: "Unaku neyabakam iruka dii anaiku namma rendu perum antha auto la okanthu kathai pesunathu antha cheeks aa pinch pannum pothu madam ana blushhhh irukaeeeee 🫣"
    },
    {
      title: "Our Real First Date",
      date: "Aug 13, 2026",
      caption: "Our Real First Date 💖",
      image: "WhatsApp Image 2026-11-22 at 12.24.31 PM.jpeg",
      story: "Our first date just the two of us with no friends around,it was just US. I still remember how happy were are on that day . Those cute romance we had ."
    },
    {
      title: "The Monochromatic Date 🤭",
      date: "Aug 13, 2026",
      caption: "The Monochromatic Date 🤭",
      image: "02.jpeg",
      story: "Our second date just the two of us with no friends around,just you and me. Anaiku semma cute aa iruntha dii with a monochromatic dress🤭.Anaiku nee scooty la thoongum pothu it felt different dii. All I saw was a kutti ponnu inside of you ."
    },
    
  ],

  // 10 Reasons Why I Love You
  reasons: [
    {
      icon: "✨",
      title: "Unnoda Smile",
      description: "Enaku unkitta pudichathae antha smile tha dii.Antha smile tha dii unaku alaghae..."
    },
    {
      icon: "🕊️",
      title: "Kind Heart",
      description: "Innoru vishayam enaku unkitta romba pudikum na athu unnoda manasu tha dii no matter what, you give kindness without even expecting"
    },
    {
      icon: "😂",
      title: "Antha baby Voice and Laugh",
      description: "You will never know dii nee enkitta kolanthai mathiri nadanthukum pothu and antha siripa ketkum pothu... Athu vera oru feeling dii enaku theirla atha epdi solla nu .. Ana nee oru kutti ponnu tha dii eppovum mae"
    },
    {
      icon: "🛡️",
      title: "My Safe Space",
      description: "No matter what happens oru happiness illa na sadness oo atha first unkitta solla tha dii thonum enn life la first time i shared my everything na athu unkitta mattum tha . You are special for me dii"
    },
    {
      icon: "🌟",
      title: "Unnoda Passion & Determination",
      description: "Unnoda UPSC Dream kaga nee avalo kasatam padura nu enaku theriyum dii . I know how much it means to you nu . Nee kandipa IAS aava dii enaku nambikai iruku"
    },
    {
      icon: "😁",
      title: "Cute Angry Face",
      description: "Keerthana enna tha nee kovathula moraichalum seri dii enaku innum anaiku patha antha cute angry face tha dii neyabakam varum . Kovathula um epdi dii avalo cute aa iruka....."
    },
    {
      icon: "🤝",
      title: "Openness",
      description: "Unaku onnu pudikala na anga nee sollura la enaku athu pudikala nu athuvum enaku unkitta pudicha vishayam"
    },
    {
      icon: "🫣",
      title: "Antha cuteness",
      description: "Unaku normal aa irukalam dii but only  i know much cute you are nu. Antha blush tha dii ellam mae avalooo cute aa irupa dii😘  "
    },
    {
      icon: "♾️",
      title: "Nee neeya irukurathu ",
      description: "Nee neeya irukurathu unaku epdi nu therila but enaku athu romba pudikum . They way you smile , the way you talk, the way you listen, the way you laugh , sometimes the way you get angry. You really don't know girl how much this guy loves you"
    }
  ],

  // ----------------------------------------------------------------------------
  // 4th SECTION: THE CUTE PHOTOS GALLERY (Back-to-back photo gallery)
  // Put your own photo paths (e.g., "images/photo1.jpg") or URLs here!
  // ----------------------------------------------------------------------------
  cutePhotos: [
    {
      image: "01.jpeg",
      caption: "Cutest human alive 🥺💖"
    },
    {
      image: "02.jpeg",
      caption: "My favorite view forever 🌸"
    },
    {
      image: "03.jpeg",
      caption: "That sparkle in your eyes ✨"
    },
    {
      image: "04.jpeg",
      caption: "Pure sunshine and warmth ☀️"
    },
    {
      image: "05.jpeg",
      caption: "How are you this gorgeous? 🥰"
    },
    {
      image: "06.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "07.jpeg",
      caption: "Forever obsessed with you 💍"
    },
    {
      image: "08.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "09.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "10.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "11.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "12.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "13.jpg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "14.jpg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "15.jpg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "16.png",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "17.png",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "18.jpg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "19.jpg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "20.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "21.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "22.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "23.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "24.jpeg",
      caption: "My whole heart in one person ❤️"
    },
    {
      image: "25.jpeg",
      caption: "My whole heart in one person ❤️"
    }

  ]
};

// ------------------------------------------------------------------------------
// Initialization & DOM Setup
// ------------------------------------------------------------------------------
function safeRun(fn, name) {
  try {
    fn();
  } catch (err) {
    console.error(`Error in ${name}:`, err);
  }
}

function initApp() {
  safeRun(() => { if (window.lucide) window.lucide.createIcons(); }, "lucide");
  safeRun(applyConfig, "applyConfig");
  safeRun(initEnvelopeReveal, "initEnvelopeReveal");
  safeRun(initAmbientCanvas, "initAmbientCanvas");
  safeRun(initLiveCounter, "initLiveCounter");
  safeRun(initAudioPlayer, "initAudioPlayer");
  safeRun(renderGallery, "renderGallery");
  safeRun(initReasonsDeck, "initReasonsDeck");
  safeRun(renderCuteGallery, "renderCuteGallery");
  safeRun(initCakeSection, "initCakeSection");
}

// Ensure initApp runs whether DOMContentLoaded has already fired or not
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ------------------------------------------------------------------------------
// 1. Apply Dynamic Config to Elements
// ------------------------------------------------------------------------------
function applyConfig() {
  document.title = `Happy Birthday, ${BIRTHDAY_CONFIG.herName} ✨`;
  
  const herNameEls = document.querySelectorAll("#cfg-her-name");
  herNameEls.forEach(el => {
    el.innerHTML = `${BIRTHDAY_CONFIG.herName}
      <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.5C50 2.5 180 2 248 8.5" stroke="#f5b938" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
  });

  const ageEl = document.getElementById("cfg-age-text");
  if (ageEl) ageEl.textContent = `${BIRTHDAY_CONFIG.ageMilestone} Birthday`;

  const letterRecipient = document.getElementById("letter-recipient");
  if (letterRecipient) letterRecipient.textContent = BIRTHDAY_CONFIG.herName;

  const letterSender = document.getElementById("letter-sender");
  if (letterSender) letterSender.textContent = `With all my love, ${BIRTHDAY_CONFIG.yourName} ❤️`;

  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = BIRTHDAY_CONFIG.herName;

  const counterTitle = document.getElementById("counter-title");
  if (counterTitle) counterTitle.textContent = BIRTHDAY_CONFIG.counterTitle;
}

// ------------------------------------------------------------------------------
// 2. Interactive Envelope & Surprise Reveal
// ------------------------------------------------------------------------------
function initEnvelopeReveal() {
  const trigger = document.getElementById("open-envelope-trigger");
  const landingOverlay = document.getElementById("landing-overlay");
  const mainContent = document.getElementById("main-content");
  const flap = document.querySelector(".envelope-flap");
  const seal = document.querySelector(".wax-seal");

  if (!landingOverlay || !mainContent) return;

  let opened = false;

  function openSurprise() {
    if (opened) return;
    opened = true;

    // 1. Animate envelope opening
    if (flap) flap.style.transform = "rotateX(180deg)";
    if (seal) seal.style.opacity = "0";

    // 2. Play Audio automatically upon user gesture
    try { startMusic(); } catch(e) { console.warn("Music play error:", e); }

    // 3. Trigger confetti explosion
    try { triggerConfettiExplosion(); } catch(e) { console.warn("Confetti error:", e); }

    // 4. Smooth fade-out of overlay and fade-in of main content
    setTimeout(() => {
      landingOverlay.classList.add("opacity-0", "pointer-events-none");
      mainContent.classList.remove("opacity-0");
      mainContent.classList.add("opacity-100");

      // Re-trigger lucide icons inside main content
      try { if (window.lucide) window.lucide.createIcons(); } catch(e) {}

      // Trigger secondary confetti showers
      setTimeout(() => {
        try { triggerGentleConfetti(); } catch(e) {}
      }, 1000);

      // Hide overlay completely after fade
      setTimeout(() => {
        landingOverlay.style.display = "none";
      }, 1000);
    }, 600);
  }

  if (trigger) {
    trigger.addEventListener("click", openSurprise);
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openSurprise();
      }
    });
  }
}

function triggerConfettiExplosion() {
  if (typeof confetti !== "function") return;

  const count = 200;
  const defaults = {
    origin: { y: 0.6 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#f43f5e', '#fb7185', '#f5b938', '#ffe599', '#ffffff']
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

function triggerGentleConfetti() {
  if (typeof confetti !== "function") return;
  const end = Date.now() + 2 * 1000;
  const colors = ['#f43f5e', '#f5b938', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// ------------------------------------------------------------------------------
// 3. Audio Player Controls (with Web Audio API music-box fallback)
// ------------------------------------------------------------------------------
let audioContext = null;
let musicBoxInterval = null;

function initAudioPlayer() {
  const audio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("toggle-audio-btn");
  const audioIcon = document.getElementById("audio-icon");
  const spinIcon = document.querySelector(".music-spin");

  if (!toggleBtn || !audio) return;

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      startMusic();
    } else {
      audio.pause();
      if (audioIcon) {
        audioIcon.setAttribute("data-lucide", "play");
        if (window.lucide) window.lucide.createIcons();
      }
      if (spinIcon) spinIcon.style.animationPlayState = "paused";
      stopSynthLullaby();
    }
  });

  // Handle network / audio errors gracefully by falling back to synthesizer
  audio.addEventListener("error", () => {
    console.warn("External audio source failed or blocked; using synthesized music-box audio fallback.");
  });
}

function startMusic() {
  const audio = document.getElementById("bg-audio");
  const audioIcon = document.getElementById("audio-icon");
  const spinIcon = document.querySelector(".music-spin");

  if (!audio) return;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      if (audioIcon) {
        audioIcon.setAttribute("data-lucide", "pause");
        if (window.lucide) window.lucide.createIcons();
      }
      if (spinIcon) spinIcon.style.animationPlayState = "running";
    }).catch(() => {
      // If browser blocked media source, start Web Audio API synthesized lullaby
      startSynthLullaby();
      if (audioIcon) {
        audioIcon.setAttribute("data-lucide", "pause");
        if (window.lucide) window.lucide.createIcons();
      }
      if (spinIcon) spinIcon.style.animationPlayState = "running";
    });
  }
}

// Romantic music box tune synthesizer via Web Audio API (zero external dependency!)
function startSynthLullaby() {
  if (musicBoxInterval) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioContext = new AudioContext();

    // Notes of "Can't Help Falling in Love" opening
    const notes = [
      { f: 261.63, d: 0.8 }, // C4
      { f: 329.63, d: 0.8 }, // E4
      { f: 392.00, d: 0.8 }, // G4
      { f: 523.25, d: 1.2 }, // C5
      { f: 493.88, d: 0.6 }, // B4
      { f: 440.00, d: 0.6 }, // A4
      { f: 392.00, d: 1.2 }, // G4
      { f: 349.23, d: 0.8 }, // F4
      { f: 329.63, d: 0.8 }, // E4
      { f: 293.66, d: 0.8 }, // D4
      { f: 261.63, d: 1.5 }  // C4
    ];
    let noteIdx = 0;

    function playNote(freq, dur) {
      if (!audioContext || audioContext.state === 'closed') return;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);

      gain.gain.setValueAtTime(0.12, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + dur);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + dur);
    }

    musicBoxInterval = setInterval(() => {
      const current = notes[noteIdx];
      playNote(current.f, current.d);
      noteIdx = (noteIdx + 1) % notes.length;
    }, 750);
  } catch (e) {
    console.log("Web Audio synth not supported", e);
  }
}

function stopSynthLullaby() {
  if (musicBoxInterval) {
    clearInterval(musicBoxInterval);
    musicBoxInterval = null;
  }
}

// ------------------------------------------------------------------------------
// 4. Ambient Canvas Particles (Stars & Floating Hearts)
// ------------------------------------------------------------------------------
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 20), 65);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      isHeart: Math.random() > 0.75,
      pulseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  function drawHeart(x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 10, size / 10);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
    ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
    ctx.fillStyle = `rgba(244, 63, 94, ${opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#f43f5e";
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;

      // Wrap around screen
      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      if (p.isHeart) {
        drawHeart(p.x, p.y, p.size * 2, p.opacity);
      } else {
        // Star particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 185, 56, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#f5b938";
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ------------------------------------------------------------------------------
// 5. Live Relationship / Birthday Counter
// ------------------------------------------------------------------------------
function initLiveCounter() {
  const daysEl = document.getElementById("counter-days");
  const hoursEl = document.getElementById("counter-hours");
  const minsEl = document.getElementById("counter-minutes");
  const secsEl = document.getElementById("counter-seconds");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const start = new Date(BIRTHDAY_CONFIG.startDate).getTime();

  function update() {
    const now = Date.now();
    const diff = Math.max(0, now - start);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ------------------------------------------------------------------------------
// 6. Our Memories: Polaroid Gallery & Lightbox Modal
// ------------------------------------------------------------------------------
let currentMemoryIndex = 0;

function renderGallery() {
  const grid = document.getElementById("photo-gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";

  // Tilt rotations for authentic polaroid look
  const rotations = [-2.5, 1.8, -1.5, 2.2, -1.8, 1.4];

  BIRTHDAY_CONFIG.memories.forEach((item, index) => {
    const card = document.createElement("div");
    const rot = rotations[index % rotations.length];
    card.className = "polaroid-card group";
    card.style.transform = `rotate(${rot}deg)`;
    const imgSrc = encodeURI(item.image);

    card.innerHTML = `
      <div class="polaroid-img-wrapper">
        <img src="${imgSrc}" alt="${item.title}" loading="eager" onerror="console.warn('Image failed to load:', '${imgSrc}')">
      </div>
      <div class="mt-3 text-center px-1">
        <p class="font-handwritten text-xl text-slate-800 font-bold leading-tight group-hover:text-rose-600 transition-colors">
          ${item.caption}
        </p>
        <span class="text-[11px] uppercase tracking-wider text-slate-400 font-sans block mt-1">
          ${item.date}
        </span>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index));
    grid.appendChild(card);
  });

  initLightboxControls();
}

function openLightbox(index) {
  currentMemoryIndex = index;
  const memory = BIRTHDAY_CONFIG.memories[index];
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-image");
  const modalDate = document.getElementById("modal-date");
  const modalTitle = document.getElementById("modal-title");
  const modalStory = document.getElementById("modal-story");

  if (!modal || !memory) return;

  modalImg.src = memory.image;
  modalDate.textContent = memory.date;
  modalTitle.textContent = memory.title;
  modalStory.textContent = memory.story;

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
  }, 10);

  if (window.lucide) window.lucide.createIcons();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

function initLightboxControls() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentMemoryIndex = (currentMemoryIndex - 1 + BIRTHDAY_CONFIG.memories.length) % BIRTHDAY_CONFIG.memories.length;
      openLightbox(currentMemoryIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentMemoryIndex = (currentMemoryIndex + 1) % BIRTHDAY_CONFIG.memories.length;
      openLightbox(currentMemoryIndex);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevBtn && prevBtn.click();
    if (e.key === "ArrowRight") nextBtn && nextBtn.click();
  });
}

// ------------------------------------------------------------------------------
// Cute Photos Gallery (Continuous Sideways Rolling Marquee)
// ------------------------------------------------------------------------------
function renderCuteGallery() {
  const track = document.getElementById("cute-photos-track");
  if (!track || !BIRTHDAY_CONFIG.cutePhotos) return;

  // Normalize: accepts either objects { image, caption } OR plain strings "16.jpeg"
  const validPhotos = BIRTHDAY_CONFIG.cutePhotos.map(p => {
    if (typeof p === "string" && p.trim()) {
      return { image: p.trim(), caption: "My whole heart in one person ❤️" };
    }
    if (p && p.image && p.image.trim()) {
      return { image: p.image.trim(), caption: p.caption || "My whole heart in one person ❤️" };
    }
    return null;
  }).filter(Boolean);

  if (validPhotos.length === 0) return;

  track.innerHTML = "";

  // Make sure we have at least 8 items as a base set
  let baseSet = [...validPhotos];
  while (baseSet.length < 8) {
    baseSet = baseSet.concat(validPhotos);
  }

  // Duplicate for seamless 0% to -50% infinite rolling loop
  const rollingList = [...baseSet, ...baseSet];

  rollingList.forEach((item) => {
    const card = document.createElement("div");
    card.className = "marquee-photo-card group relative select-none";
    const imgSrc = encodeURI(item.image);

    card.innerHTML = `
      <div class="w-full h-full relative overflow-hidden bg-night-950">
        <img src="${imgSrc}" alt="${item.caption || 'Cute photo'}" loading="eager" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none" onerror="console.warn('Image failed to load:', '${imgSrc}')">
        
        <!-- Gradient Overlay on Hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p class="text-white font-serif font-medium text-sm md:text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 leading-snug">
            ${item.caption}
          </p>
          <div class="flex items-center gap-1.5 text-xs text-rose-300 mt-2 font-sans">
            <i data-lucide="heart" class="w-3.5 h-3.5 fill-rose-400 text-rose-400"></i>
            <span>Tap to view full photo</span>
          </div>
        </div>

        <!-- Floating corner badge -->
        <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
          <span>💖</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openCutePhotoLightbox(item));
    track.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function openCutePhotoLightbox(item) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-image");
  const modalDate = document.getElementById("modal-date");
  const modalTitle = document.getElementById("modal-title");
  const modalStory = document.getElementById("modal-story");

  if (!modal) return;

  modalImg.src = item.image;
  modalDate.textContent = "So Precious ✨";
  modalTitle.textContent = item.caption || "My Absolute Favorite";
  modalStory.textContent = "Every single picture of you reminds me of how extraordinarily lucky I am to have you in my life. You are pure art. 💖";

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
  }, 10);

  if (window.lucide) window.lucide.createIcons();
}

// ------------------------------------------------------------------------------
// 7. Reasons I Love You: Interactive Deck
// ------------------------------------------------------------------------------
let currentReasonIdx = 0;

function initReasonsDeck() {
  const card = document.getElementById("deck-card");
  const prevBtn = document.getElementById("deck-prev-btn");
  const nextBtn = document.getElementById("deck-next-btn");
  const shuffleBtn = document.getElementById("deck-shuffle-btn");

  if (!card) return;

  function renderCard(idx, direction = "next") {
    currentReasonIdx = idx;
    const item = BIRTHDAY_CONFIG.reasons[idx];
    
    // Quick exit animation
    card.style.transform = direction === "next" ? "translateX(-40px) scale(0.95)" : "translateX(40px) scale(0.95)";
    card.style.opacity = "0";

    setTimeout(() => {
      document.getElementById("deck-counter").textContent = `Reason ${idx + 1} of ${BIRTHDAY_CONFIG.reasons.length}`;
      document.getElementById("deck-icon").textContent = item.icon;
      document.getElementById("deck-title").textContent = item.title;
      document.getElementById("deck-description").textContent = item.description;

      card.style.transform = direction === "next" ? "translateX(40px) scale(0.95)" : "translateX(-40px) scale(0.95)";
      
      requestAnimationFrame(() => {
        card.style.transform = "translateX(0) scale(1)";
        card.style.opacity = "1";
      });
    }, 200);
  }

  card.addEventListener("click", () => {
    const nextIdx = (currentReasonIdx + 1) % BIRTHDAY_CONFIG.reasons.length;
    renderCard(nextIdx, "next");
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const nextIdx = (currentReasonIdx + 1) % BIRTHDAY_CONFIG.reasons.length;
      renderCard(nextIdx, "next");
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const prevIdx = (currentReasonIdx - 1 + BIRTHDAY_CONFIG.reasons.length) % BIRTHDAY_CONFIG.reasons.length;
      renderCard(prevIdx, "prev");
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      let randIdx;
      do {
        randIdx = Math.floor(Math.random() * BIRTHDAY_CONFIG.reasons.length);
      } while (randIdx === currentReasonIdx && BIRTHDAY_CONFIG.reasons.length > 1);
      renderCard(randIdx, "next");
    });
  }
}

// ------------------------------------------------------------------------------
// 8. Birthday Cake & Wish Maker (Blow Out with Button or Mic)
// ------------------------------------------------------------------------------
function initCakeSection() {
  const blowBtn = document.getElementById("blow-candles-btn");
  const micBtn = document.getElementById("mic-blow-btn");
  const micIcon = document.getElementById("mic-icon");
  const micLabel = document.getElementById("mic-btn-label");
  const flames = [document.getElementById("flame-1"), document.getElementById("flame-2"), document.getElementById("flame-3")];
  const smokes = [document.getElementById("smoke-1"), document.getElementById("smoke-2"), document.getElementById("smoke-3")];
  const wishBanner = document.getElementById("wish-granted-banner");

  let isExtinguished = false;

  function extinguishCandles() {
    if (isExtinguished) return;
    isExtinguished = true;

    // Extinguish flames
    flames.forEach(flame => {
      if (flame) flame.classList.add("extinguished");
    });

    // Animate rising smoke
    smokes.forEach(smoke => {
      if (smoke) smoke.classList.add("active");
    });

    // Massive confetti celebration
    triggerConfettiExplosion();
    setTimeout(triggerGentleConfetti, 500);

    // Reveal wish granted banner
    if (wishBanner) {
      wishBanner.classList.remove("hidden");
    }

    if (blowBtn) {
      blowBtn.innerHTML = `<span>Wish Made! ✨💖</span>`;
      blowBtn.classList.remove("from-rose-500", "via-pink-500", "to-gold-500");
      blowBtn.classList.add("from-emerald-500", "to-teal-600");
    }

    if (micBtn) {
      micBtn.style.display = "none";
    }
  }

  if (blowBtn) {
    blowBtn.addEventListener("click", extinguishCandles);
  }

  // Optional Microphone Blow Feature via Web Audio API
  if (micBtn) {
    micBtn.addEventListener("click", async () => {
      if (isExtinguished) return;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        micLabel.textContent = "Listening... Blow now! 🌬️";
        micBtn.classList.add("border-rose-400", "text-rose-300", "animate-pulse");

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        const microphone = audioCtx.createMediaStreamSource(stream);
        microphone.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        let blowCount = 0;

        function checkBlow() {
          if (isExtinguished) {
            stream.getTracks().forEach(track => track.stop());
            audioCtx.close();
            return;
          }

          analyser.getByteFrequencyData(dataArray);

          // Calculate average low-frequency volume (blowing sound has high energy at low/mid frequencies)
          let sum = 0;
          for (let i = 0; i < 64; i++) {
            sum += dataArray[i];
          }
          const avg = sum / 64;

          if (avg > 65) {
            blowCount++;
            if (blowCount > 3) {
              extinguishCandles();
              stream.getTracks().forEach(track => track.stop());
              audioCtx.close();
              return;
            }
          } else {
            blowCount = Math.max(0, blowCount - 1);
          }

          requestAnimationFrame(checkBlow);
        }

        checkBlow();
      } catch (err) {
        alert("Microphone access was declined or is unavailable. You can click 'Blow Out Candles 💨' directly!");
      }
    });
  }
}
