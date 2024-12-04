let currentIndex = 0;
 
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide .carousel-item');
    const totalSlides = slides.length;
 
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
 
    // 注意：這裡我們不需要使用translateX，因為我們現在是垂直布局
    // 但是，如果我們想讓文字項目有滑動效果，我們需要調整布局和動畫
    // 為簡單起見，這裡我們只是隱藏和顯示項目（這不是一個真正的滑動效果）
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });
 
    // 或者，如果您想使用transform來實現滑動效果，您需要重新設置布局
    // 例如，您可以使用overflow: hidden和position: absolute來定位項目
    // 然後使用transform: translateX來移動整個.carousel-slide容器
    // 但這需要更多的CSS和JavaScript工作來設置
}
 
function prevSlide() {
    showSlide(currentIndex - 1);
}
 
function nextSlide() {
    showSlide(currentIndex + 1);
}
 
// 可選：自動播放輪播圖（例如，每3秒切換一次）
setInterval(nextSlide, 3000);
 
// 可選：頁面加載時顯示第一個項目（雖然默認情況下已經這樣做了，但為了清晰起見，這裡還是寫出來）
window.onload = function() {
    showSlide(0);
};