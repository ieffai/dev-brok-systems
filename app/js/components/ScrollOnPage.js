export default class ScrollOnPage {
  addListeners(linksArray) {
    if (linksArray.length > 0) {
      linksArray.forEach((link) => {
        link.addEventListener('click', this._scrollToElement);
      });
    }
  }

  _scrollToElement(e) {
    const link = event.target;
    const goToName = link.dataset.goto;
    const goToElement = document.querySelector(link.dataset.goto);
    if (goToName && goToElement) {
      const goToElementValue = goToElement.getBoundingClientRect().top + pageYOffset;
      window.scrollTo({
        top: goToElementValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
