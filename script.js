const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const ctrlIconContainer =document.getElementById("ctrlIcon-container");

function playPause () {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

ctrlIconContainer.addEventListener("click", playPause);

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;

        if ((song.duration - song.currentTime) <= 0.5) {
            song.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        }
    }, 1000);
}

progress.onchange = () => {
    song.currentTime = progress.value;
};