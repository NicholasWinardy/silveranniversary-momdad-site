// Play greeting audio
function playGreeting() {
    const audio = document.getElementById('greetingAudio');
    audio.play();
}

// Confetti animation on clicking the anniversary message
document.getElementById('anniversaryMessage').addEventListener('click', function() {
    const confetti = document.getElementById('confettiArea');
    confetti.style.display = 'block';
    
    // Hide confetti after 3 seconds
    setTimeout(() => {
        confetti.style.display = 'none';
    }, 3000);
});

// Open full-size image in a modal
function openModal(src) {
    const modal = document.getElementById('photoModal');
    const fullImage = document.getElementById('fullImage');
    modal.style.display = 'block';
    fullImage.src = src;
}

// Close modal
function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}
