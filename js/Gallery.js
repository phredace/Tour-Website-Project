const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').getAttribute('src');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox'); // Add 'lightbox' class to the lightbox element
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-button">&times;</span>
        <img src="${imgSrc}" alt="Tour Image">
      </div>
    `;
    document.body.appendChild(lightbox);
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeButton = document.querySelector('.close-button');
    
    lightbox.classList.add('open'); // Add 'open' class to show the lightbox
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
    
    closeButton.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
