const bar = document.getElementById('bar'); 
const close= document.getElementById('close');// Menu button
const nav = document.getElementById('navbar'); // Navbar container

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Open menu
    });
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Open menu
    });
}





