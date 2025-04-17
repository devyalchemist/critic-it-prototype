let navlinks = document.querySelector(".nav-links");
let menubtn = document.querySelector(".icon");
let closebtn = document.querySelector(".xmark");
let mainnav = document.querySelector(".nav-links ul");

menubtn.addEventListener("click", () => {
	menubtn.classList.add("hidden");
	navlinks.classList.add("icon");
	// navlinks.classList.add("move");
	if (mainnav.classList.contains("out")) {
		mainnav.classList.remove("out");
	}
	mainnav.classList.add("move");

	console.log(navlinks);
	// setTimeout(() => {
	// 	mainnav.classList.add("move");
	// }, 200);
});
closebtn.addEventListener("click", () => {
	mainnav.classList.remove("move");
	mainnav.classList.add("out");
	setTimeout(() => {
		navlinks.classList.remove("icon");
	}, 900);

	menubtn.classList.remove("hidden");
	console.log(mainnav);
});
console.log("Hi I am working");
