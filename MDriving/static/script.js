let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${offset})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 自动播放轮播图（可选）
setInterval(nextSlide, 3000);