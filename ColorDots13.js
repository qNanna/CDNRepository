console.clear()
console.log('Starting create particles');
window.onload = function() {
   const injectionTarget = document.querySelector(".info");
  (function(){
 for (let i = 0; i < 20; i++) {
    const elem = document.createElement('div');
    elem.classList.add('particle')
    injectionTarget.appendChild(elem);
    // document.body.appendChild(elem);
  }
  })();
}

function sayText(text) {
  console.log(text);
}

