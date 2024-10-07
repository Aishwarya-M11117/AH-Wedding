const video = document.getElementById('myVideo');
let vid = document.getElementById("myVideo");
vid.defaultMuted = false;
video.addEventListener('mouseenter', () => {
    video.play(); // Play video on hover
});

video.addEventListener('mouseleave', () => {
    video.pause(); // Pause video when mouse leaves
});