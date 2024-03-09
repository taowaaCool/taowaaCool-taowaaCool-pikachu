const styleText = `
.skin *{box-sizing: border-box; margin: 0; padding: 0;}
*::before, *::after{box-sizing: border-box;}
body{
    background-color: #ffe600;
}

.skin{
    position: relative;
    height: 100vh;
    top: -45px;
}

.nose{
    border: 10px solid black;
    border-color:black transparent transparent;
    height: 0px;
    width: 0px;
    position: relative;
    left: 50%;
    top: 90px;
    margin-left: -10px;
}

@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(5deg);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.nose:hover{
    transform-origin: center bottom;
    animation: wave 100ms infinite linear;
}

.nose-top{
    border: 1px solid black;
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 25px 25px 0 0;
    background-color: black;
}

.eye{
    border: 1px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -30px;
    border-radius: 50% 50% 50% 50%;
    background-color: #2e2e2e;
}

.eye::before{
    content: ''; 
    width: 25px;
    height: 25px;
    display: block;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: 4px;
    left: 10px;
}

.eye.left{
    transform: translateX(-100px);
}

.eye.right{
    transform: translateX(100px);
}

.mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 120px;
    margin-left: -100px;
}

.mouth-top{
    position: relative;
    z-index: 1;
}

.mouth-top .lip{
    border: 4px solid black;
    height: 20px;
    width: 100px;
    border-top: transparent;
    position: absolute;
    background-color: #ffe600;
}

.mouth-top .lip.left{
    border-radius: 0 0 0 90px;
    border-right: transparent;
    transform: rotate(-15deg);
}

.mouth-top .lip.right{
    border-radius: 0 0 90px 0;
    transform: rotate(15deg);
    border-left: transparent;
    left: 100px;
}

.mouth-bottom{
    height: 240px;
    width: 200px;
    position: absolute;
    overflow: hidden;
    top: 6px;
}

.mouth-bottom .yuan1{
    border: 1px solid red;
    position: absolute;
    width: 150px;
    height: 1000px;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
}


.mouth-bottom .yuan1 .yuan2{
    width: 200px;
    height: 200px;
    background-color: #ff485f;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: 0;
    border-radius: 50% 50% 50% 50%;
}

.face{
    border: 2px solid black;
    position: absolute;
    height: 88px;
    width: 88px;
    left: 50%;
    top: 200px;
    margin-left: -50px;

}

.face.left{
    transform: translateX(-130px);
    border-radius: 50% 50% 50% 50%;
    background-color: red;
}

.face.right{
    transform: translateX(140px);
    border-radius: 50% 50% 50% 50%;
    background-color: red;
}
`;

let textNum = 1;
let time = 60;
pkchu.innerHTML = styleText.substring(0, textNum);
text.innerText = styleText.substring(0, textNum);

const run = () => {
  if (textNum >= styleText.length) {
    window.clearInterval(player);
    return;
  }
  textNum += 1;
  pkchu.innerHTML = styleText.substring(0, textNum);
  text.innerText = styleText.substring(0, textNum);
  text.scrollTop = text.scrollHeight;
};

const play = () => {
  return setInterval(run, time);
};

const pause = () => {
  window.clearInterval(player);
};

let player = setInterval(run, time);

document.getElementById("pause").onclick = () => {
  pause();
};

document.getElementById("play").onclick = () => {
  player = play();
};

document.getElementById("low").onclick = () => {
  pause();
  time = 200;
  player = play();
};

document.getElementById("middle").onclick = () => {
  pause();
  time = 60;
  player = play();
};

document.getElementById("high").onclick = () => {
  pause();
  time = 20;
  player = play();
};

document.getElementById("reset").onclick = () => {
  pause();
  textNum = 1;
  pkchu.innerHTML = "";
  text.innerText = "";
  player = play();
};

document.getElementById("all").onclick = () => {
  pause();
  textNum = styleText.length;
  pkchu.innerHTML = styleText;
  text.innerText = styleText;
  player = play();
};
