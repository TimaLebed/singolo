const Selectors = require('./data');
const Events = require('./events');

const initEvents = () => {
    Selectors.portfolioImagesContainer.addEventListener('click', Events.portfolioImagesEvent);
    Selectors.form.addEventListener('submit', Events.formEvent);
    Selectors.modalButton.addEventListener('click', Events.modalButtonEvent);
    Selectors.phoneVertical.addEventListener('click', Events.phoneVerticalEvent);
    Selectors.phoneHorizontal.addEventListener('click', Events.phoneHorizontalEvent);
    Selectors.portfolioNav.addEventListener('click', Events.portfolioNavEvent);
    document.addEventListener('scroll', Events.scrollNavEvent);
};

module.exports = (() => {
    document.addEventListener('DOMContentLoaded', initEvents);
})();
