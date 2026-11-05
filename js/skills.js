/**
 * ====================================================================
 * YAHYA ABDALSHAFY PORTFOLIO - TECHNICAL SKILLS MODULE
 * Dynamic Skills Filter & Animated Progress Indicators
 * ====================================================================
 */

const SkillsModule = (function () {
  /**
   * Filter skills by category tab
   */
  function setupCategoryFilter() {
    const tabButtons = document.querySelectorAll(".skills-tab-btn");
    const categories = document.querySelectorAll(".skills-category-wrapper");

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetCategory = btn.getAttribute("data-filter");

        categories.forEach((cat) => {
          if (targetCategory === "all" || cat.getAttribute("data-category") === targetCategory) {
            cat.style.display = "block";
          } else {
            cat.style.display = "none";
          }
        });

        triggerBarAnimations();
      });
    });
  }

  /**
   * Trigger skill progress bar animations
   */
  function triggerBarAnimations() {
    const bars = document.querySelectorAll(".skill-bar-fill");
    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-target-width");
      if (targetWidth) {
        bar.style.width = targetWidth;
      }
    });
  }

  function setupScrollTrigger() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerBarAnimations();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(skillsSection);
    } else {
      triggerBarAnimations();
    }
  }

  function init() {
    setupCategoryFilter();
    setupScrollTrigger();
  }

  return {
    init,
    triggerBarAnimations
  };
})();
