window.addEventListener('load', function() {


// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());

function Header() {
const deg = `\u00B0`;
const header = document.createElement('div');
header.classList.add('header');

const date = document.createElement('span');
date.classList.add('date');
date.textContent = "March 28th, 2019";

const title = document.createElement('h1');
title.textContent = "Lambda Times";

const weather = document.createElement('span');
weather.classList.add('temp');
weather.textContent = `98${deg}`;

header.appendChild(date);
header.appendChild(title);
header.appendChild(weather);

return header;
}


})