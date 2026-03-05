
(function () {
    if (document.querySelector('[data-head-loader="true"]')) return;

    const marker = document.createElement("meta");
    marker.setAttribute("data-head-loader", "true");
    document.head.appendChild(marker);

    // --- Preconnects ---
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    // --- Google Fonts ---
    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href =
        "https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&family=Nunito:wght@400;500;600&display=swap";
    document.head.appendChild(fonts);



// mobile hamburger + accordion
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-nav");

  /* -----------------------
     HAMBURGER TOGGLE
  ----------------------- */

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
      hamburger.textContent = menu.classList.contains("open") ? "✕" : "☰";
    });
  }

  /* -----------------------
     ACCORDION (event delegation)
  ----------------------- */

  document.addEventListener("click", (e) => {

    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const body = header.nextElementSibling;
    if (!body) return;

    const container = header.closest(".mobile-nav");

    /* close other open accordions */
    container.querySelectorAll(".accordion-body").forEach(el => {
      if (el !== body) el.classList.remove("open");
    });

    container.querySelectorAll(".accordion-header").forEach(el => {
      if (el !== header) el.classList.remove("open");
    });

    /* toggle clicked accordion */
    body.classList.toggle("open");
    header.classList.toggle("open");

  });

  /* -----------------------
     FIX: close menu if resized
  ----------------------- */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && menu) {
      menu.classList.remove("open");
    }
  });

});


    // ---- Shared Layout Scripts ----
    function loadScript(src) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    }

    loadScript("/assets/js/my-brand-bar.js");
    loadScript("/assets/js/my-navbar.js");
    loadScript("/assets/js/mobile-nav-menu.js");
    loadScript("/assets/js/my-footer.js");
    

    const siteName = "Computing Christianity";

    if (!document.title.includes(siteName)) {
    document.title = document.title + " | " + siteName;
    }

})();
