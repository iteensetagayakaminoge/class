// スライド機能

let currentSlide = 1;
const totalSlides = 3;

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
    }
}

function goToSlide(slideNum) {
    currentSlide = slideNum;
    updateSlide();
}

function updateSlide() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });

    const activeSlide = document.getElementById(`slide-${currentSlide}`);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }

    updateSlideIndicators();
    updateSlideInfo();

    const activeSlideElement = document.getElementById(`slide-${currentSlide}`);
    if (activeSlideElement) {
        activeSlideElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateSlideIndicators() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateSlideInfo() {
    const currentSlideElement = document.getElementById('current-slide');
    const totalSlidesElement = document.getElementById('total-slides');
    
    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide;
    }
    if (totalSlidesElement) {
        totalSlidesElement.textContent = totalSlides;
    }
}

// キーボード操作対応
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

document.addEventListener('DOMContentLoaded', function() {
    updateSlideInfo();
});
