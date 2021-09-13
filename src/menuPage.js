import {contentDiv} from "./index.js";
import candyJars from './Candy Jars.jpg';
import './style.css';
import { mainPage } from "./mainPage.js";
import { contactPage } from "./contactPage.js";

export function menuPage(){
    console.log('I am menuPage, and I am working!')

    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.innerHTML = "Boston's Best Bakery";

    const myCandyJars = new Image();
    myCandyJars.src = candyJars;

    const mainPageCopy = document.createElement('p');
    mainPageCopy.innerText = "This is the future home of the menu page content, stay tuned!";

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
    contentDiv.appendChild(myCandyJars);
    contentDiv.appendChild(mainPageCopy);
}