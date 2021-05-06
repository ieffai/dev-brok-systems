import Burger from '../js/components/Burger';
import ScrollOnPage from '../js/components/ScrollOnPage'
import ScrollUp from '../js/components/ScrollUp';
import Animation from '../js/components/Animation';



const burgerButton = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.nav__links');
const burger = new Burger(burgerButton, burgerMenu);

const scrollOnPage = new ScrollOnPage();
const menuLinks = document.querySelectorAll('.nav__link, .header__button');

const scrollUpButton = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const scrollUp = new ScrollUp(scrollUpButton, scrollUpSvgPath);

const animItems = document.querySelectorAll('._anim-items');
const animation = new Animation(animItems);



document.addEventListener('DOMContentLoaded', () => {
	///scrollUp
	window.addEventListener('scroll', () => {
		scrollUp.updateDashOffset();
		scrollUp.buttonHide();
		animation.animation();
	})
	scrollUpButton.addEventListener('click', () => {
		scrollUp.scrollUp();
	})


	//ScrollTo
	scrollOnPage.addListeners(menuLinks);
	const list = document.querySelector('.nav__links');
	list.addEventListener('click', () => {
		burger.close(burgerButton, burgerMenu)
	})

	//burger
	burger.toggle(burgerButton, burgerMenu);
	animation.animation();
})
