// themes
const themeBtn = document.getElementById('theme-toggle');
const bgBtn = document.getElementById('bg-toggle');
const body = document.getElementById('main-body');

themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    themeBtn.textContent = target === 'dark' ? '🌙' : '☀️';
});

bgBtn.addEventListener('click', () => {
    body.classList.toggle('gif-bg');
});

// games
const gameImages = {
    'stalker': 'images/stalker.png',
    'grb': 'images/grb.png',
    'insurgency': 'images/insurgency.png',
    'cod': 'images/cod.png',
    'ron': 'images/ron.png'
};

const gameLinks = {
    'stalker': 'https://store.steampowered.com/franchise/stalker', 
    'grb': 'https://store.steampowered.com/app/2231380/Tom_Clancys_Ghost_Recon_Breakpoint/',
    'insurgency': 'https://store.steampowered.com/app/581320/Insurgency_Sandstorm/',
    'cod': 'https://store.steampowered.com/app/1938090/Call_of_Duty/',
    'ron': 'https://store.steampowered.com/app/1144200/Ready_or_Not/'
};

function changeGame(gameKey) {
    const displayImage = document.getElementById('game-img');
    const gameLink = document.getElementById('game-link'); 

    displayImage.style.opacity = 0.5;
    setTimeout(() => {
        displayImage.src = gameImages[gameKey];
        if (gameLink) {
            gameLink.href = gameLinks[gameKey];
        }
        displayImage.style.opacity = 1;
    }, 150); 
}
// slideshow
const galleryImages = [
    'images/poster1.jpg',
    'images/poster2.png',
    'images/poster3.jpg',
    'images/poster4.png',
    'images/poster5.jpg'
];
let currentSlideIndex = 0;

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= galleryImages.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = galleryImages.length - 1;
    }
    const sliderImg = document.getElementById('slider-img');
    sliderImg.style.opacity = 0.5;
    setTimeout(() => {
        sliderImg.src = galleryImages[currentSlideIndex];
        sliderImg.style.opacity = 1;
    }, 150);
}

// lil surprice
function playSecretSound() {
    const audio = document.getElementById('secret-sound');
    audio.currentTime = 0; 
    audio.play();
}