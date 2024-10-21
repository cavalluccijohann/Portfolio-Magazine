<script setup>

// Object with your magazine pages
const pages = [
  {
    id: 1,
    title: 'First Page',
    path: '/firstPage.png'
  },
  {
    id: 2,
    title: 'Second Page',
    path: '/secondPage.png'
  },
  {
    id: 3,
    title: 'Third Page',
    path: '/thirdPage.png'
  },
  {
    id: 4,
    title: 'Fourth Page',
    path: '/fourthPage.png'
  },
  {
    id: 5,
    title: 'Third Page',
    path: '/thirdPage.png'
  },
  {
    id: 6,
    title: 'Fourth Page',
    path: '/fourthPage.png'
  }
]

const pageActive = ref(1);
const timeOut = ref(700);

onMounted(async () => {
  // Get the pages
  var pages = document.getElementsByClassName('page');

  // Manage according to the size of the window
  await sizeWindowEvent(pages);

  // Listener for the windows resize
  window.addEventListener('resize', async function () {
    await sizeWindowEvent(pages);
  });


  // Listener click on every pages ( Just for Large Screen )
  var isAnimating = false;

  for (var i = 0; i < pages.length; i++) {
    // Add the page number
    pages[i].pageNum = i + 1;

    // Add the click event
    pages[i].onclick = function () {
      // Init
      const pageNum = this.pageNum;

      // Check if the screen is large
      if (window.innerWidth > 1024) {
        // Animation Management
        if (isAnimating) return;
        isAnimating = true;
        // Check if the page is even or odd
        if (pageNum % 2 === 0) {
          // check if the page is the first or the last
          if (pageNum === 2) {
            // Add the intro component
            document.getElementById('intro').classList.remove('remove-right');
            document.getElementById('intro').classList.add('add-right');
          } else if (pageNum === pages.length) {
            // Remove the contact component
            document.getElementById('contact').classList.remove('add-left');
            document.getElementById('contact').classList.add('remove-left');
          }

          document.getElementById('page-' + (pageNum)).classList.remove('flipped');
          document.getElementById('page-' + (pageNum - 1)).classList.remove('flipped');
          // change the z-index
          document.getElementById('page-' + (pageNum)).style.zIndex = pages.length - pageNum;

/*          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');*/
          pageActive.value = pageNum - 1;
        } else {
          if (pageNum === 1) {
            // Remove the intro component
            document.getElementById('intro').classList.remove('add-right');
            document.getElementById('intro').classList.add('remove-right');
          } else if (pageNum === pages.length - 1) {
            // Add the contact component
            document.getElementById('contact').classList.remove('remove-left');
            document.getElementById('contact').classList.add('add-left');
          }
          // Turn the page forward
          document.getElementById('page-' + (pageNum)).classList.add('flipped');
          document.getElementById('page-' + (pageNum + 1)).classList.add('flipped');
          // change the z-index
          document.getElementById('page-' + (pageNum + 1)).style.zIndex = pages.length;
          pageActive.value = pageNum;
        }

          setTimeout(() => {
            isAnimating = false;
          }, timeOut.value);
      }
    }
  }


  /*const bookElement = document.querySelector('.book');

  if (bookElement) {
    // check if its the not the desktop
    if (window.innerWidth < 1024) {
      bookElement.addEventListener('click', handleBookClick);
    }
  }*/

});

function handleBookClick(event) {
  const bookElement = event.currentTarget;
  const rect = bookElement.getBoundingClientRect();
  const clickX = event.clientX - rect.left; // Position X du clic relative à l'élément
  const bookWidth = rect.width;

  if (clickX < bookWidth / 2) {
    // Clic sur la moitié gauche
    console.log('left');
     turnLeft();
  } else {
    // Clic sur la moitié droite
    console.log('right');
     turnRight();
  }
}

/**
 * Function to get the height of one image and put it on the book element
 */
async function heightBook() {
  const images = document.querySelectorAll('.page img');

  // Wait for all images to load
  await Promise.all(Array.from(images).map(image => {
    return new Promise(resolve => {
      if (image.complete) {
        resolve();
      } else {
        image.addEventListener('load', resolve);
      }
    });
  }));

  // get the height of one image
  const imageHeight = images[0].clientHeight;

  // put the height on the book element
  const book = document.querySelector('.book');
  book.style.height = (imageHeight) + 'px';

  // put the width 100% on the book element
  book.style.width = '100%';
}

/**
 * Function to get the width of one image and put it on the book element
 */
async function widthBook() {
  const images = document.querySelectorAll('.page img');

  // Wait for all images to load
  await Promise.all(Array.from(images).map(image => {
    return new Promise(resolve => {
      if (image.complete) {
        resolve();
      } else {
        image.addEventListener('load', resolve);
      }
    });
  }));

  // get the width of one image
  const imageWidth = images[0].clientWidth;

  // put the width on the book element
  const book = document.querySelector('.book');
  book.style.width = ((imageWidth * 2) - 1) + 'px';

  // put the height 100% on the book element
  book.style.height = '100%';
}

/**
 * Function manage the width and height of the book element according to the size of the window
 */
async function sizeWindowEvent(pages) {
  if (window.innerWidth > 1024) {
    await widthBook();
  } else {
    await heightBook();
  }
}

/* region Mobile */

/**
 * Mobile Function for turn page to right
 */
function turnRight() {
  const currentPage = document.querySelector('.page:nth-child(' + (pageActive.value) + ')');
  const nextPage = document.querySelector('.page:nth-child(' + (pageActive.value + 1) + ')');

  if (nextPage) {
    currentPage.classList.add('flipped');
    pageActive.value++;

/*    // Réinitialiser l'indicateur après la durée de l'animation
    setTimeout(() => {
    }, 700); // 1400ms doit correspondre à la durée de votre animation CSS*/
  }
}

/**
 * Mobile Function for turn page to left
 */
function turnLeft() {
/*
  const currentPage = document.querySelector('.page:nth-child(' + (pageActive.value) + ')');
*/
  const prevPage = document.querySelector('.page:nth-child(' + (pageActive.value - 1) + ')');
  if (prevPage) {

    prevPage.classList.remove('flipped');
    pageActive.value--;

/*    // Réinitialiser l'indicateur après la durée de l'animation
    setTimeout(() => {
    }, 700); // 1400ms doit correspondre à la durée de votre animation CSS*/
  }
}

/*// Variables pour stocker les coordonnées de début et de fin du toucher
let touchStartX = 0;
let touchEndX = 0;

// Fonction pour gérer le début du toucher
function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].screenX;
}

// Fonction pour gérer la fin du toucher
function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].screenX;
  handleGesture(); // Détecter le geste
}

// Fonction pour détecter le geste
function handleGesture() {
  if (touchEndX < touchStartX) {
    // Glissement vers la gauche
    turnRight(); // Tourner la page à droite
  }
  if (touchEndX > touchStartX) {
    // Glissement vers la droite
    turnLeft(); // Tourner la page à gauche
  }
}*/

/* endregion */

</script>


<template>
  <div class="py-10 w-full h-max lg:h-screen overflow-x-hidden flex flex-col lg:flex-row place-content-center">
    <div id="intro"
         class="px-10 lg:p-0 flex flex-center justify-center w-full lg:w-[40vw] h-[87%] relative lg:absolute lg:left-14 z-10 items-center">
      <Hero :pages="pages" @update:timeOut="timeOut = $event"/>
    </div>
    <div class="lg:hidden w-full flex items-center justify-center">
      <div
          class="cursor-pointer flex items-center justify-center hover:text-color-primary/50 m-1 rounded border-color-primary border-[1px] p-1"
          @click="turnLeft()">
        <Icon name="i-lucide-step-back" class="size-4 text-color-primary/90 text-center mr-2"/>
        <span class="antonio font-medium text-sm text-color-primary ">Gauche</span>
      </div>
      <div
          class="cursor-pointer flex items-center justify-center hover:text-color-primary/50 m-1 rounded border-color-primary border-[1px] p-1"
          @click="turnRight()">
        <span class="antonio font-medium text-sm text-color-primary ">Droite</span>
        <Icon name="i-lucide-step-forward" class="size-4 text-color-primary/90 text-center ml-2"/>
      </div>
    </div>

    <div class="book w-full h-[34rem] lg:h-full transition-opacity duration-400 delay-200 my-10 lg:my-0">
      <div id="pages" style="height: inherit;"
           class="pages w-full h-inherit lg:h-full relative transform-none backface-block lg:backface-hidden rounded-md">
        <div
            v-for="page in pages"
            :key="page.id"
            :id="`page-${page.id}`"
            :style="{ zIndex: pages.length - page.id }"
            class="page min-h-100 max-w-100 bg-black float-left mb-5 bg-cover bg-no-repeat bg-left-top clear-none m-0 absolute top-0 w-auto h-full cursor-pointer select-none "
        >
          <img class="min-h-100 h-70 lg:h-full w-auto" :src="page.path" alt="page.title"/>
        </div>
      </div>
      <div class="click-zone left" @click="turnLeft"></div>
      <div class="click-zone right" @click="turnRight"></div>

    </div>

    <div id="contact"
         class="px-10 lg:p-0 flex flex-center justify-center w-full lg:w-[40vw] h-[87%] relative lg:absolute lg:right-14 z-10 lg:top-0 items-center lg:translate-x-[60vw]">
      <Contact :pages="pages" @update:timeOut="timeOut = $event"/>
    </div>
  </div>

</template>

<style scoped>


@media (max-width: 1024px) {

  .book {
    @apply relative;
  }

  .click-zone {
    @apply absolute top-0 h-full cursor-pointer z-10;
    width: 50%;
  }

  .left {
    @apply left-0;
  }

  .right {
    @apply right-0;
  }

  .book {
    perspective: 250vw;
  }

  .book .pages {
    transform-style: preserve-3d;
  }

  .book .page {
    transform-origin: 0 0;
    transition: transform 1.4s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .book .page:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.7s;
  }

  .book .page {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .book .page.flipped:nth-child(odd) {
    pointer-events: none;
    transform: rotateY(-180deg);
  }

  .book .page.flipped:nth-child(odd):before {
    background: rgba(0, 0, 0, 0.2);
  }

  .book .page.flipped:nth-child(even) {
    pointer-events: none;
    transform: rotateY(-180deg);
  }

  .book .page.flipped:nth-child(even):hover {
    transform: rotateY(15deg);
  }

  .book .page.flipped:nth-child(even):hover:before {
    background: rgba(0, 0, 0, 0.03);
  }

  .book .page.flipped:nth-child(even):before {
    background: rgba(0, 0, 0, 0);
  }

}

.page.turn-left {
  animation: turnLeftAnimation 1s forwards;
}

.page.turn-left:before {
  background: white; /* Couleur de fond blanche */
  transition: background 0.5s ease; /* Transition de couleur de fond */
}

@keyframes turnLeftAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-180deg);
  }
}

@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-60vw);
  }
}

@keyframes moveRight {
  from {
    transform: translateX(-60vw);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes moveContact {
  from {
    transform: translateX(60vw);
  }
  to {
    transform: translateX(0vw);
  }
}

@keyframes removeContact {
  from {
    transform: translateX(0vw);
  }
  to {
    transform: translateX(60vw);
  }
}

@media (min-width: 1024px) {
  .element {
    animation: moveLeft 2s linear infinite; /* Animation de 2 secondes avec une vitesse linéaire, en boucle */
  }

  .remove-right {
    animation: moveLeft 0.7s linear forwards;
  }

  .add-right {
    animation: moveRight 0.7s linear forwards;
  }

  .add-left {
    animation: moveContact 0.7s linear forwards;
  }

  .remove-left {
    animation: removeContact 0.7s linear forwards;
  }

  .book {
    perspective: 250vw;
  }

  .book .pages {
    transform-style: preserve-3d;
  }

  .book .page {
    transform-origin: 0 0;
    transition: transform 1.4s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .book .page:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.7s;
    z-index: 2;
  }

  .book .page:nth-child(odd) {
    pointer-events: all;
    transform: rotateY(0deg);
    right: 0;
    border-radius: 0 4px 4px 0;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, 0) 10%);
  }

  .book .page:nth-child(odd):hover {
    transform: rotateY(-15deg);
  }

  .book .page:nth-child(odd):hover:before {
    background: rgba(0, 0, 0, 0.03);
  }

  .book .page:nth-child(odd):before {
    background: rgba(0, 0, 0, 0);
  }

  .book .page:nth-child(even) {
    pointer-events: none;
    transform: rotateY(180deg);
    transform-origin: 100% 0;
    left: 0;
    border-radius: 4px 0 0 4px;
    border-color: black;
    background-image: linear-gradient(to left, rgba(0, 0, 0, .12) 0%, rgba(0, 0, 0, 0) 10%);
  }

  .book .page:nth-child(even):before {
    background: rgba(0, 0, 0, 0.2);
  }

  .book .page.grabbing {
    transition: none;
  }

  .book .page.flipped:nth-child(odd) {
    pointer-events: none;
    transform: rotateY(-180deg);
  }

  .book .page.flipped:nth-child(odd):before {
    background: rgba(0, 0, 0, 0.2);
  }

  .book .page.flipped:nth-child(even) {
    pointer-events: all;
    transform: rotateY(0deg);
  }

  .book .page.flipped:nth-child(even):hover {
    transform: rotateY(15deg);
  }

  .book .page.flipped:nth-child(even):hover:before {
    background: rgba(0, 0, 0, 0.03);
  }

  .book .page.flipped:nth-child(even):before {
    background: rgba(0, 0, 0, 0);
  }

  .page:nth-child(odd) {
    background-position: right top;
  }
}
</style>
