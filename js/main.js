const nav = document.querySelector('.site-header__nav');
const hamburger = document.querySelector('.site-header__hamburger');
const mobileMenu = document.querySelector('.site-header__menu');
const links = document.querySelectorAll('.site-header__menu li a');
const main = document.querySelector('main');
const donationAmountInput = document.querySelector('#donationAmount');

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

// ver o que está mal
donationAmountInput.addEventListener('input', (event) => {
	const newValue = event.target.value;
	const number = parseFloat(newValue);
	number.toLocaleString('pt-PT');

	console.log(number);

	!isNaN(event.target.value) ? (event.target.value = number) : (event.target.value = '');
});


inputNumber.addEventListener('input', function (event) {
	// Obtém o valor atual do input
	let value = event.target.value;

	// Remove todos os caracteres não numéricos (exceto ponto decimal e sinal negativo)
	value = value.replace(/[^\d.-]/g, '');

	// Converte para número e formata com vírgulas e espaços
	const formattedNumber = parseFloat(value).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

	// Define o valor formatado de volta ao in
	// Define o valor formatado de volta ao input
	event.target.value = formattedNumber;
});