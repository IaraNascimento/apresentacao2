(() => {
  const carrossels = document.getElementsByClassName('carrossel-wrap');
  const opacity = 0.3;

  Array.from(carrossels).forEach(carrossel => {
    const imagemPrev = document.createElement('img');
    imagemPrev.src = '../../assets/images/carrossel/prev.png';
    const imagemPrevWrap = document.createElement('span');
    imagemPrevWrap.classList.add('before');
    imagemPrevWrap.appendChild(imagemPrev);
    const imagemNext = document.createElement('img');
    imagemNext.src = '../../assets/images/carrossel/next.png';
    const imagemNextWrap = document.createElement('span');
    imagemNextWrap.classList.add('after');
    imagemNextWrap.appendChild(imagemNext);
    carrossel.appendChild(imagemPrevWrap);
    carrossel.appendChild(imagemNextWrap);

    const innerCarrossel = carrossel.getElementsByClassName('carrossel')[0];
    innerCarrossel.style.transform = 'translateX(0px)';
    carrossel.getElementsByClassName('before')[0].style.opacity = opacity;
    carrossel.getElementsByClassName('after')[0].style.opacity = 1;

    carrossel.getElementsByClassName('before')[0].addEventListener('click', () => {
      changeSlide(carrossel, 'before');
    });

    carrossel.getElementsByClassName('after')[0].addEventListener('click', () => {
      changeSlide(carrossel, 'after');
    });

    const images = carrossel.getElementsByTagName('li');
    Array.from(images).forEach(imagem => {
      imagem.addEventListener('click', () => {
        openBigImage(imagem);
      });
    });
  });

  function hideOrShowBtn(carrossel, btn) {
    const innerCarrossel = carrossel.getElementsByClassName('carrossel')[0];
    const itensQuantity = carrossel.getElementsByTagName('li').length;
    const currentSlide = getTranslateX(innerCarrossel);
    const arrowWidth = carrossel.getElementsByClassName('before')[0].offsetWidth;
    if (btn === 'before') {
      if (currentSlide >= 0) {
        carrossel.getElementsByClassName(btn)[0].style.opacity = opacity;
      } else {
        carrossel.getElementsByClassName(btn)[0].style.opacity = 1;
      }
    } else {
      if ((innerCarrossel.offsetWidth + arrowWidth) * (itensQuantity - 1) + currentSlide <= 0) {
        carrossel.getElementsByClassName(btn)[0].style.opacity = opacity;
      } else {
        carrossel.getElementsByClassName(btn)[0].style.opacity = 1;
      }
    }
  }

  function getTranslateX(el) {
    const style = window.getComputedStyle(el);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  function changeSlide(carrossel, direction) {
    if (carrossel.getElementsByClassName(direction)[0].style.opacity == 1) {
      const factor = direction === 'before' ? 1 : -1;
      const otherDirection = direction === 'before' ? 'after' : 'before';
      carrossel.getElementsByClassName('before')[0].style.opacity = opacity;
      carrossel.getElementsByClassName('after')[0].style.opacity = opacity;
      const innerCarrossel = carrossel.getElementsByClassName('carrossel')[0];
      const arrowWidth = carrossel.getElementsByClassName(direction)[0].offsetWidth;
      const currentSlide = getTranslateX(innerCarrossel);
      const slide = currentSlide + (innerCarrossel.offsetWidth + arrowWidth) * factor;
      innerCarrossel.style.transform = 'translateX(' + slide + 'px)';
      setTimeout(() => {
        carrossel.getElementsByClassName(otherDirection)[0].style.opacity = 1;
        hideOrShowBtn(carrossel, direction);
      }, 550);
    }
  }

  function openBigImage(imagem) {
    const imagemElement = document.createElement('img');
    imagemElement.src = imagem.getElementsByTagName('img')[0].src;
    imagemElement.classList.add('full-size-img');
    const imagemBackground = document.createElement('div');
    imagemBackground.classList.add('full-size-img-background');
    imagemBackground.appendChild(imagemElement);
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(imagemBackground);
    imagemBackground.addEventListener('click', () => {
      const currentBack = body.getElementsByClassName('full-size-img-background')[0];
      currentBack.parentNode.removeChild(currentBack);
    });
  }

})();
