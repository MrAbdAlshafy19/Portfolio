/**
 * ====================================================================
 * YAHYA ABDALSHAFY PORTFOLIO - PROJECTS & LIGHTBOX MODULE
 * Project Details Modals & Screenshot Lightbox Viewer
 * ====================================================================
 */

const ProjectsModule = (function () {
  let lightboxModal = null;
  let lightboxImg = null;
  let lightboxCaption = null;
  let projectModal = null;
  let projectModalBody = null;
  let projectModalTitle = null;

  /**
   * Initialize Lightbox Elements & Listeners
   */
  function initLightbox() {
    lightboxModal = document.getElementById("screenshot-lightbox");
    lightboxImg = document.getElementById("lightbox-img");
    lightboxCaption = document.getElementById("lightbox-caption");

    if (!lightboxModal) return;

    // Close button
    const closeBtn = lightboxModal.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    // Backdrop click
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  /**
   * Open Lightbox with specified image
   */
  function openLightbox(src, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "Project Screenshot Preview";
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || "";
    }
    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
    if (lightboxImg) lightboxImg.src = "";
  }

  /**
   * Initialize Project Details Modal
   */
  function initProjectModal() {
    projectModal = document.getElementById("project-details-modal");
    projectModalBody = document.getElementById("project-modal-body");
    projectModalTitle = document.getElementById("project-modal-title");

    if (!projectModal) return;

    const closeBtn = projectModal.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeProjectModal);
    }

    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && projectModal.classList.contains("active")) {
        closeProjectModal();
      }
    });
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  /**
   * Open full modal for a specific project
   */
  function openProjectModal(projectId) {
    if (!window.PORTFOLIO_CONFIG || !window.PORTFOLIO_CONFIG.projects) return;
    const project = window.PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId);
    if (!project) return;

    if (projectModalTitle) {
      projectModalTitle.textContent = project.title;
    }

    let componentsHTML = "";
    if (project.components && project.components.length > 0) {
      componentsHTML = `
        <div style="margin-top: 24px;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 14px;">Platform Architecture & Core Modules</h4>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${project.components
              .map(
                (c) => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); padding: 16px 20px; border-radius: 10px;">
                <h5 style="color: var(--primary-accent); font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;">${c.title}</h5>
                <p style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;">${c.details}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    let datasetHTML = "";
    if (project.datasetInfo) {
      datasetHTML = `
        <div style="margin-top: 24px; background: var(--bg-secondary); border: 1px solid var(--border-subtle); padding: 20px; border-radius: 12px;">
          <h4 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--primary-accent); margin-bottom: 12px;">Dataset Specifications</h4>
          <ul style="display: flex; flex-direction: column; gap: 8px; font-size: 0.875rem; color: var(--text-secondary);">
            <li><strong>Dataset Source:</strong> ${project.datasetInfo.name}</li>
            <li><strong>Total Volume:</strong> ${project.datasetInfo.observations}</li>
            <li><strong>Temporal Granularity:</strong> ${project.datasetInfo.granularity}</li>
            <li><strong>Distribution Scope:</strong> ${project.datasetInfo.zones}</li>
            <li><strong>Variables Analyzed:</strong> ${project.datasetInfo.features}</li>
          </ul>
        </div>
      `;
    }

    let scopeHTML = "";
    if (project.scope && project.scope.length > 0) {
      scopeHTML = `
        <div style="margin-top: 24px;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Engineering Scope & Pipeline Stages</h4>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
            ${project.scope
              .map(
                (s, i) => `
              <div style="background: var(--bg-secondary); padding: 12px 14px; border-radius: 8px; font-size: 0.85rem; color: var(--text-secondary); border: 1px solid var(--border-subtle);">
                <span style="color: var(--primary-accent); font-weight: 700; margin-right: 6px;">0${i + 1}.</span> ${s}
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    const techTagsHTML = project.techStack
      .map((t) => `<span class="stack-tag">${t}</span>`)
      .join("");

    let liveDemoBtn = "";
    if (project.liveDemoUrl) {
      liveDemoBtn = `
        <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Launch Streamlit App
        </a>
      `;
    }

    if (projectModalBody) {
      projectModalBody.innerHTML = `
        <div>
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px;">
            <span class="badge badge-primary">${project.category}</span>
            <span class="badge ${project.statusType === "success" ? "badge-success" : "badge-warning"}">${project.status}</span>
          </div>

          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
            ${project.fullDescription.replace(/\n\n/g, "</p><p style='font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;'>")}
          </p>

          ${componentsHTML}
          ${datasetHTML}
          ${scopeHTML}

          <div style="margin-top: 28px;">
            <h4 style="font-family: var(--font-heading); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 10px;">Technology Stack</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${techTagsHTML}
            </div>
          </div>

          <div style="margin-top: 32px; display: flex; gap: 14px; flex-wrap: wrap;">
            ${liveDemoBtn}
            <button class="btn btn-secondary" onclick="ProjectsModule.closeProjectModal()">Close Overview</button>
          </div>
        </div>
      `;
    }

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  /**
   * Bind screenshot trigger elements throughout page
   */
  function bindTriggers() {
    // Screenshot click elements
    const triggers = document.querySelectorAll("[data-lightbox-src]");
    triggers.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const src = el.getAttribute("data-lightbox-src");
        const caption = el.getAttribute("data-lightbox-caption") || el.getAttribute("alt") || "";
        openLightbox(src, caption);
      });
    });

    // Project modal trigger buttons
    const modalButtons = document.querySelectorAll("[data-project-modal]");
    modalButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const pid = btn.getAttribute("data-project-modal");
        openProjectModal(pid);
      });
    });
  }

  function init() {
    initLightbox();
    initProjectModal();
    bindTriggers();
  }

  return {
    init,
    openLightbox,
    closeLightbox,
    openProjectModal,
    closeProjectModal
  };
})();

