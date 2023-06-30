window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});