class BrandBar extends HTMLElement {
  constructor() {
    super();

    // Always call super() first in the constructor
  }

  async render() {
    this.innerHTML = `           
    <div class="brand-bar">   
        <div class="brand-left">
            <img src="/assets/images/logo1.png" alt="Computing Christ Logo" class="brand-logo">
            <span class="brand-name">Computing Christianity</span>
        </div>          
        
        <!--
        <div class="brand-center">
        <form class="search-form">
            <div class="search-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/>
                <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" stroke-width="2"/>
            </svg>

            <input 
                type="text" 
                class="search-input" 
                placeholder="Search"
            >
            </div>
        </form>
        </div> -->

        <div class="brand-right">
             <a href="/donate/home.html" class="donate-button">Donate</a>
        </div>
  </div>         
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-brand-bar", BrandBar);
