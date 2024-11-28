// Get the audio element and the play button
const music = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music');

// Event listener for toggling play/pause
playMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play(); // Play the music
        playMusicButton.textContent = "Pause Music"; // Change button text
    } else {
        music.pause(); // Pause the music
        playMusicButton.textContent = "Play Music"; // Change button text back
    }
});
