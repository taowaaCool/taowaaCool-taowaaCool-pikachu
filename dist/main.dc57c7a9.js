parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n="\n.skin *{box-sizing: border-box; margin: 0; padding: 0;}\n*::before, *::after{box-sizing: border-box;}\nbody{\n    background-color: #ffe600;\n}\n.skin{\n    position: relative;\n    height: 100vh;\n    top: -45px;\n}\n.nose{\n    border: 10px solid black;\n    border-color:black transparent transparent;\n    height: 0px;\n    width: 0px;\n    position: relative;\n    left: 50%;\n    top: 90px;\n    margin-left: -10px;\n}\n\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    25%{\n        transform: rotate(5deg);\n    }\n    50%{\n        transform: rotate(0deg);\n    }\n    75%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 100ms infinite linear;\n}\n\n.nose-top{\n    border: 1px solid black;\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 25px 25px 0 0;\n    background-color: black;\n}\n\n.eye{\n    border: 1px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -30px;\n    border-radius: 50% 50% 50% 50%;\n    background-color: #2e2e2e;\n}\n\n.eye::before{\n    content: ''; \n    width: 25px;\n    height: 25px;\n    display: block;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    top: 4px;\n    left: 10px;\n}\n\n.eye.left{\n    transform: translateX(-100px);\n}\n\n.eye.right{\n    transform: translateX(100px);\n}\n\n.mouth {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    top: 120px;\n    margin-left: -100px;\n}\n\n.mouth-top{\n    position: relative;\n    z-index: 1;\n}\n\n.mouth-top .lip{\n    border: 4px solid black;\n    height: 20px;\n    width: 100px;\n    border-top: transparent;\n    position: absolute;\n    background-color: #ffe600;\n}\n\n.mouth-top .lip.left{\n    border-radius: 0 0 0 90px;\n    border-right: transparent;\n    transform: rotate(-15deg);\n}\n\n.mouth-top .lip.right{\n    border-radius: 0 0 90px 0;\n    transform: rotate(15deg);\n    border-left: transparent;\n    left: 100px;\n}\n\n.mouth-bottom{\n    height: 240px;\n    width: 200px;\n    position: absolute;\n    overflow: hidden;\n    top: 6px;\n}\n\n.mouth-bottom .yuan1{\n    border: 1px solid red;\n    position: absolute;\n    width: 150px;\n    height: 1000px;\n    left: 50%;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius: 75px/300px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n\n\n.mouth-bottom .yuan1 .yuan2{\n    width: 200px;\n    height: 200px;\n    background-color: #ff485f;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    bottom: 0;\n    border-radius: 50% 50% 50% 50%;\n}\n\n.face{\n    border: 2px solid black;\n    position: absolute;\n    height: 88px;\n    width: 88px;\n    left: 50%;\n    top: 200px;\n    margin-left: -50px;\n\n}\n\n.face.left{\n    transform: translateX(-130px);\n    border-radius: 50% 50% 50% 50%;\n    background-color: red;\n}\n\n.face.right{\n    transform: translateX(140px);\n    border-radius: 50% 50% 50% 50%;\n    background-color: red;\n}\n",t=1,o=100;pkchu.innerHTML=n.substring(0,t),text.innerText=n.substring(0,t);var r=function(){t>=n.length?window.clearInterval(a):(t+=1,pkchu.innerHTML=n.substring(0,t),text.innerText=n.substring(0,t),text.scrollTop=text.scrollHeight)},e=function(){return setInterval(r,o)},i=function(){window.clearInterval(a)},a=setInterval(r,o);buttonPau.onclick=function(){i()},buttonPlay.onclick=function(){a=e()},buttonSlow.onclick=function(){i(),o=200,a=e()},buttonNormal.onclick=function(){i(),o=50,a=e()},buttonFast.onclick=function(){i(),o=0,a=e()};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.dc57c7a9.js.map