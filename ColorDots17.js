console.clear()

const particleArr = [];

// window.onload = function() {
//    console.log('Particles module loaded.');
//    setTimeout(() => { enableParticles("#info") }, 2500);
// }

function enableParticles(key) {
  const injectionTarget = document.querySelector(key) || document.body;
  (function(){
    for (let i = 0; i < 20; i++) {
       const elem = document.createElement('div');
       elem.classList.add('particle');
       elem.id = `particle${i}`;
       injectionTarget.appendChild(elem);
       particleArr.push(elem);
     }
  })();
}

function deleteParticles() { 
   for (const elem of particleArr) elem.remove();
}

function selectorDeleteParticles() {
   const arr = document.querySelectorAll('.particle')
   for (const elem of arr) elem.remove();
}

function test(data) {
  console.log(data);
}

