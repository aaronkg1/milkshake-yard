import './styles.css';
import {menuItems} from './page-load.js'
import {homeDisplay} from './page-load.js'
import {menuDisplay} from './page-load.js'
import {contactDisplay} from './page-load.js'




const buttonInit = (() => {
    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
    homeDisplay();
    })

    const menuTab = document.querySelector('#menu');
    menuTab.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';  
        const title = document.createElement('h1');
        title.textContent = 'Milkshake Yard';
        content.appendChild(title);
        const menuTitle = document.createElement('h3');
        menuTitle.textContent = 'Menu';
        content.appendChild(menuTitle);
        menuDisplay(menuItems);   
    })

    const contactTab = document.querySelector('#contact');
    contactTab.addEventListener('click', () => {
        content.innerHTML = '';
        contactDisplay();
    })
    homeDisplay();
})();





