    // JavaScript para manejar el desplazamiento y agregar/quitar la clase 'hidden'
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.querySelector('header').classList.remove('hidden');
      } else {
        document.querySelector('header').classList.add('hidden');
      }

      prevScrollPos = currentScrollPos;
    };