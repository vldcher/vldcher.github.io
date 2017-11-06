	var hamburger = document.querySelector(".hamburger");
	var menu = document.querySelector(".menu");

	// On click
	hamburger.addEventListener("click", function() {
		hamburger.classList.toggle("is-active");
		menu.classList.toogle('open');
		// console.log(menu);
		
	});

