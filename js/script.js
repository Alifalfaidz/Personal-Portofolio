const nav = document.getElementById('nav1');

window.addEventListener('scroll', function() {
    scrollposition = window.scrollY;

    if(scrollposition >= 60) {
        nav.classList.add('nav-dark')
    } else if(scrollposition <= 60) {
        nav.classList.remove('nav-dark')
    }
});