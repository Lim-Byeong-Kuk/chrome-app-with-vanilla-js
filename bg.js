const body = document.querySelector("body");

const IMG_NUMBER = 3;
/*
function handleImageLoad(){
    console.log("finished loading");
}
*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    // +1 하는 이유는 Math.random()함수가 0을 줄 수 있기 때문
    image.classList.add("bgImage");
    body.appendChild(image);
//    image.addEventListener("loadend", handleImageLoad )

   
}

function genRandom(){
// Math.random() 0~1 사이 숫자 랜덤 생성
// Math.floor 버림
// Math.ceiling 올림
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();