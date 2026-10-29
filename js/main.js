/* Shared behaviour for every page. Each block checks for its own
   elements first, so pages only run what they use. The theme is
   applied earlier by the inline script in each page's <head>. */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Light / dark toggle: remembers the choice, otherwise follows the system.
   The button lives in partials/nav.html, which loads after this script,
   so clicks are delegated and the label re-syncs once partials arrive. */
(function () {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const current = () => root.getAttribute("data-theme") || (mq.matches ? "dark" : "light");
  const sync = () => {
    const dark = current() === "dark";
    root.setAttribute("data-theme", current());
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.querySelector(".label").textContent = dark ? "Light" : "Dark";
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  };
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".theme-toggle")) return;
    const next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (err) {}
    sync();
  });
  mq.addEventListener && mq.addEventListener("change", () => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (err) {}
    if (!saved) { root.removeAttribute("data-theme"); sync(); }
  });
  document.addEventListener("partials:loaded", sync);
  sync();
})();

/* Scroll reveal */
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.08 });
  els.forEach((el) => io.observe(el));
})();

/* Barcode: random bar widths, purely decorative */
(function () {
  const el = document.getElementById("barcode");
  if (!el) return;
  for (let i = 0; i < 38; i++) {
    const bar = document.createElement("i");
    bar.style.width = (Math.random() < .3 ? 3 : 1) + "px";
    el.appendChild(bar);
  }
})();

/* ASCII lily: draw a soft lily off-screen, then re-render it as characters.
   Fills the homepage hero (#ascii) and any .ascii-lily on case studies. */
(function () {
  const outs = document.querySelectorAll("#ascii, .ascii-lily");
  if (!outs.length) return;
  const W = 520, H = 620;
  const src = document.createElement("canvas");
  src.width = W; src.height = H;
  const g = src.getContext("2d", { willReadFrequently: true });

  g.fillStyle = "#000"; g.fillRect(0, 0, W, H);
  g.filter = "blur(6px)";
  g.strokeStyle = "#fff"; g.lineCap = "round";

  // stem
  g.lineWidth = 7;
  g.beginPath(); g.moveTo(W * .52, H * .42);
  g.bezierCurveTo(W * .48, H * .62, W * .62, H * .78, W * .46, H * .98); g.stroke();
  // leaf
  g.lineWidth = 5;
  g.beginPath(); g.moveTo(W * .53, H * .7);
  g.quadraticCurveTo(W * .78, H * .6, W * .86, H * .48); g.stroke();

  // petals (6, slightly irregular)
  const cx = W * .52, cy = H * .32;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + .3;
    const len = 120 + (i % 2) * 26;
    g.save(); g.translate(cx, cy); g.rotate(a);
    const grad = g.createLinearGradient(0, 0, len, 0);
    grad.addColorStop(0, "rgba(255,255,255,.95)");
    grad.addColorStop(1, "rgba(255,255,255,.25)");
    g.fillStyle = grad;
    g.beginPath(); g.moveTo(0, 0);
    g.quadraticCurveTo(len * .55, -34, len, 0);
    g.quadraticCurveTo(len * .55, 34, 0, 0); g.fill();
    g.restore();
  }
  // stamens
  g.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i - 2) * .28;
    g.beginPath(); g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(a) * 70, cy + Math.sin(a) * 70); g.stroke();
  }

  // sample brightness into a character grid (mono chars are ~0.6 as wide as tall)
  const data = g.getImageData(0, 0, W, H).data;
  const ramp = " .,:;~-=+*%@";
  const COLS = 90;
  const ROWS = Math.round(COLS * (H / W) * 0.6);
  const cw = W / COLS, ch = H / ROWS;
  const grid = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const px = Math.floor(c * cw + cw / 2), py = Math.floor(r * ch + ch / 2);
      const v = data[(py * W + px) * 4] / 255;
      row.push(v < .06 ? 0 : Math.min(ramp.length - 1, Math.round(v * (ramp.length - 1))));
    }
    grid.push(row);
  }
  const base = grid.map((r) => r.slice());
  const paint = () => {
    const text = grid.map((r) => r.map((i) => ramp[i]).join("")).join("\n");
    outs.forEach((out) => { out.textContent = text; });
  };
  paint();

  // gentle shimmer: nudge a few characters up/down the ramp
  if (reduceMotion) return;
  setInterval(() => {
    if (document.hidden) return;
    for (let k = 0; k < 40; k++) {
      const r = Math.floor(Math.random() * ROWS), c = Math.floor(Math.random() * COLS);
      const i = base[r][c];
      if (i === 0) continue;
      grid[r][c] = Math.max(1, Math.min(ramp.length - 1, i + Math.floor(Math.random() * 3) - 1));
    }
    paint();
  }, 140);
})();

/* Skill bubbles: drift with scroll, move away from the cursor */
(function () {
  const section = document.querySelector(".skills-section");
  const bubbles = document.querySelectorAll(".bubble");
  if (!section || !bubbles.length || reduceMotion) return;

  function updateBubbles() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when section enters viewport bottom, 1 when it exits the top
    const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height / 2);
    const p = Math.max(-1, Math.min(1, progress * 2 - 1));
    bubbles.forEach((b, i) => {
      // Each bubble gets a unique drift pattern based on its index
      const dirX = (i % 2 === 0 ? 1 : -1);
      const dirY = (i % 3 === 0 ? 1 : -1);
      const magX = 20 + (i % 4) * 10;  // 20 → 50px
      const magY = 15 + (i % 3) * 8;   // 15 → 31px
      b.style.setProperty("--scroll-x", p * magX * dirX + "px");
      b.style.setProperty("--scroll-y", p * magY * dirY + "px");
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateBubbles(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  updateBubbles();

  // Repel
  let mouseX = -9999, mouseY = -9999;
  const repelState = Array.from(bubbles).map(() => ({ rx: 0, ry: 0 }));
  const lerp = (a, b, t) => a + (b - a) * t;
  window.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });

  function updateRepel() {
    bubbles.forEach((b, i) => {
      const r = b.getBoundingClientRect();
      const dx = (r.left + r.width / 2) - mouseX;
      const dy = (r.top + r.height / 2) - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 130;
      let tx = 0, ty = 0;
      if (dist < radius && dist > 0) {
        const force = Math.pow(1 - dist / radius, 2);
        tx = (dx / dist) * force * 60;
        ty = (dy / dist) * force * 60;
      }
      repelState[i].rx = lerp(repelState[i].rx, tx, 0.1);
      repelState[i].ry = lerp(repelState[i].ry, ty, 0.1);
      b.style.setProperty("--repel-x", repelState[i].rx + "px");
      b.style.setProperty("--repel-y", repelState[i].ry + "px");
    });
    requestAnimationFrame(updateRepel);
  }
  requestAnimationFrame(updateRepel);
})();

/* Contribution slideshow (case studies) */
(function () {
  const slides = document.querySelectorAll(".contrib-slide");
  const dots = document.querySelectorAll(".contrib-dot");
  if (!slides.length) return;
  let current = 0;

  function goTo(n) {
    slides[current].classList.remove("active");
    dots[current] && dots[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current] && dots[current].classList.add("active");
  }

  document.querySelector(".contrib-btn.next")?.addEventListener("click", () => goTo(current + 1));
  document.querySelector(".contrib-btn.prev")?.addEventListener("click", () => goTo(current - 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
})();

/* Click to enlarge: any button[data-lightbox] containing an <img> opens it full size */
(function () {
  const triggers = document.querySelectorAll("[data-lightbox]");
  if (!triggers.length || typeof HTMLDialogElement === "undefined") return;
  const dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.setAttribute("aria-label", "Enlarged image");
  const big = document.createElement("img");
  const close = document.createElement("button");
  close.type = "button";
  close.className = "pill solid meta lightbox-close";
  close.textContent = "Close";
  dlg.append(big, close);
  document.body.appendChild(dlg);
  dlg.addEventListener("click", () => dlg.close());
  triggers.forEach((t) => t.addEventListener("click", () => {
    const img = t.querySelector("img");
    if (!img) return;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dlg.showModal();
  }));
})();
