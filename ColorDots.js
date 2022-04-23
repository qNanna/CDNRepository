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
    elem.style.cssText = css;
    document.body.appendChild(elem);
  }
  })();
}, 5000);

function sayText(text) {
  console.log(text);
}

const css = `
body {
    background: #ecf3f3;
}

.particle {
	position: absolute;
 	border-radius: 50%;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}
	
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 5 + px;
		opacity: random(100)/100;
		height: $size;
		width: $size;
		animation-delay: -$i * .2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: hsl(random(360), 70%, 50%);
	}
}
`

