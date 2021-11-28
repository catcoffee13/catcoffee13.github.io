const body = document.querySelector("body");
let imgNum = parseInt(Math.random()*3);
body.style.backgroundImage = `url(img/${imgNum}.jpg)`