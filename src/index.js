
function toggleDropdown() {
	const menu = document.querySelector('#myDropdown');
    menu.classList.toggle('translate-x-0');
}
function toggleSubmenu(number) {
	document.getElementsByClassName("sidebar-menu__sublink")[number].classList.toggle("hidden");
	document.getElementsByClassName("sidebar-menu__arrow")[0].parentElement.parentElement.classList.toggle("my-[10px]");
	const carrentMenuItem = document.getElementsByClassName("sidebar-menu__arrow")[number];
	carrentMenuItem.querySelector("svg").classList.toggle("rotate-90");
}
function togglePopup() {
	document.getElementsByTagName("body")[0].classList.toggle("opened-modal");
	document.getElementsByClassName("modal")[0].classList.toggle("hidden");
	document.getElementsByClassName("sticky")[0].classList.toggle("z-10");
}
