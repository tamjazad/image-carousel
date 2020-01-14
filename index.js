const number_of_imgs = 6;
const image_display_time = 3000;

function updateImage(index) {
	var str = "img" + index + ".jpg";
	document.getElementById("carousel").setAttribute("src", str);
	console.log(str);
}

function imageCarousel() {
	updateImage(1);
	console.log(1);
	let i = 2;
	let j = 1;
	while (j < number_of_imgs) {
		setTimeout(function() {
			updateImage(i);
			console.log(i);
			i++;
		}, j * image_display_time);
		j++;
	}
}

imageCarousel();
var carousel = setInterval(imageCarousel, (number_of_imgs) * image_display_time);


