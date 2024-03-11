<script setup lang="js">

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
  }
]

onMounted(() => {

  // Listenere for the resize event
  window.addEventListener('resize', function() {
    widthBook();
  });

  // Get the width of one image and put it on the book element
  widthBook();

  // Function to get the width of one image and put it on the book element
  function widthBook() {
    const images = document.querySelectorAll('.page img');
    let totalWidth = 0;

    // get the width of one image
    const imageWidth = images[0].clientWidth;

    // put the width on the book element
    const book = document.querySelector('.book');
    book.style.width = ((imageWidth * 2) - 1) + 'px';
  }

  document.getElementById('contact').classList.add('remove-left');
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
  }

    for(var i = 0; i < pages.length; i++) {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function() {
        console.log('click', this.pageNum);
        if (this.pageNum % 2 === 0) {
          if (this.pageNum === 2) {
            document.getElementById('intro').classList.remove('remove-right');
            document.getElementById('intro').classList.add('add-right');
          } else if (this.pageNum === pages.length) {
            document.getElementById('contact').classList.remove('add-left');
            document.getElementById('contact').classList.add('remove-left');
          }
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
        } else {
          if (this.pageNum === 1) {
            document.getElementById('intro').classList.remove('add-right');
            document.getElementById('intro').classList.add('remove-right');
          }
          else if (this.pageNum === pages.length - 1) {
            document.getElementById('contact').classList.remove('remove-left');
            document.getElementById('contact').classList.add('add-left');
          }
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
        }
      }
    }
});

</script>


<template>
  <div class="py-10 h-screen overflow-x-hidden">
    <div id="intro" class="flex flex-center justify-center w-[40vw] h-[87%] absolute left-14 z-10 items-center">
      <Hero />
    </div>
    <div class="book">
      <div id="pages" class="pages">
        <div
            v-for="page in pages"
            :key="page.id"
            class="page"
        >
          <img class="min-h-100 h-full w-auto" :src="page.path" />
        </div>
      </div>
    </div>
    <div id="contact" class="flex justify-center w-[40vw] h-[87%] absolute right-14 z-10 top-0 items-center">
      <Contact />
    </div>
  </div>

</template>

<style scoped>

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
  width: 40vw;
  height: 100%; /* Modifier la hauteur */
  transition: opacity 0.4s 0.2s;
}
p{
  margin-top: 8vw;
  text-align: center;
  font-size: 5vw;
  color: #000000;
}
.page {
  min-height: 100%;
  max-width: 100%;
  background-color: #111111;
  float: left;
  margin-bottom: 0.5em;
  background: left top no-repeat;
  background-size: cover;
}
.page:nth-child(even) {
  clear: both;
}
.book {
  perspective: 250vw;
}
.book .pages {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 4px;
  /*box-shadow: 0 0 0 1px #e3dfd8;*/
}
.book .page {
  float: none;
  clear: none;
  margin: 0;
  position: absolute;
  top: 0;
  width: auto;
  height: 100%;
  transform-origin: 0 0;
  transition: transform 1.4s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;
  background-color: #f0f0f0;
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
  background-image: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%);
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
  background-image: linear-gradient(to left, rgba(0,0,0,.12) 0%, rgba(0,0,0,0) 10%);
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
*,
* :before,
*:after {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Lovers Quarrel', cursive;
  background: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.page:nth-child(odd){
  background-position: right top;
}
</style>