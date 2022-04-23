// console.clear()
// document.querySelector(".info").addEventListener('load', function(e){
//     console.log('Info loaded ', e);
// });

console.log('Starting create particles');
setTimeout(() => { 
  (function(){
 for (let i = 0; i < 20; i++) {
    const elem = document.createElement('div');
    elem.classList.add('particle')
    elem.style.cssText = '';
    document.body.appendChild(elem);
  }
  })();
}, 5000);

function sayText(text) {
  console.log(text);
}



