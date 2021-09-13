import {contentDiv} from "./index.js";
import bakingSupplies from './Baking Supplies.jpg';
import './style.css';
import { mainPage } from "./mainPage.js";
import { menuPage } from "./menuPage.js";

export function contactPage(){
    console.log('I am contactPage, and I am working!')
    
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.innerHTML = "Boston's Best Bakery";

    const myBakingSupplies = new Image();
    myBakingSupplies.src = bakingSupplies;

    const mainPageCopy = document.createElement('p');
    mainPageCopy.innerText = "This is the future home of the contact page info, stay tuned!";

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "buttonDiv";

    const mainPageBtn = document.createElement('button');
    const contactPageBtn = document.createElement('button');
    const menuPageBtn = document.createElement('button');

    mainPageBtn.innerHTML = 'Click me to go to the main page!';
    contactPageBtn.innerHTML = 'Click me to go to the contact page!';
    menuPageBtn.innerHTML = 'Click me to go to the menu page!';

    mainPageBtn.onclick = mainPage;
    contactPageBtn.onclick = contactPage;
    menuPageBtn.onclick = menuPage;

    contentDiv.appendChild(headline);
    buttonDiv.appendChild(mainPageBtn);
    buttonDiv.appendChild(contactPageBtn);
    buttonDiv.appendChild(menuPageBtn);
    contentDiv.appendChild(buttonDiv);
    contentDiv.appendChild(myBakingSupplies);
    contentDiv.appendChild(mainPageCopy);
}