import {contentDiv} from "./index.js";
import bakingTools from './Baking Tools.jpg';
import './style.css';
import { contactPage } from "./contactPage.js";
import { menuPage } from "./menuPage.js";

export function mainPage(){
    console.log('I am mainPage, and I am working!')

    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.innerHTML = "Boston's Best Bakery";

    const myBakingTools = new Image();
    myBakingTools.src = bakingTools;

    const mainPageCopy = document.createElement('p');
    mainPageCopy.innerText = "This is the future home of the main page content, stay tuned!";

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
    contentDiv.appendChild(myBakingTools);
    contentDiv.appendChild(mainPageCopy);
}