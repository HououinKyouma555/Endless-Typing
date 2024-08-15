const content = document.querySelector('#content');
const title = document.querySelector('#title');

const timer = document.getElementById('timer');

let timeRemaining = 5;
let isTyping = false;
let completed = false;
let begin = false;

let timeLeft = 0;

const timer2 = document.getElementById('timer2');

const setTimeBtn = document.getElementById('set-time');

setTimeBtn.addEventListener("click", setTime);

function setTime(){
    timeLeft = Number(window.prompt("How many seconds would you like to type for?", 60));
    document.getElementById('content').contentEditable = "true";
    title.innerHTML = "Begin Writing";
    begin = true;
}

function addSecond(){
    if (completed === false) {
        timeRemaining--;
        timeLeft--;
        content.classList.remove("solid");
        content.classList.add("fading");
        timer.innerHTML = `Timer: ${timeRemaining}`;
        timer2.innerHTML = `Time Remaining: ${timeLeft}`;
        if (timeRemaining < 0) {
            clear();
            alert("Sorry, your time has expired!");
            location.href = "homepage.html";
        }
        if (timeLeft < 0){
            finish();
        }
    }
}

document.onkeypress = function (e) {
    if (isTyping === false && begin === true){
        window.setInterval(addSecond, 1000);
        isTyping = true;
        title.innerHTML = "Now in write mode...";
    }
    timeRemaining = 5;
    timer.innerHTML = `Time: ${timeRemaining}`;
    content.classList.remove("fading");
    content.classList.add("solid");
}

function clear(){
    content.innerHTML = '';
    timeRemaining = 5;
    timer.innerHTML = `Time: ${timeRemaining}}`;
}

function finish(){
    completed = true;
    title.innerHTML = "Good job :)"
    alert("Congrats! You're one step closer to achieving your goals :)");
    content.classList.remove("fading");
    content.classList.add("solid");
    document.getElementById("content").contentEditable = "false";
}
