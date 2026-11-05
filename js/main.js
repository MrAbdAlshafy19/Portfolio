/**
 * ====================================================================
 * YAHYA ABDALSHAFY PORTFOLIO - MAIN CONTROLLER
 * Navigation, Contact Actions, Form Validation, Modals & Toast System
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Safe execution of all modules
  try { if (window.ThemeManager) window.ThemeManager.init(); } catch (e) { console.warn(e); }
  try { if (window.MotionEngine) window.MotionEngine.init(); } catch (e) { console.warn(e); }
  try { if (window.SkillsModule) window.SkillsModule.init(); } catch (e) { console.warn(e); }
  try { if (window.ProjectsModule) window.ProjectsModule.init(); } catch (e) { console.warn(e); }

  // Core features
  try { initNavigation(); } catch (e) { console.warn(e); }
  try { initMobileMenu(); } catch (e) { console.warn(e); }
  try { initContactActions(); } catch (e) { console.warn(e); }
  try { initContactForm(); } catch (e) { console.warn(e); }
  try { initProfileImageFallback(); } catch (e) { console.warn(e); }
  try { initBackToTop(); } catch (e) { console.warn(e); }
  try { initDynamicYear(); } catch (e) { console.warn(e); }
  try { initPageLoader(); } catch (e) { console.warn(e); }
});

/**
 * 1. Toast Notification System
 */
function showToast(message, icon = "✓", duration = 3600) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `
    <span class="toast-icon" style="font-weight: 700;">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 400);
  }, duration);
}

/**
 * 2. Sticky Navbar & Active Section Tracking
 */
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });

            mobileNavLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-60px 0px -50% 0px"
      }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }
}

/**
 * 3. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !overlay) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeMenu();
    }
  });
}

/**
 * 4. Contact Actions & Copy to Clipboard
 */
function initContactActions() {
  const copyEmailBtns = document.querySelectorAll("[data-copy-email]");
  const email = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.contact.email) || "abdalshafyyahya@gmail.com";

  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast(`Copied ${email} to clipboard!`, "📋");
          }).catch(() => {
            showToast(`Email: ${email}`, "✉️");
          });
        } else {
          showToast(`Email: ${email}`, "✉️");
        }
      } catch (err) {
        showToast(`Email: ${email}`, "✉️");
      }
    });
  });

  // CV Download Button Action
  const cvButtons = document.querySelectorAll("[data-action='download-cv']");
  cvButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cvPath = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal.cvPath) || "assets/documents/Yahya_Abdalshafy_CV.pdf";
      window.open(cvPath, "_blank");
      showToast("Accessing CV document... (You can also request it via WhatsApp/Email)", "📄", 4000);
    });
  });
}

/**
 * 5. Contact Form Validation & Mailto Handshake
 */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      showToast("Please fill in your name, email, and message.", "⚠️");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please provide a valid email address.", "⚠️");
      return;
    }

    const recipient = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.contact.email) || "abdalshafyyahya@gmail.com";
    const mailtoSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name}`);
    const mailtoBody = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoLink;
    showToast("Opening your email client... You can also chat directly on WhatsApp!", "✉️", 5000);
    form.reset();
  });
}

/**
 * 6. Profile Image Graceful Fallback
 */
function initProfileImageFallback() {
  const profileImgs = document.querySelectorAll(".profile-avatar-target");
  const userPhoto = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal.profileImage) || "assets/images/profile/yahya-portrait.jpg";

  const testImg = new Image();
  testImg.onload = () => {
    profileImgs.forEach((img) => {
      img.src = userPhoto;
    });
  };
  testImg.src = userPhoto;
}

/**
 * 7. Back-to-Top Button
 */
function initBackToTop() {
  const backToTopBtns = document.querySelectorAll(".back-to-top-btn");
  backToTopBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
}

/**
 * 8. Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * 9. Initial Page Loader Dismissal
 */
function initPageLoader() {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("loaded");
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 400);
  }
}
