window.addEventListener('load', function(){
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let carouselWrapper = document.querySelector('.carousel-container');

let carousel  = document.createElement('div');
carousel.classList.add('carousel');

let leftBtn = document.createElement('div');
leftBtn.classList.add('left-button--prev', 'prev');

let rightBtn = document.createElement('div');
rightBtn.classList.add('right-button--next', 'next');

let image1 = document.createElement('img');
image1.classList.add('carousel-photo', 'initial');
image1.src = "./assets/carousel/mountains.jpeg"

let image2 = document.createElement('img');
image2.classList.add('carousel-photo');
image2.src = "./assets/carousel/computer.jpeg"

let image3 = document.createElement('img');
image3.classList.add('carousel-photo');
image3.src = "./assets/carousel/trees.jpeg"

let image4 = document.createElement('img');
image4.classList.add('carousel-photo');
image4.src = "./assets/carousel/turntable.jpeg"

carouselWrapper.appendChild(carousel);
carousel.appendChild(leftBtn);
carousel.appendChild(image1);
carousel.appendChild(image2);
carousel.appendChild(image3);
carousel.appendChild(image4);
carousel.appendChild(rightBtn);

})