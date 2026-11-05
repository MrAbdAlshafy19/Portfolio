/**
 * ====================================================================
 * YAHYA ABDALSHAFY PORTFOLIO - THEME SYSTEM
 * Dark & Light Mode Controller with Persistence & System Detection
 * Bulletproof on both HTTP/HTTPS and local file:// protocols
 * ====================================================================
 */

const ThemeManager = (function () {
  const THEME_STORAGE_KEY = "ya_portfolio_theme";
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";

  // Elements
  let themeToggleBtn = null;
  let mobileThemeToggleBtn = null;

  /**
   * Safe localStorage getter
   */
  function safeGetItem(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (err) {
      // Access denied on file:// protocol or private browsing
    }
    return null;
  }

  /**
   * Safe localStorage setter
   */
  function safeSetItem(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (err) {
      // Storage unavailable on file://
    }
  }

  /**
   * Determine initial theme based on localStorage, or system preference
   */
  function getPreferredTheme() {
    const savedTheme = safeGetItem(THEME_STORAGE_KEY);
    if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
      return savedTheme;
    }

    // Default to dark as primary visual experience
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return THEME_LIGHT;
      }
    } catch (e) {
      // Fallback
    }
    return THEME_DARK;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    if (document.documentElement) {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (document.body) {
      document.body.setAttribute("data-theme", theme);
    }
    safeSetItem(THEME_STORAGE_KEY, theme);

    // Update aria attributes and button states
    const isDark = theme === THEME_DARK;
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("aria-label", label);
      themeToggleBtn.setAttribute("title", label);
    }
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.setAttribute("aria-label", label);
      mobileThemeToggleBtn.setAttribute("title", label);
    }

    // Dispatch custom event for canvas or animations if needed
    try {
      window.dispatchEvent(new CustomEvent("themechanged", { detail: { theme } }));
    } catch (e) {}
  }

  /**
   * Toggle between themes
   */
  function toggleTheme() {
    const currentTheme = (document.documentElement && document.documentElement.getAttribute("data-theme")) || THEME_DARK;
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);
  }

  /**
   * Initialize theme listeners
   */
  function init() {
    themeToggleBtn = document.getElementById("theme-toggle");
    mobileThemeToggleBtn = document.getElementById("mobile-theme-toggle");

    // Apply preferred theme on startup
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    // Event listeners
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    }
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.addEventListener("click", toggleTheme);
    }

    // System theme change listener (only applies if user hasn't explicitly set preference)
    try {
      if (window.matchMedia) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
          if (!safeGetItem(THEME_STORAGE_KEY)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
          }
        });
      }
    } catch (e) {}
  }

  return {
    init,
    toggleTheme,
    getCurrentTheme: () => (document.documentElement && document.documentElement.getAttribute("data-theme")) || THEME_DARK
  };
})();

// Execute initial theme setting immediately with safe check
(function () {
  try {
    let saved = null;
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        saved = window.localStorage.getItem("ya_portfolio_theme");
      }
    } catch (e) {}

    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (err) {
    // Fallback default
    if (document.documentElement) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
})();
