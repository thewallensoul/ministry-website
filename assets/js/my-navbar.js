 
 
class NavBar extends HTMLElement {   
    constructor() {     
        super(); 
        
        // Always call super() first in the constructor  
    }   
    
 async render(){           
    const section = this.getAttribute('section');         
    const items = await fetch(`/nav/${section}/${section}.json`).then(r => r.json());       
    const active = this.getAttribute('active');        
    if (section === 'main'){            
        var current = '/' + window.location.pathname.split('/')[1];  // for main category, looks for /apologetics, /christianity, etc         
    }          
    
    else {             
    var current = window.location.pathname.replace('html', '');  // for sub categories, find the name of the whole path and match with the <a> link
    }           
    
    this.innerHTML = `           
    <nav>             
        <ul> 
        ${items.map(item => `                 
        <li>                   
        <a class="${item.url.startsWith(current) ? 'active' : ''}"  href="${item.url}">${item.label}</a>                
            </li>`).join('')}            
            </ul>          
            </nav>          
            `;        
            }   
            
            connectedCallback() {
            this.render();   
        }   
        }   
   
                 
customElements.define('my-navbar', NavBar);  
