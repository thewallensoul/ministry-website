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

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        links.forEach(link => link.classList.remove("active"));

        const activeLink =
          sidebar.querySelector(`a[href="#${entry.target.id}"]`);

        if (activeLink) {
          activeLink.classList.add("active");

          /* keep active item visible in sidebar */
          activeLink.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          });
        }

      }

    });

  }, {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0
  });

  headings.forEach(h => observer.observe(h));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTOC);
} else {
  initTOC();
}