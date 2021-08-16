// Nav Bar
let menu = document.querySelector('#menu-bars'),
    navbar = document.querySelector('.navbar');
    
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });

}
// Start Sliders .................

// Copa
document.querySelector('#copa').onclick = () =>{
    document.querySelector('#copa-20').classList.toggle('show');
}
document.querySelector('#closed').onclick = () =>{
    document.querySelector('#copa-20').classList.toggle('show');
}

// Sneaker
document.querySelector('#snk').onclick = () =>{
    document.querySelector('#sneaker').classList.toggle('show');
}
document.querySelector('#closed1').onclick = () =>{
    document.querySelector('#sneaker').classList.toggle('show');
}

// Pure
document.querySelector('#pur').onclick = () =>{
    document.querySelector('#pure').classList.toggle('show');
}
document.querySelector('#closed2').onclick = () =>{
    document.querySelector('#pure').classList.toggle('show');
}

// Meteor
document.querySelector('#met').onclick = () =>{
    document.querySelector('#meteor').classList.toggle('show');
}
document.querySelector('#closed3').onclick = () =>{
    document.querySelector('#meteor').classList.toggle('show');
}

// New Balance
document.querySelector('#new').onclick = () =>{
    document.querySelector('#new-balance').classList.toggle('show');
}
document.querySelector('#closed4').onclick = () =>{
    document.querySelector('#new-balance').classList.toggle('show');
}

// Stripes
document.querySelector('#str').onclick = () =>{
    document.querySelector('#stripes').classList.toggle('show');
}
document.querySelector('#closed5').onclick = () =>{
    document.querySelector('#stripes').classList.toggle('show');
}
// End Sliders .................

// Start Search ................
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-from').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-from').classList.toggle('active');
}

// Home Slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});

