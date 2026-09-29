function initTOC() {

  const article = document.querySelector("article");
  const sidebar = document.getElementById("toc-sidebar");

  if (!article || !sidebar) return;

  const sidebar_title = document.createElement('p');
  sidebar_title.id = 'toc-sidebar-title';
  sidebar_title.textContent = 'On This Page';

  sidebar.appendChild(sidebar_title);

  const headings = article.querySelectorAll("h2, h3");

  const ul = document.createElement("ul");

  headings.forEach(heading => {

    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
    }

    const li = document.createElement("li");

    if (heading.tagName === "H2") {
      li.style.marginLeft = "1rem";
      li.style.fontWeight = "1000";
      li.style.borderBottom = "solid 1px var(--accent)";
    }

    if (heading.tagName === "H3") {
      li.style.marginLeft = "2.5rem";
    }

    const a = document.createElement("a");

    a.href = "#" + heading.id;
    a.textContent = heading.textContent;

    li.appendChild(a);
    ul.appendChild(li);

  });

  sidebar.appendChild(ul);

    /* =========================
     SECTION HIGHLIGHTING
  ========================= */

  const links = sidebar.querySelectorAll("a");

  const updateActiveHeading = () => {
    const activationLine = window.innerHeight * 0.35;
    let currentHeading = headings[0];

    headings.forEach(heading => {
      if (heading.getBoundingClientRect().top <= activationLine) {
        currentHeading = heading;
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    const activeLink = sidebar.querySelector(`a[href="#${currentHeading.id}"]`);
    if (!activeLink) return;

    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "location");

    const sidebarBounds = sidebar.getBoundingClientRect();
    const linkBounds = activeLink.getBoundingClientRect();

    if (linkBounds.top < sidebarBounds.top) {
      sidebar.scrollTop -= sidebarBounds.top - linkBounds.top;
    } else if (linkBounds.bottom > sidebarBounds.bottom) {
      sidebar.scrollTop += linkBounds.bottom - sidebarBounds.bottom;
    }
  };

  let updateScheduled = false;
  window.addEventListener("scroll", () => {
    if (updateScheduled) return;
    updateScheduled = true;
    window.requestAnimationFrame(() => {
      updateScheduled = false;
      updateActiveHeading();
    });
  }, { passive: true });
  window.addEventListener("resize", updateActiveHeading);
  updateActiveHeading();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTOC);
} else {
  initTOC();
}
