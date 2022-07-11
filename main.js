// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    toggleMenu.classList.toggle("active");
}

// Swiper Slider 1
var swiper = new Swiper(".hero-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".hero-slider .swiper-button-next",
        prevEl: ".hero-slider .swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

// Swiper Slider 2
var swiper = new Swiper(".promo-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".promo-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promo-slider .swiper-button-next",
        prevEl: ".promo-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 50,
        },
    },
});

// Swiper Slider 3
var swiper = new Swiper(".trend-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".trend-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".trend-slider .swiper-button-next",
        prevEl: ".trend-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },
});

/* Loading */
window.onload = () => {
    setTimeout(() => {
        document.querySelector('main').classList.add("display");
        document.querySelector('.loading_container').classList.add("hidden");
    },6000);
}