// Selectors: ".swagger" <- by id, "#swagger" <- by class

console.clear()
console.log('Starting create particles');

setTimeout(() => { 
  const injectionTarget = document.querySelector(".info") // document.querySelector("section") || document.querySelector(".swagger-ui");
//   const wrapperList = document.querySelectorAll('.wrapper')
  (function(){
 for (let i = 0; i < 20; i++) {
    const elem = document.createElement('div');
    elem.classList.add('particle')
    injectionTarget.appendChild(elem);
    // document.body.appendChild(elem);
  }
  })();
}, 0);

function sayText(text) {
  console.log(text);
}

