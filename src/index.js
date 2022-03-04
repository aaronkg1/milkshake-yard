import Food from './milkshake.png';
import './styles.css';
import {menuItems} from './page-load.js'

const tabDisplays = (() => {
    function homeDisplay() {

        const content = document.getElementById('content');
        content.innerHTML = '';
        const title = document.createElement('h1');
        title.textContent = 'Milkshake Yard';
        const mainText = document.createElement('p');
        mainText.classList.add('main-text');
        mainText.textContent = "Our milkshake brings everyone to the yard. And damn right, they're better than all the others. We have every possible flavour combination to serve you, but unfortunately we do have to charge. But it's worth every penny...so what are you waiting for?"
        const foodImage = new Image();
        foodImage.src = Food;
        foodImage.classList.add('milkshake');
        
        content.appendChild(title);
        content.appendChild(mainText);
        content.appendChild(foodImage);
        }

    function menuDisplay(menuList) {

        const content = document.querySelector('#content');
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
         menuList.forEach(item => {
                menuContainer.appendChild(createMenuItem(item.name, item.description, item.price))
            })
            content.appendChild(menuContainer);
        }    
        
    function contactDisplay() {
            const content = document.querySelector('#content');
            const title = document.createElement('h1');
            title.textContent = 'Milkshake Yard'
            content.appendChild(title);
            const contactContainer = document.createElement('div');
            contactContainer.classList.add('contact');
            const contactTitle = document.createElement('h3');
            contactTitle.textContent = 'Contact Us';
            const telephoneNumber = document.createElement('p');
            telephoneNumber.textContent = 'Tel: 07777777777';
            const emailContact = document.createElement('p');
            emailContact.innerHTML = 'Email: <a href="">milkshakeyard@cometotheyard.com</a>';
            const address = document.createElement('p');
            address.textContent = 'Address: Milkshake Yard, Milky Way Road, Milkerton, C0W M00';
            contactContainer.appendChild(contactTitle);
            contactContainer.appendChild(telephoneNumber);
            contactContainer.appendChild(emailContact);
            contactContainer.appendChild(address);
            content.appendChild(contactContainer);
        }

        homeDisplay();
        
        return {homeDisplay, menuDisplay, contactDisplay }
})();



const buttonInit = (() => {
    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
    tabDisplays.homeDisplay();
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
        tabDisplays.menuDisplay(menuItems);   
    })

    const contactTab = document.querySelector('#contact');
    contactTab.addEventListener('click', () => {
        content.innerHTML = '';
        tabDisplays.contactDisplay();
    })
})();



function createMenuItem(name, description, price) {

const menuItem = document.createElement('div');
menuItem.classList.add('menu-item');
const itemTitle = document.createElement('h4');
itemTitle.textContent = name;
const itemDescription = document.createElement('p');
itemDescription.textContent = description;
const itemPrice = document.createElement('p');
itemPrice.textContent = price;
menuItem.appendChild(itemTitle);
menuItem.appendChild(itemDescription);
menuItem.appendChild(itemPrice);
return menuItem;
}


