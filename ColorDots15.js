console.clear()
console.log('Starting create particles');

document.addEventListener("DOMContentLoaded", () => {
   window.onload = function() {
      setTimeout(() => {
         const injectionTarget = document.querySelector(".info") || document.querySelector("#info") || document.querySelector("info");
        (function(){
          for (let i = 0; i < 20; i++) {
             const elem = document.createElement('div');
             elem.classList.add('particle')
             injectionTarget.appendChild(elem);
             // document.body.appendChild(elem);
           }
        })();
      }, 1000)
   }
});

function sayText(text) {
  console.log(text);
}

