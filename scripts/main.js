const nav = document.querySelector('.site-header__nav');
const hamburger = document.querySelector('.site-header__hamburger');
const mobileMenu = document.querySelector('.site-header__menu');
const links = document.querySelectorAll('.site-header__menu li a');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
	nav.classList.toggle('active');
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
	!main.style.filter ? (main.style.filter = 'opacity(50%)') : (main.style.filter = '');
});

links.forEach((link) =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
		nav.classList.remove('active');
	})
);
