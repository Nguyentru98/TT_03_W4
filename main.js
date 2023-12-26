// menu-mobile
var toggle = document.querySelector(".icon-menu");
var menuList = document.querySelector(".menu-list");
toggle.addEventListener("click", () => {
  menuList.classList.toggle("toggle");
});

// slide

const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideWidth = slides[0].offsetWidth;
const visibleSlides = 3;
let currentIndex = 0;

function slideTo(index) {
    slideWidth = slides[0].offsetWidth;
    const translateX = -index * slideWidth;
    slideContainer.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;;
    slideTo(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex + slides.length - 1) %  (slides.length-3);
    slideTo(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

function updateSlideSize() {
    slideWidth = slides[0].offsetWidth;
    slideContainer.style.width = `${slideWidth * visibleSlides}px`; // Cập nhật lại độ dài của container
    slideTo(currentIndex);
}

window.addEventListener('resize',function() {
    slideTo(currentIndex);
} );

slideTo(currentIndex);

// time-line
window.addEventListener("scroll", timeline);

function timeline() {
  var timelines = document.querySelectorAll(".item");
  for (var i = 0; i < timelines.length; i++) {
    var windowHeight = window.innerHeight; // chieu cao cua view port
    var elementTop = timelines[i].getBoundingClientRect().top; // đỉnh viewport đến top element
    var elementVisible = 20; // khoảng nhìn thấy element
    // console.log(
    //   "windowHeigh",windowHeight,
    //   "elementTop",elementTop,
    //   "elementVisible",elementVisible,
    //   elementTop < windowHeight - elementVisible,
    // );
    if (elementTop < windowHeight - elementVisible) {
      timelines[i].classList.add("active");
    }
  }
}
