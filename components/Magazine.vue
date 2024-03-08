<script setup lang="js">
onMounted(() => {
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
  }

    for(var i = 0; i < pages.length; i++) {
      console.log('DOMContentLoaded', i);
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function() {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
        } else {
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
        }
      }
    }
});
</script>


<template>
  <div class="book">
    <div id="pages" class="pages">
      <div class="page">
        <img src="public/firstPage.png">
      </div>
      <div class="page">
        <img src="public/secondPage.png">
      </div>
      <div class="page">
        <img src="public/thirdPage.png">
      </div>
      <div class="page">
        <img src="public/fourthPage.png">
      </div>
      <div class="page">
        <img src="public/fifthPage.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.book {
  transition: opacity 0.4s 0.2s;
}
p{
  margin-top: 8vw;
  text-align: center;
  font-size: 5vw;
  color: #000000;
}
.page {
  width: 30vw;
  height: 44vw;
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
  width: 60vw;
  height: 44vw;
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
  width: 30vw;
  height: auto;
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
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  line-height: 1.5em;
}
.page:nth-child(odd){
  background-position: right top;
}
</style>