const content = document.querySelector('#content');
const title = document.querySelector('#title');

const timer = document.getElementById('timer');

let currentTime = 5;
let isTyping = false;

function addSecond(){
    currentTime--;
    content.classList.remove("solid");
    content.classList.add("fading");
    timer.innerHTML = `Time: ${currentTime}`;
    if (currentTime < 0) {
        clear();
        alert("Sorry, your time has expired!");
        location.href = "homepage.html";
    }
}

document.onkeypress = function (e) {
    if (isTyping === false){
        window.setInterval(addSecond, 1000);
        isTyping = true;
    }
    title.innerHTML = "Now in write mode...";
    currentTime = 5;
    timer.innerHTML = `Time: ${currentTime}`;
    content.classList.remove("fading");
    content.classList.add("solid");
}

function clear(){
    content.innerHTML = '';
    currentTime = 5;
    timer.innerHTML = `Time: ${currentTime}`;
}
