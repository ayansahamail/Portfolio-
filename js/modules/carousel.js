// This file implements the carousel functionality for navigating through images or content in a sliding format.

const carousel = (() => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the carousel by showing the first slide
    showSlide(currentSlide);

    return {
        nextSlide,
        prevSlide,
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    carousel;
});