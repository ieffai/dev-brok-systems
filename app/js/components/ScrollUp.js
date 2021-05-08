export default class ScrollUp {
  constructor(scrollUpButton, scrollUpSvgPath) {
    this.scrollUpButton = scrollUpButton;
    this.scrollUpSvgPath = scrollUpSvgPath;
    this.pathLength = this.scrollUpSvgPath.getTotalLength();
  }

  _getTop() {
    const svgPath = this.scrollUpSvgPath;
    svgPath.style.strokeDasharray = `${this.pathLength} ${this.pathLength}`;
    svgPath.style.transition = 'stroke-dashoffset 20ms';
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  updateDashOffset() {
    const svgPath = this.scrollUpSvgPath;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = this.pathLength - ((this._getTop() * this.pathLength) / height);
    svgPath.style.strokeDashoffset = dashoffset;
  }

  buttonHide() {
    const offset = 100;
    if (this._getTop() > offset) {
      this.scrollUpButton.classList.add('scroll-up--active');
    } else {
      this.scrollUpButton.classList.remove('scroll-up--active');
    }
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
