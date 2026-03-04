 
 
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
      <h1 class="footer-title">Computing Christ</h1>
      <p class="footer-tagline">
        Thinking clearly about Christ through Scripture,
        Philosophy, Science, and Evidence.
      </p>
    </div>

    <div class="footer-column">
      <h4>Explore</h4>
      <ul class="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Apologetics</a></li>
        <li><a href="#">Theology</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Connect</h4>
      <ul class="footer-links">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Email</a></li>
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


