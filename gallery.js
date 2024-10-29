const galleryItems = document.querySelectorAll('.gallery-item');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const closeBtn = overlay.querySelector('.close-btn');

galleryItems.forEach(item => {
	const image = item.querySelector('img');
	image.addEventListener('click', () => {
		overlayImage.src = image.src;
		overlay.classList.add('show');
	});
});

closeBtn.addEventListener('click', () => {
	overlay.classList.remove('show');
});
