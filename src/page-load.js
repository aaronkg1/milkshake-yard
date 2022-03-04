import Food from './milkshake.png';

const menuItems = 
   [
    {
        name: 'Banana',
        description: 'This shake is bananas, b-a-n-a-n-a-s.',
        price: '£3.00',
    },
{
    name: 'Chocolate',
        description: 'The humble chocolate shake',
        price: '£3.00',
},
{
    name: 'Strawberry',
        description: 'The freshest strawberries go into this',
        price: '£3.00',
},
{
    name: 'Triple Threat',
        description: 'Banana, chocolate and strawberries all in one.',
        price: '£4.00',
},
{
    name: 'Oreo',
        description: 'Oreo biscuits and oreo ice cream',
        price: '£3.00',
},
{
    name: 'Peanut Butter & Chocolate',
        description: 'Peanut Butter & chocolate shake',
        price: '£3.50',
},
{
    name: 'Bacon & Eggs',
        description: 'A greasy breakfast shake',
        price: '£3.50',
},
{
    name: 'Lorem Ipsum',
        description: 'A delicious blend of random words',
        price: '£3.50',
},
]

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

export {menuItems, homeDisplay, menuDisplay, contactDisplay}