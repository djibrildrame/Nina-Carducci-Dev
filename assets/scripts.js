document.addEventListener("DOMContentLoaded", function () {
    // Configuration de mauGallery avec JavaScript natif
    const gallery = document.querySelector(".gallery");

    if (gallery) {
        mauGallery(gallery, {
            columns: {
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
            },
            lightBox: true,
            lightboxId: "myAwesomeLightbox",
            showTags: true,
            tagsPosition: "top",
        });

        // Optionnel : Montrez la galerie après l'initialisation
        gallery.style.display = "block";
    }
});

