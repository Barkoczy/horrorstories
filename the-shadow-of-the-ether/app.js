const audio = document.getElementById('bgMusic');
const playIcon = document.getElementById('playIcon');
const volumeSlider = document.getElementById('volumeSlider');
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('playIcon').outerHTML = '<i class="fa-solid fa-play" id="playIcon"></i>';
    } else {
        audio.play();
        document.getElementById('playIcon').outerHTML = '<i class="fa-solid fa-pause" id="playIcon"></i>';
    }
    isPlaying = !isPlaying;
}

volumeSlider.addEventListener('input', function() {
    audio.volume = this.value / 100;
});

// Automatické spustenie hudby pri prvej interakcii používateľa so stránkou
document.addEventListener('click', function initAudio() {
    if (!isPlaying) {
        audio.volume = volumeSlider.value / 100;
        document.removeEventListener('click', initAudio);
    }
}, { once: true });