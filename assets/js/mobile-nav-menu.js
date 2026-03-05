class MobileNav extends HTMLElement {

  async connectedCallback() {

    const main = await getNav("main");

    let html = '';

    for (const item of main) {

      // section name derived from url
      const match = item.url.match(/\/([^\/]+)\/home\.html/);

      if (match) {

        const section = match[1];

        html += `
          <div class="accordion">
            <button class="accordion-header">${item.label}</button>
            <div class="accordion-body">
              <my-navbar section="${section}"></my-navbar>
            </div>
          </div>
        `;

      } else {

        html += `
          <a class="mobile-single" href="${item.url}">
            ${item.label}
          </a>
        `;

      }

    }

    this.innerHTML = html;

  }

}

customElements.define('mobile-nav-menu', MobileNav);