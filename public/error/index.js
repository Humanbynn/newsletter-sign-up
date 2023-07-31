
function updateImageSource() {
    var imageElement = document.querySelector('#image');

    if (window.innerWidth <= 600) {
      imageElement.src = './images/illustration-sign-up-mobile.svg'; 
    } else{imageElement.src='./images/illustration-sign-up-desktop.svg';
    } 
  }


  window.addEventListener('load', updateImageSource);
  window.addEventListener('resize', updateImageSource);