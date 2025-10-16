// Mood toggle
const toggleMood = document.getElementById("toggleMood");
const body = document.body;

toggleMood.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleMood.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Switch Mood";
});

// 💕 Change this password to your own
document.addEventListener("DOMContentLoaded", () => {
  const CORRECT_PASSWORD = "A&Aj22J25!";

  const toggleHeart = document.getElementById("toggleHeart");
  const passwordBox = document.getElementById("passwordBox");
  const unlockBtn = document.getElementById("unlockBtn");
  const passwordInput = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");
  const letter = document.getElementById("letter");
  const closeLetter = document.getElementById("closeLetter");

  // 💖 Toggle password box
  toggleHeart.addEventListener("click", () => {
    // Add glow + shake animation
    toggleHeart.classList.add("animate");
    setTimeout(() => toggleHeart.classList.remove("animate"), 800);
    // if letter is open, close it first
    if (!letter.classList.contains("hidden")) {
      letter.classList.add("hidden");
    }
    // toggle password box visibility
    passwordBox.classList.toggle("hidden");
  });
  // Create floating hearts
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement("span");
      heart.textContent = "💗";
      heart.className = "heart";
      document.body.appendChild(heart);

      // Random position around button
      const rect = toggleHeart.getBoundingClientRect();
      heart.style.left = rect.left + rect.width / 2 + (Math.random() * 80 - 40) + "px";
      heart.style.top = rect.top + window.scrollY - 10 + (Math.random() * 20 - 10) + "px";

      // Remove after animation
      setTimeout(() => heart.remove(), 2000);
    }
  // 🔓 Check password
  unlockBtn.addEventListener("click", () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
      passwordBox.classList.add("hidden");
      letter.classList.remove("hidden");
      errorMsg.textContent = "";
      passwordInput.value = "";
    } else {
      errorMsg.textContent = "❌ Wrong password! Try again 😆";
    }
  });

  // ❤️ Close letter and password box
  closeLetter.addEventListener("click", () => {
    letter.classList.add("hidden");
    passwordBox.classList.add("hidden");
  });
});

// Music control
const music = document.getElementById("bgMusic");
function playSong(filename) {
  music.src = filename;
  music.play();
}

let isMuted = false;

toggleMusic.addEventListener("click", () => {
  if (isMuted) {
    music.muted = false;
    toggleMusic.textContent = "🔇 Mute Music";
  } else {
    music.muted = true;
    toggleMusic.textContent = "🔊 Unmute Music";
  }
  isMuted = !isMuted;
});

// For each picture card, run its own slideshow
document.querySelectorAll(".picture-card").forEach(card => {
  const slides = card.querySelectorAll(".card-slide");
  let index = 0;

  // Function to show the current image
  function showSlide() {
    slides.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
    index = (index + 1) % slides.length; // next image
  }

  showSlide(); // start immediately
  setInterval(showSlide, 3000); // change every 3 seconds
});

// Number of butterflies
const butterflyCount = 25;
const butterflies = [];
const container = document.getElementById("butterflyContainer");

// Create butterflies
for (let i = 0; i < butterflyCount; i++) {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");
  butterfly.style.left = Math.random() * window.innerWidth + "px";
  butterfly.style.top = Math.random() * window.innerHeight + "px";
  butterfly.dataset.x = Math.random() * window.innerWidth;
  butterfly.dataset.y = Math.random() * window.innerHeight;
  container.appendChild(butterfly);
  butterflies.push(butterfly);
}

// Random floating motion
function floatButterflies() {
  butterflies.forEach(b => {
    let x = parseFloat(b.dataset.x);
    let y = parseFloat(b.dataset.y);
    x += Math.sin(Date.now() / 1000 + Math.random()) * 0.5;
    y += Math.cos(Date.now() / 1000 + Math.random()) * 0.5;
    b.dataset.x = x;
    b.dataset.y = y;
    b.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(floatButterflies);
}
floatButterflies();

// 🌸 Make butterflies follow the mouse softly
document.addEventListener("mousemove", (e) => {
  butterflies.forEach((b, index) => {
    const dx = (e.clientX - parseFloat(b.dataset.x)) * 0.02 * (index / 3);
    const dy = (e.clientY - parseFloat(b.dataset.y)) * 0.02 * (index / 3);
    b.dataset.x = parseFloat(b.dataset.x) + dx;
    b.dataset.y = parseFloat(b.dataset.y) + dy;
  });
});
