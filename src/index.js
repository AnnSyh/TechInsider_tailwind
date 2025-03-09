
function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}
function toggleSubmenu(nunber) {
	document.getElementsByClassName("sidebar-menu__sublink")[nunber].classList.toggle("hidden");
}
function togglePopup() {
	document.getElementById("myDropdown").classList.toggle("show");
	document.getElementsByTagName("body")[0].classList.toggle("opened-modal");
	document.getElementsByClassName("modal")[0].classList.toggle("hidden");
}

