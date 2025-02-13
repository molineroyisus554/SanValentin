let heartInterval;

// Asegurar que el sobre empiece cerrado
window.onload = function() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.remove('open');
}

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const music = document.getElementById('background-music');
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        music.play();
        startHeartAnimation();
    }
}

function resetEnvelope() {
    const envelope = document.querySelector('.envelope');
    const hearts = document.querySelector('.hearts');
    const music = document.getElementById('background-music');
    envelope.classList.remove('open');
    hearts.innerHTML = '';
    music.pause();
    music.currentTime = 0;
    clearInterval(heartInterval);
}

function startHeartAnimation() {
    heartInterval = setInterval(createHeart, 500);
}

function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 260 + 'px';
    heart.style.top = Math.random() * 180 + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '1';
        heart.style.transform = `
            rotate(45deg) 
            translateY(${-50 - Math.random() * 50}px)
        `;
        heart.style.transition = 'all 1s ease-out';
    }, 0);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Remove heart after 2 seconds
}