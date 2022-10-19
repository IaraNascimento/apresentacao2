(() => {

  const maxIdleTime = 5 * 60;
  localStorage.setItem('idleTime', 0);

  function goHomeAndPlayGif() {
    localStorage.setItem('showIdle', true);
    if (!window.location.href.includes('/index.html')) {
      document.location = '../../index.html';
    } else {
      document.getElementById('home-screensaver').style.display = 'flex';
    }
  }

  function idleTimeLooping() {
    if (window.location.href.includes('/index.html')) {
      document.getElementById('home-screensaver').style.display = 'none';
    }
    setTimeout(() => {
      const idleTime = JSON.parse(localStorage.getItem('idleTime')) + 5;
      localStorage.setItem('idleTime', idleTime);
      console.log(idleTime);
      if (idleTime > maxIdleTime) {
        goHomeAndPlayGif();
      } else {
        idleTimeLooping();
      }
    }, 5000);
  }

  document.onclick = () => {
    localStorage.setItem('idleTime', 0);
    localStorage.setItem('showIdle', false);
    idleTimeLooping();
  }

  if (JSON.parse(localStorage.getItem('showIdle'))) {
    document.getElementById('home-screensaver').style.display = 'flex';
  } else {
    idleTimeLooping();
  }

})();