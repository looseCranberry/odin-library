const genres = [
	"Fiction",
	"Nonfiction",
	"Biography",
	"Horror",
	"Humor",
	"Autobiography",
	"Adventure",
	"Novel",
	"Young Adult",
	"Children",
];

const newbook = document.getElementById("new");
const bookTemplate = document.getElementById("bookTmp");
const menuTemplate = document.getElementById("menuTmp");

const menubuilder = {
	display: () => {
		newbook.innerHTML = "";
		newbook.classList.remove("new");
		newbook.setAttribute("onclick", "");
		newbook.append(menuTemplate.content.cloneNode(true));
		menubuilder.hook();
	},
	hook: () => {
		let daStars = document.querySelectorAll(".star");
		console.log("Wtf...");
		daStars[0].classList.add("clicked");
		daStars.forEach((star) => {
			star.onclick = (x) => {
				let starcnt = Number.parseInt(star.classList[1].substr(3));
				if (star.classList.contains("clicked")) {
					for (let i = 4; i > starcnt; i--) {
						if (daStars[i].classList.contains("clicked"))
							daStars[i].classList.remove("clicked");
					}
				} else {
					for (; starcnt > -1; starcnt--) {
						if (!daStars[starcnt].classList.contains("clicked"))
							daStars[starcnt].classList.add("clicked");
					}
				}
			};
			star.onmouseover = (x) => {
				let starcnt = Number.parseInt(star.classList[1].substr(3));
				for (; starcnt > -1; starcnt--) {
					daStars[starcnt].classList.add("hovering");
				}
			};
			star.onmouseout = (x) => {
				let starcnt = Number.parseInt(star.classList[1].substr(3));
				for (; starcnt > -1; starcnt--) {
					daStars[starcnt].classList.remove("hovering");
				}
			};
		});

		let genreList = document.querySelector(".genre-container");
		genres.forEach((x) => {
			let y = document.createElement("div");
			y.setAttribute("class", "genre-item genre-released");

			let span = document.createElement("span");
			span.innerText = "+";

			let spanner = document.createElement("span");
			spanner.appendChild(span);
			y.appendChild(spanner);
			y.appendChild(document.createTextNode(x));
			y.onclick = (xx) => {
				if (y.classList.contains("genre-released")) {
					y.classList.remove("genre-released");
					y.classList.add("genre-added");
					y.children[0].children[0].innerText = "-";
				} else {
					y.classList.remove("genre-added");
					y.classList.add("genre-released");
					y.children[0].children[0].innerText = "+";
				}
			};

			genreList.appendChild(y);
		});
	},
	placehold: () => {
		let x = document.createElement("img");
		x.setAttribute("src", "Book.New.png");
		x.setAttribute("width", "auto");
		x.setAttribute("height", "220px");
		let y = document.createElement("h1");
		y.innerText = "Add New Book";
		newbook.appendChild(x);
		newbook.appendChild(y);
	},
};
