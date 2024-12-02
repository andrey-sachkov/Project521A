document.addEventListener('DOMContentLoaded', () => {
    pannellum.viewer('panorama1', {
        type: 'equirectangular',
        panorama: 'images/IMG_20240612_100102_00_042.jpg',
        autoLoad: true
    });

    pannellum.viewer('panorama2', {
        type: 'equirectangular',
        panorama: 'images/IMG_20240612_100102_00_041.jpg',
        autoLoad: true
    });

    const panoramaImage = new PANOLENS.ImagePanorama('images/IMG_20240612_100102_00_042.jpg');
    const imageContainer = document.querySelector('.image-container');
    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: false,
    });

    viewer.add(panoramaImage);
});
