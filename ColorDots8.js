// Selectors: ".swagger" <- by id, "#swagger" <- by class

console.clear()
console.log('Starting create particles');

setTimeout(() => { 
  const injectionTarget = document.querySelector("section");
  (function(){
 for (let i = 0; i < 20; i++) {
    const elem = document.createElement('div');
    elem.classList.add('particle')
    elem.style.cssText = css;
    injectionTarget.appendChild(elem);
    // document.body.appendChild(elem);
  }
  })();
}, 0);

function sayText(text) {
  console.log(text);
}

// 
const css = `
body {
  background: #ecf3f3;
}

.particle {
  position: absolute;
  border-radius: 50%;
}

@-webkit-keyframes particle-animation-1 {
  100% {
    -webkit-transform: translate3d(31vw, 87vh, 29px);
            transform: translate3d(31vw, 87vh, 29px);
  }
}

@keyframes particle-animation-1 {
  100% {
    -webkit-transform: translate3d(31vw, 87vh, 29px);
            transform: translate3d(31vw, 87vh, 29px);
  }
}
.particle:nth-child(1) {
  -webkit-animation: particle-animation-1 60s infinite;
          animation: particle-animation-1 60s infinite;
  opacity: 0.22;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
  -webkit-transform: translate3d(13vw, 35vh, 72px);
          transform: translate3d(13vw, 35vh, 72px);
  background: #26d985;
}

@-webkit-keyframes particle-animation-2 {
  100% {
    -webkit-transform: translate3d(82vw, 33vh, 99px);
            transform: translate3d(82vw, 33vh, 99px);
  }
}

@keyframes particle-animation-2 {
  100% {
    -webkit-transform: translate3d(82vw, 33vh, 99px);
            transform: translate3d(82vw, 33vh, 99px);
  }
}
.particle:nth-child(2) {
  -webkit-animation: particle-animation-2 60s infinite;
          animation: particle-animation-2 60s infinite;
  opacity: 0.45;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
  -webkit-transform: translate3d(77vw, 70vh, 76px);
          transform: translate3d(77vw, 70vh, 76px);
  background: #56d926;
}

@-webkit-keyframes particle-animation-3 {
  100% {
    -webkit-transform: translate3d(12vw, 75vh, 76px);
            transform: translate3d(12vw, 75vh, 76px);
  }
}

@keyframes particle-animation-3 {
  100% {
    -webkit-transform: translate3d(12vw, 75vh, 76px);
            transform: translate3d(12vw, 75vh, 76px);
  }
}
.particle:nth-child(3) {
  -webkit-animation: particle-animation-3 60s infinite;
          animation: particle-animation-3 60s infinite;
  opacity: 0.78;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
  -webkit-transform: translate3d(16vw, 65vh, 8px);
          transform: translate3d(16vw, 65vh, 8px);
  background: #d9ca26;
}

@-webkit-keyframes particle-animation-4 {
  100% {
    -webkit-transform: translate3d(60vw, 41vh, 39px);
            transform: translate3d(60vw, 41vh, 39px);
  }
}

@keyframes particle-animation-4 {
  100% {
    -webkit-transform: translate3d(60vw, 41vh, 39px);
            transform: translate3d(60vw, 41vh, 39px);
  }
}
.particle:nth-child(4) {
  -webkit-animation: particle-animation-4 60s infinite;
          animation: particle-animation-4 60s infinite;
  opacity: 0.31;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
  -webkit-transform: translate3d(19vw, 86vh, 13px);
          transform: translate3d(19vw, 86vh, 13px);
  background: #26d9cd;
}

@-webkit-keyframes particle-animation-5 {
  100% {
    -webkit-transform: translate3d(23vw, 7vh, 7px);
            transform: translate3d(23vw, 7vh, 7px);
  }
}

@keyframes particle-animation-5 {
  100% {
    -webkit-transform: translate3d(23vw, 7vh, 7px);
            transform: translate3d(23vw, 7vh, 7px);
  }
}
.particle:nth-child(5) {
  -webkit-animation: particle-animation-5 60s infinite;
          animation: particle-animation-5 60s infinite;
  opacity: 0.9;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
  -webkit-transform: translate3d(51vw, 29vh, 69px);
          transform: translate3d(51vw, 29vh, 69px);
  background: #c426d9;
}

@-webkit-keyframes particle-animation-6 {
  100% {
    -webkit-transform: translate3d(61vw, 67vh, 30px);
            transform: translate3d(61vw, 67vh, 30px);
  }
}

@keyframes particle-animation-6 {
  100% {
    -webkit-transform: translate3d(61vw, 67vh, 30px);
            transform: translate3d(61vw, 67vh, 30px);
  }
}
.particle:nth-child(6) {
  -webkit-animation: particle-animation-6 60s infinite;
          animation: particle-animation-6 60s infinite;
  opacity: 0.41;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -1.2s;
          animation-delay: -1.2s;
  -webkit-transform: translate3d(40vw, 9vh, 82px);
          transform: translate3d(40vw, 9vh, 82px);
  background: #d926d3;
}

@-webkit-keyframes particle-animation-7 {
  100% {
    -webkit-transform: translate3d(34vw, 15vh, 53px);
            transform: translate3d(34vw, 15vh, 53px);
  }
}

@keyframes particle-animation-7 {
  100% {
    -webkit-transform: translate3d(34vw, 15vh, 53px);
            transform: translate3d(34vw, 15vh, 53px);
  }
}
.particle:nth-child(7) {
  -webkit-animation: particle-animation-7 60s infinite;
          animation: particle-animation-7 60s infinite;
  opacity: 0.94;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -1.4s;
          animation-delay: -1.4s;
  -webkit-transform: translate3d(85vw, 29vh, 13px);
          transform: translate3d(85vw, 29vh, 13px);
  background: #26d9ac;
}

@-webkit-keyframes particle-animation-8 {
  100% {
    -webkit-transform: translate3d(40vw, 90vh, 5px);
            transform: translate3d(40vw, 90vh, 5px);
  }
}

@keyframes particle-animation-8 {
  100% {
    -webkit-transform: translate3d(40vw, 90vh, 5px);
            transform: translate3d(40vw, 90vh, 5px);
  }
}
.particle:nth-child(8) {
  -webkit-animation: particle-animation-8 60s infinite;
          animation: particle-animation-8 60s infinite;
  opacity: 0.57;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -1.6s;
          animation-delay: -1.6s;
  -webkit-transform: translate3d(56vw, 59vh, 54px);
          transform: translate3d(56vw, 59vh, 54px);
  background: #6bd926;
}

@-webkit-keyframes particle-animation-9 {
  100% {
    -webkit-transform: translate3d(36vw, 76vh, 14px);
            transform: translate3d(36vw, 76vh, 14px);
  }
}

@keyframes particle-animation-9 {
  100% {
    -webkit-transform: translate3d(36vw, 76vh, 14px);
            transform: translate3d(36vw, 76vh, 14px);
  }
}
.particle:nth-child(9) {
  -webkit-animation: particle-animation-9 60s infinite;
          animation: particle-animation-9 60s infinite;
  opacity: 0.96;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -1.8s;
          animation-delay: -1.8s;
  -webkit-transform: translate3d(21vw, 20vh, 35px);
          transform: translate3d(21vw, 20vh, 35px);
  background: #acd926;
}

@-webkit-keyframes particle-animation-10 {
  100% {
    -webkit-transform: translate3d(34vw, 23vh, 83px);
            transform: translate3d(34vw, 23vh, 83px);
  }
}

@keyframes particle-animation-10 {
  100% {
    -webkit-transform: translate3d(34vw, 23vh, 83px);
            transform: translate3d(34vw, 23vh, 83px);
  }
}
.particle:nth-child(10) {
  -webkit-animation: particle-animation-10 60s infinite;
          animation: particle-animation-10 60s infinite;
  opacity: 0.5;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
  -webkit-transform: translate3d(89vw, 44vh, 43px);
          transform: translate3d(89vw, 44vh, 43px);
  background: #26d9b2;
}

@-webkit-keyframes particle-animation-11 {
  100% {
    -webkit-transform: translate3d(22vw, 67vh, 77px);
            transform: translate3d(22vw, 67vh, 77px);
  }
}

@keyframes particle-animation-11 {
  100% {
    -webkit-transform: translate3d(22vw, 67vh, 77px);
            transform: translate3d(22vw, 67vh, 77px);
  }
}
.particle:nth-child(11) {
  -webkit-animation: particle-animation-11 60s infinite;
          animation: particle-animation-11 60s infinite;
  opacity: 0.65;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -2.2s;
          animation-delay: -2.2s;
  -webkit-transform: translate3d(24vw, 82vh, 74px);
          transform: translate3d(24vw, 82vh, 74px);
  background: #26d96b;
}

@-webkit-keyframes particle-animation-12 {
  100% {
    -webkit-transform: translate3d(73vw, 59vh, 93px);
            transform: translate3d(73vw, 59vh, 93px);
  }
}

@keyframes particle-animation-12 {
  100% {
    -webkit-transform: translate3d(73vw, 59vh, 93px);
            transform: translate3d(73vw, 59vh, 93px);
  }
}
.particle:nth-child(12) {
  -webkit-animation: particle-animation-12 60s infinite;
          animation: particle-animation-12 60s infinite;
  opacity: 0.8;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -2.4s;
          animation-delay: -2.4s;
  -webkit-transform: translate3d(70vw, 16vh, 42px);
          transform: translate3d(70vw, 16vh, 42px);
  background: #2671d9;
}

@-webkit-keyframes particle-animation-13 {
  100% {
    -webkit-transform: translate3d(14vw, 7vh, 11px);
            transform: translate3d(14vw, 7vh, 11px);
  }
}

@keyframes particle-animation-13 {
  100% {
    -webkit-transform: translate3d(14vw, 7vh, 11px);
            transform: translate3d(14vw, 7vh, 11px);
  }
}
.particle:nth-child(13) {
  -webkit-animation: particle-animation-13 60s infinite;
          animation: particle-animation-13 60s infinite;
  opacity: 0.89;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -2.6s;
          animation-delay: -2.6s;
  -webkit-transform: translate3d(12vw, 54vh, 47px);
          transform: translate3d(12vw, 54vh, 47px);
  background: #26d92c;
}

@-webkit-keyframes particle-animation-14 {
  100% {
    -webkit-transform: translate3d(5vw, 80vh, 79px);
            transform: translate3d(5vw, 80vh, 79px);
  }
}

@keyframes particle-animation-14 {
  100% {
    -webkit-transform: translate3d(5vw, 80vh, 79px);
            transform: translate3d(5vw, 80vh, 79px);
  }
}
.particle:nth-child(14) {
  -webkit-animation: particle-animation-14 60s infinite;
          animation: particle-animation-14 60s infinite;
  opacity: 0.84;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -2.8s;
          animation-delay: -2.8s;
  -webkit-transform: translate3d(64vw, 31vh, 13px);
          transform: translate3d(64vw, 31vh, 13px);
  background: #d98026;
}

@-webkit-keyframes particle-animation-15 {
  100% {
    -webkit-transform: translate3d(81vw, 49vh, 71px);
            transform: translate3d(81vw, 49vh, 71px);
  }
}

@keyframes particle-animation-15 {
  100% {
    -webkit-transform: translate3d(81vw, 49vh, 71px);
            transform: translate3d(81vw, 49vh, 71px);
  }
}
.particle:nth-child(15) {
  -webkit-animation: particle-animation-15 60s infinite;
          animation: particle-animation-15 60s infinite;
  opacity: 0.66;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
  -webkit-transform: translate3d(58vw, 20vh, 74px);
          transform: translate3d(58vw, 20vh, 74px);
  background: #26d932;
}

@-webkit-keyframes particle-animation-16 {
  100% {
    -webkit-transform: translate3d(62vw, 82vh, 83px);
            transform: translate3d(62vw, 82vh, 83px);
  }
}

@keyframes particle-animation-16 {
  100% {
    -webkit-transform: translate3d(62vw, 82vh, 83px);
            transform: translate3d(62vw, 82vh, 83px);
  }
}
.particle:nth-child(16) {
  -webkit-animation: particle-animation-16 60s infinite;
          animation: particle-animation-16 60s infinite;
  opacity: 0.89;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -3.2s;
          animation-delay: -3.2s;
  -webkit-transform: translate3d(42vw, 20vh, 10px);
          transform: translate3d(42vw, 20vh, 10px);
  background: #26d985;
}

@-webkit-keyframes particle-animation-17 {
  100% {
    -webkit-transform: translate3d(51vw, 61vh, 69px);
            transform: translate3d(51vw, 61vh, 69px);
  }
}

@keyframes particle-animation-17 {
  100% {
    -webkit-transform: translate3d(51vw, 61vh, 69px);
            transform: translate3d(51vw, 61vh, 69px);
  }
}
.particle:nth-child(17) {
  -webkit-animation: particle-animation-17 60s infinite;
          animation: particle-animation-17 60s infinite;
  opacity: 0.01;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -3.4s;
          animation-delay: -3.4s;
  -webkit-transform: translate3d(68vw, 32vh, 35px);
          transform: translate3d(68vw, 32vh, 35px);
  background: #d926b2;
}

@-webkit-keyframes particle-animation-18 {
  100% {
    -webkit-transform: translate3d(6vw, 79vh, 88px);
            transform: translate3d(6vw, 79vh, 88px);
  }
}

@keyframes particle-animation-18 {
  100% {
    -webkit-transform: translate3d(6vw, 79vh, 88px);
            transform: translate3d(6vw, 79vh, 88px);
  }
}
.particle:nth-child(18) {
  -webkit-animation: particle-animation-18 60s infinite;
          animation: particle-animation-18 60s infinite;
  opacity: 0.22;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -3.6s;
          animation-delay: -3.6s;
  -webkit-transform: translate3d(5vw, 26vh, 7px);
          transform: translate3d(5vw, 26vh, 7px);
  background: #26d994;
}

@-webkit-keyframes particle-animation-19 {
  100% {
    -webkit-transform: translate3d(77vw, 32vh, 40px);
            transform: translate3d(77vw, 32vh, 40px);
  }
}

@keyframes particle-animation-19 {
  100% {
    -webkit-transform: translate3d(77vw, 32vh, 40px);
            transform: translate3d(77vw, 32vh, 40px);
  }
}
.particle:nth-child(19) {
  -webkit-animation: particle-animation-19 60s infinite;
          animation: particle-animation-19 60s infinite;
  opacity: 0.78;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -3.8s;
          animation-delay: -3.8s;
  -webkit-transform: translate3d(72vw, 23vh, 17px);
          transform: translate3d(72vw, 23vh, 17px);
  background: #a626d9;
}

@-webkit-keyframes particle-animation-20 {
  100% {
    -webkit-transform: translate3d(10vw, 18vh, 74px);
            transform: translate3d(10vw, 18vh, 74px);
  }
}

@keyframes particle-animation-20 {
  100% {
    -webkit-transform: translate3d(10vw, 18vh, 74px);
            transform: translate3d(10vw, 18vh, 74px);
  }
}
.particle:nth-child(20) {
  -webkit-animation: particle-animation-20 60s infinite;
          animation: particle-animation-20 60s infinite;
  opacity: 0.18;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -4s;
          animation-delay: -4s;
  -webkit-transform: translate3d(17vw, 64vh, 66px);
          transform: translate3d(17vw, 64vh, 66px);
  background: #6bd926;
}

@-webkit-keyframes particle-animation-21 {
  100% {
    -webkit-transform: translate3d(55vw, 52vh, 42px);
            transform: translate3d(55vw, 52vh, 42px);
  }
}

@keyframes particle-animation-21 {
  100% {
    -webkit-transform: translate3d(55vw, 52vh, 42px);
            transform: translate3d(55vw, 52vh, 42px);
  }
}
.particle:nth-child(21) {
  -webkit-animation: particle-animation-21 60s infinite;
          animation: particle-animation-21 60s infinite;
  opacity: 0.62;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -4.2s;
          animation-delay: -4.2s;
  -webkit-transform: translate3d(69vw, 88vh, 86px);
          transform: translate3d(69vw, 88vh, 86px);
  background: #3b26d9;
}

@-webkit-keyframes particle-animation-22 {
  100% {
    -webkit-transform: translate3d(80vw, 74vh, 30px);
            transform: translate3d(80vw, 74vh, 30px);
  }
}

@keyframes particle-animation-22 {
  100% {
    -webkit-transform: translate3d(80vw, 74vh, 30px);
            transform: translate3d(80vw, 74vh, 30px);
  }
}
.particle:nth-child(22) {
  -webkit-animation: particle-animation-22 60s infinite;
          animation: particle-animation-22 60s infinite;
  opacity: 0.32;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -4.4s;
          animation-delay: -4.4s;
  -webkit-transform: translate3d(34vw, 40vh, 100px);
          transform: translate3d(34vw, 40vh, 100px);
  background: #26d959;
}

@-webkit-keyframes particle-animation-23 {
  100% {
    -webkit-transform: translate3d(83vw, 15vh, 53px);
            transform: translate3d(83vw, 15vh, 53px);
  }
}

@keyframes particle-animation-23 {
  100% {
    -webkit-transform: translate3d(83vw, 15vh, 53px);
            transform: translate3d(83vw, 15vh, 53px);
  }
}
.particle:nth-child(23) {
  -webkit-animation: particle-animation-23 60s infinite;
          animation: particle-animation-23 60s infinite;
  opacity: 0.65;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -4.6s;
          animation-delay: -4.6s;
  -webkit-transform: translate3d(39vw, 6vh, 48px);
          transform: translate3d(39vw, 6vh, 48px);
  background: #d96b26;
}

@-webkit-keyframes particle-animation-24 {
  100% {
    -webkit-transform: translate3d(12vw, 7vh, 58px);
            transform: translate3d(12vw, 7vh, 58px);
  }
}

@keyframes particle-animation-24 {
  100% {
    -webkit-transform: translate3d(12vw, 7vh, 58px);
            transform: translate3d(12vw, 7vh, 58px);
  }
}
.particle:nth-child(24) {
  -webkit-animation: particle-animation-24 60s infinite;
          animation: particle-animation-24 60s infinite;
  opacity: 0.43;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -4.8s;
          animation-delay: -4.8s;
  -webkit-transform: translate3d(83vw, 9vh, 82px);
          transform: translate3d(83vw, 9vh, 82px);
  background: #d9cd26;
}

@-webkit-keyframes particle-animation-25 {
  100% {
    -webkit-transform: translate3d(69vw, 58vh, 16px);
            transform: translate3d(69vw, 58vh, 16px);
  }
}

@keyframes particle-animation-25 {
  100% {
    -webkit-transform: translate3d(69vw, 58vh, 16px);
            transform: translate3d(69vw, 58vh, 16px);
  }
}
.particle:nth-child(25) {
  -webkit-animation: particle-animation-25 60s infinite;
          animation: particle-animation-25 60s infinite;
  opacity: 0.36;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -5s;
          animation-delay: -5s;
  -webkit-transform: translate3d(2vw, 57vh, 1px);
          transform: translate3d(2vw, 57vh, 1px);
  background: #2647d9;
}

@-webkit-keyframes particle-animation-26 {
  100% {
    -webkit-transform: translate3d(53vw, 68vh, 3px);
            transform: translate3d(53vw, 68vh, 3px);
  }
}

@keyframes particle-animation-26 {
  100% {
    -webkit-transform: translate3d(53vw, 68vh, 3px);
            transform: translate3d(53vw, 68vh, 3px);
  }
}
.particle:nth-child(26) {
  -webkit-animation: particle-animation-26 60s infinite;
          animation: particle-animation-26 60s infinite;
  opacity: 0.22;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -5.2s;
          animation-delay: -5.2s;
  -webkit-transform: translate3d(11vw, 77vh, 8px);
          transform: translate3d(11vw, 77vh, 8px);
  background: #77d926;
}

@-webkit-keyframes particle-animation-27 {
  100% {
    -webkit-transform: translate3d(18vw, 10vh, 90px);
            transform: translate3d(18vw, 10vh, 90px);
  }
}

@keyframes particle-animation-27 {
  100% {
    -webkit-transform: translate3d(18vw, 10vh, 90px);
            transform: translate3d(18vw, 10vh, 90px);
  }
}
.particle:nth-child(27) {
  -webkit-animation: particle-animation-27 60s infinite;
          animation: particle-animation-27 60s infinite;
  opacity: 0.09;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -5.4s;
          animation-delay: -5.4s;
  -webkit-transform: translate3d(73vw, 1vh, 17px);
          transform: translate3d(73vw, 1vh, 17px);
  background: #a0d926;
}

@-webkit-keyframes particle-animation-28 {
  100% {
    -webkit-transform: translate3d(37vw, 37vh, 38px);
            transform: translate3d(37vw, 37vh, 38px);
  }
}

@keyframes particle-animation-28 {
  100% {
    -webkit-transform: translate3d(37vw, 37vh, 38px);
            transform: translate3d(37vw, 37vh, 38px);
  }
}
.particle:nth-child(28) {
  -webkit-animation: particle-animation-28 60s infinite;
          animation: particle-animation-28 60s infinite;
  opacity: 0.49;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -5.6s;
          animation-delay: -5.6s;
  -webkit-transform: translate3d(24vw, 84vh, 24px);
          transform: translate3d(24vw, 84vh, 24px);
  background: #d92682;
}

@-webkit-keyframes particle-animation-29 {
  100% {
    -webkit-transform: translate3d(18vw, 83vh, 77px);
            transform: translate3d(18vw, 83vh, 77px);
  }
}

@keyframes particle-animation-29 {
  100% {
    -webkit-transform: translate3d(18vw, 83vh, 77px);
            transform: translate3d(18vw, 83vh, 77px);
  }
}
.particle:nth-child(29) {
  -webkit-animation: particle-animation-29 60s infinite;
          animation: particle-animation-29 60s infinite;
  opacity: 0.53;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -5.8s;
          animation-delay: -5.8s;
  -webkit-transform: translate3d(60vw, 34vh, 32px);
          transform: translate3d(60vw, 34vh, 32px);
  background: #26d9af;
}

@-webkit-keyframes particle-animation-30 {
  100% {
    -webkit-transform: translate3d(19vw, 51vh, 45px);
            transform: translate3d(19vw, 51vh, 45px);
  }
}

@keyframes particle-animation-30 {
  100% {
    -webkit-transform: translate3d(19vw, 51vh, 45px);
            transform: translate3d(19vw, 51vh, 45px);
  }
}
.particle:nth-child(30) {
  -webkit-animation: particle-animation-30 60s infinite;
          animation: particle-animation-30 60s infinite;
  opacity: 0.58;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -6s;
          animation-delay: -6s;
  -webkit-transform: translate3d(35vw, 60vh, 42px);
          transform: translate3d(35vw, 60vh, 42px);
  background: #d94a26;
}
.swagger-ui .scheme-container { 
        background-image: 
        linear-gradient(217deg, rgb(209 41 79 / 80%), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgb(19 168 217 / 80%), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); 
    }
    .swagger-ui .wrapper { padding: 0 0px }
    .swagger-ui .btn.authorize { border-color: #ffffff; color: #ffffff }
    .swagger-ui .btn.authorize svg { fill: #ffffff }
`
