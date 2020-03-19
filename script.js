const headerNav = document.querySelector('#header-nav');
const links = document.querySelectorAll('.header-navbar__link');
const portfolioImages = document.querySelectorAll('.portfolio-image__element');
const portfolioImagesContainer = document.querySelector('.portfolio-image');
const form = document.querySelector('#form');
const subjectInput = document.querySelector('#subject-input');
const textareaInput = document.querySelector('#textarea-input');
const modalSubjectText = document.querySelector('#modal-subject');
const modalDescriptionText = document.querySelector('#modal-description');
const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('.modal');
const phoneVerticalDisplay = document.querySelector('.phone-vertical-display');
const phoneHorizontalDisplay = document.querySelector('.phone-horizontal-display');
const phoneVertical = document.querySelector('.phone-vertical');
const phoneHorizontal = document.querySelector('.phone-horizontal');
const verticalDisplayBlack = document.querySelector('.vertical-display-black');
const horizontalDisplayBlack = document.querySelector('.horizontal-display-black');
const portfolioNav = document.querySelector('.portfolio-nav');
const portfolioNavElement = document.querySelectorAll('.portfolio-nav__element');
const newPortfolioImages = [...portfolioImages];
const sections = document.querySelectorAll('section');
const inputForm = document.querySelectorAll("input");
const inputFormArr = [...inputForm];

// headerNav.addEventListener('click', event => {
//     if (event.target.classList.contains('header-navbar__link')) {
//         links.forEach(el => el.classList.remove('header-active'));
//         event.target.classList.add('header-active');
//     }
// });

portfolioImagesContainer.addEventListener('click', event => {
    if (event.target.classList.contains('portfolio-image__element')) {
    portfolioImages.forEach(el => el.classList.remove('portfolio-image-active'));
    event.target.classList.add('portfolio-image-active');
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const subjectInputValue = subjectInput.value ? `Тема: ${subjectInput.value}` : 'Без темы';
    const textareaValue = textareaInput.value ? `Описание: ${textareaInput.value}` : 'Без описания';

    modalSubjectText.innerText = subjectInputValue;
    modalDescriptionText.innerText = textareaValue;

    modal.classList.remove('hidden');
});

modalButton.addEventListener('click', event => {
    modal.classList.add('hidden');
    document.getElementById("form").reset();
});

phoneVertical.addEventListener('click', event => {
    const verticalDisplayZindex = window.getComputedStyle(phoneVerticalDisplay).getPropertyValue('z-index');
    const verticalDisplayBlackZindex = window.getComputedStyle(verticalDisplayBlack).getPropertyValue('z-index');

    phoneVerticalDisplay.style.zIndex = verticalDisplayBlackZindex;
    verticalDisplayBlack.style.zIndex = verticalDisplayZindex;
});

phoneHorizontal.addEventListener('click', event => {
    const horizontalDisplayZindex = window.getComputedStyle(phoneHorizontalDisplay).getPropertyValue('z-index');
    const horizontalDisplayBlackZindex = window.getComputedStyle(horizontalDisplayBlack).getPropertyValue('z-index');

    phoneHorizontalDisplay.style.zIndex = horizontalDisplayBlackZindex;
    horizontalDisplayBlack.style.zIndex = horizontalDisplayZindex;
});

portfolioNav.addEventListener('click', event => {
    if (event.target.classList.contains('portfolio-nav__element')) {
        portfolioNavElement.forEach(el => el.classList.remove('portfolio-nav-active'));
        event.target.classList.add('portfolio-nav-active');
        newPortfolioImages.forEach(e => portfolioImagesContainer.removeChild(e));
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }
        shuffle(newPortfolioImages);  
        newPortfolioImages.forEach(e => portfolioImagesContainer.appendChild(e));
    }
});

document.addEventListener('scroll', event => {
    const currentPosition = window.scrollY;
    sections.forEach(el => {
        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            links.forEach(a => {
                a.classList.remove('header-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('header-active');
                }
            });
        }
    });
});
