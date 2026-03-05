const NAV_CACHE = {};

function getNav(section) {

  if (!NAV_CACHE[section]) {

    NAV_CACHE[section] =
      fetch(`/nav/${section}/${section}.json`)
        .then(r => r.json());

  }

  return NAV_CACHE[section];
}
 

class NavBar extends HTMLElement {   
    constructor() {     
        super(); 
        
        // Always call super() first in the constructor  
    }   
    
 async render(){           
    const section = this.getAttribute('section');         
    const items = await getNav(section);      
    const active = this.getAttribute('active');     
    const pages_category = '/pages'   
    if (section === 'main'){      
        if (window.location.pathname != '/index.html' && window.location.pathname != '/') {
            var current = '/' + window.location.pathname.split(pages_category)[1].split('/')[1]; 
        }
        else {
            current = '/index.html'
        }
        // /pages / category
        // for main category, looks for /apologetics, /christianity, etc         
    }          
    
    else {             
        var current = window.location.pathname.split(pages_category)[1];  // for sub categories, find the name of the whole path and match with the <a> link
    }           
    
    this.innerHTML = `           
    <nav>             
        <ul> 
            ${items.map((item) => 
            `
            <li>                   
            <a class="${item.url.startsWith(current) ? "active" : ""}"  href="${item.url !== "/index.html" ? "/pages" : ""}${item.url}">${item.label}</a>                
                </li>`,
            ).join("")}            
        </ul>          
    </nav>          
    `;
  }

  connectedCallback() {
    this.render();
  }


}
   
                 
customElements.define('my-navbar', NavBar);  
