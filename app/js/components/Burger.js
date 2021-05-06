export default class Burger {
  constructor(burgerButton, burgerMenu) {
    this.burgerButton = burgerButton;
    this.burgerMenu = burgerMenu;
  }

  toggle() {
    const button = this.burgerButton;
    const menu = this.burgerMenu;
    if (button) {
     button.addEventListener('click', function () {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        button.classList.toggle('_active');
      }) 
    }
  }

  close() {
    const button = this.burgerButton;
    const menu = this.burgerMenu;
    if(button.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      menu.classList.remove('_active');
      button.classList.remove('_active');
    }

  }

}