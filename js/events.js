const { 
    portfolioImages,
    subjectInput, 
    textareaInput, 
    modalSubjectText,
    modalDescriptionText,
    modal,
    form,
    phoneVerticalDisplay,
    verticalDisplayBlack,
    phoneHorizontalDisplay,
    horizontalDisplayBlack,
    portfolioNavElement,
    newPortfolioImages,
    portfolioImagesContainer,
    shuffle,
    sections,
    links,
} = require('./data');

const Events = {
    portfolioImagesEvent: event => {
        if (event.target.classList.contains('portfolio-image__element')) {
            portfolioImages.forEach(el => el.classList.remove('portfolio-image-active'));
            event.target.classList.add('portfolio-image-active');
        }
    },
    formEvent: event => {
        event.preventDefault();
    
        const subjectInputValue = subjectInput.value ? `Тема: ${subjectInput.value}` : 'Без темы';
        const textareaValue = textareaInput.value ? `Описание: ${textareaInput.value}` : 'Без описания';
    
        modalSubjectText.innerText = subjectInputValue;
        modalDescriptionText.innerText = textareaValue;
    
        modal.classList.remove('hidden');
    },
    modalButtonEvent: event => {
        modal.classList.add('hidden');
        form.reset();
    },
    phoneVerticalEvent: event => {
        const verticalDisplayZindex = window.getComputedStyle(phoneVerticalDisplay).getPropertyValue('z-index');
        const verticalDisplayBlackZindex = window.getComputedStyle(verticalDisplayBlack).getPropertyValue('z-index');
        
        phoneVerticalDisplay.style.zIndex = verticalDisplayBlackZindex;
        verticalDisplayBlack.style.zIndex = verticalDisplayZindex;
    },
    phoneHorizontalEvent: event => {
        const horizontalDisplayZindex = window.getComputedStyle(phoneHorizontalDisplay).getPropertyValue('z-index');
        const horizontalDisplayBlackZindex = window.getComputedStyle(horizontalDisplayBlack).getPropertyValue('z-index');
    
        phoneHorizontalDisplay.style.zIndex = horizontalDisplayBlackZindex;
        horizontalDisplayBlack.style.zIndex = horizontalDisplayZindex;
    },
    portfolioNavEvent: event => {
        if (event.target.classList.contains('portfolio-nav__element')) {
            portfolioNavElement.forEach(el => el.classList.remove('portfolio-nav-active'));
            event.target.classList.add('portfolio-nav-active');
            newPortfolioImages.forEach(el => portfolioImagesContainer.removeChild(el));
            shuffle(newPortfolioImages);  
            newPortfolioImages.forEach(el => portfolioImagesContainer.appendChild(el));
        }
    },
    scrollNavEvent: event => {
        const currentPosition = window.scrollY;
    
        sections.forEach(el => {
            if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
                links.forEach(el => {
                    el.classList.remove('header-active');
    
                    if (el.getAttribute('id') === el.getAttribute('href').substring(1)) {
                        el.classList.add('header-active');
                    }
                });
            }
        });
    }
};

module.exports = Events;
