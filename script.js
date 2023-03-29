const music = document.querySelector("#music");

music.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});

const moveButton = document.querySelector("#moveButton");
const maxDistance = 50;

moveButton.addEventListener("click", function () {
    const x = Math.floor(Math.random() * maxDistance * 4) - maxDistance;
    const y = Math.floor(Math.random() * maxDistance * 2) - maxDistance;
    moveButton.style.transform = `translate(${x}px, ${y}px)`;
});

const alertButton = document.querySelector("#alertButton");

alertButton.addEventListener("click", function () {
    alert("are you serious?");
    alert("Thanks For Accept My Confess!!!")
});