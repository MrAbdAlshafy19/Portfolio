/**
 * ====================================================================
 * YAHYA ABDALSHAFY PORTFOLIO - ANIMATIONS & MOTION ENGINE
 * Background Particles, Dynamic Typewriter, Custom Cursor & Scroll Reveals
 * ====================================================================
 */

const MotionEngine = (function () {
  // Check user motion preferences & device type
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

  /**
   * 1. Dynamic Typewriter Rotator
   */
  function initTypewriter() {
    const targetElement = document.getElementById("typewriter-text");
    if (!targetElement) return;

    const phrases = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal.rotatingTitles) || [
      "Machine Learning Engineer",
      "Data Science Practitioner",
      "Python Developer"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        targetElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        targetElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }

  /**
   * 2. Background Canvas Constellation
   */
  function initBackgroundCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 20 : 40;

    let mouse = { x: -1000, y: -1000, radius: 130 };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.8
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const particleColor = isLight ? "rgba(133, 72, 54, 0.4)" : "rgba(255, 178, 44, 0.45)";
      const lineColor = isLight ? "rgba(133, 72, 54, " : "rgba(255, 178, 44, ";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * (isLight ? 0.15 : 0.2);
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const mAlpha = (1 - mDist / mouse.radius) * 0.3;
          ctx.beginPath();
          ctx.strokeStyle = `${lineColor}${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    resize();
    draw();
  }

  /**
   * 3. Custom Desktop Cursor
   */
  function initCustomCursor() {
    if (isTouchDevice() || prefersReducedMotion) return;

    const cursor = document.querySelector(".custom-cursor");
    const follower = document.querySelector(".cursor-follower");

    if (!cursor || !follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let hasMoved = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        cursor.classList.add("active");
        follower.classList.add("active");
        followerX = mouseX;
        followerY = mouseY;
      }

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function followLoop() {
      if (hasMoved) {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      }
      requestAnimationFrame(followLoop);
    }
    followLoop();

    const interactiveElements = document.querySelectorAll("a, button, .interactive-card, .btn, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });
  }

  /**
   * 4. Scroll-Triggered Reveal Animations
   */
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-on-scroll, .reveal-left, .reveal-right").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    // Arm below-the-fold reveals
    document.body.classList.add("animations-ready");

    const revealElements = document.querySelectorAll(".reveal-on-scroll, .reveal-left, .reveal-right");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /**
   * 5. Magnetic Button Effect
   */
  function initMagneticButtons() {
    if (isTouchDevice() || prefersReducedMotion) return;

    const magneticButtons = document.querySelectorAll(".magnetic-btn");
    magneticButtons.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    });
  }

  function init() {
    initTypewriter();
    initBackgroundCanvas();
    initCustomCursor();
    initScrollReveals();
    initMagneticButtons();
  }

  return {
    init
  };
})();
