$(document).ready(function () {
    // Initialisation de la galerie
    $('.gallery').mauGallery({
      columns: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3
      },
      lightBox: true,
      lightboxId: 'myAwesomeLightbox',
      showTags: true,
      tagsPosition: 'top'
    });
  
    // ⏱️ Démarrage automatique du filtrage toutes les 5 secondes
    setTimeout(() => {
      const tags = $('.tags-bar .nav-link');
      let index = 0;
  
      setInterval(() => {
        // 1. Supprimer les classes actives de tous les boutons
        tags.removeClass('active active-tag').css('background-color', '');
  
        // 2. Ajouter la classe active au bouton courant
        const currentTag = tags.eq(index);
        currentTag.addClass('active active-tag').css('background-color', '#beb45a');
  
        // 3. Récupérer la valeur du tag (ex: "Concert", "Mariages", etc.)
        const tag = currentTag.data('images-toggle');
  
        // 4. Masquer toutes les images
        $('.gallery-item').each(function () {
          const itemTag = $(this).data('gallery-tag');
          const parent = $(this).closest('.item-column');
  
          // Afficher selon le tag
          if (tag === 'all' || itemTag === tag) {
            parent.show();
          } else {
            parent.hide();
          }
        });
  
        // 5. Passer à la catégorie suivante (boucle)
        index = (index + 1) % tags.length;
      }, 4000); // Toutes les 4 secondes
    }, 1000); // Délai d'attente pour laisser mauGallery s'initialiser
  });
  