document.addEventListener('DOMContentLoaded', function() {
    const marqueeContent = document.querySelector('.marquee-content');
    let isPaused = false;

    marqueeContent.addEventListener('click', function() {
        if (isPaused) {
            marqueeContent.style.animationPlayState = 'running';
        } else {
            marqueeContent.style.animationPlayState = 'paused';
        }
        isPaused = !isPaused;
    });
});