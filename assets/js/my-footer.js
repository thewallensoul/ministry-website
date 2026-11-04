 
 
class MyFooter extends HTMLElement {   
    constructor() {     
        super(); 
        
        // Always call super() first in the constructor  
    }   
    
 async render(){           
    this.innerHTML = `           
<footer class="site-footer">
  <div class="footer-container">

    <div class="footer-column">
      <h1 class="footer-title">Computing Christianity</h1>
      <p class="footer-tagline">
        Thinking clearly about Christ through Scripture,
        Philosophy, Science, and Evidence.
      </p>
    </div>

    <div class="footer-column">
      <h4>Explore</h4>
      <ul class="footer-links">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/pages/case_for_christianity/home.html">Case for Christianity</a></li>
        <li><a href="/pages/christianity/home.html">Christianity</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>About</h4>
      <ul class="footer-links">
        <li><a href="/pages/about/home.html">About Us</a></li>
        <li><a href="/pages/about/support.html">Support</a></li>
        <li><a href="/pages/about/privacy-policy.html">Privacy Policy</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Connect</h4>
      <ul class="footer-links">
        <li><a href="mailto:contact@computingchristianity.com">contact@computingchristianity.com</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    © 2026 Matthew Jang
  </div>

</footer>        
    `;
  }

  connectedCallback() {
    this.render();
  }
}
   
                 
customElements.define('my-footer', MyFooter);  


