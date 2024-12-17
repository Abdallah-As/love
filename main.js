const Show = document.getElementById("show");
const Btn = document.getElementById("btn");
const sound = document.getElementById("ado");


Btn.onclick = function() {
    Show.style.display = "block"
    Btn.style.display = "none"
    sound.play();
    
    

    const video = document.createElement("video");

video.src = "video/video.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;
video.style.position = "fixed";
video.style.top = "0";
video.style.left = "0";
video.style.width = "100%";
video.style.height = "100%";
video.style.objectFit = "cover";
video.style.zIndex = "-1";

document.body.appendChild(video);
}



