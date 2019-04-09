'use strict'


function SmoothScroll(target, duration) {
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };


    requestAnimationFrame(animationScroll);
}

const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');

section1.addEventListener('click', () => {
    SmoothScroll('.section2', 1000);
});

section2.addEventListener('click', () => {
    SmoothScroll('.section1', 1000);
});
