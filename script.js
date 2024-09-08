function setMainImage(event) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = event.target.src;
}

document.querySelectorAll('.Imagenes').forEach(img => {
    img.addEventListener('click', setMainImage);
});