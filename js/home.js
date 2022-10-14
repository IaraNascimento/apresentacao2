(() => {
  const menuItens = JSON.parse(localStorage.getItem('menu'));

  document.getElementById('home-content').append(buildContent(menuItens));

  function buildContent(itens) {
    let list = document.createElement('ul');
    list.classList = 'home-list';
    itens.forEach(item => {
      if (item.homeVisible) {
        let element = document.createElement('li');
        element.style.backgroundColor = item.color;
        element.innerHTML = ''
          + '<a href="' + item.target + '">'
          + '<img class="home-list-img" src="' + item.icon + '" />'
          + '<span class="home-list-first-text">' + item.label + '</span>'
          + '<span class="home-list-divider"></span>'
          + '<span class="home-list-second-text">' + item.description + '</span>'
          + '</a>';
        list.append(element);
      }
    });
    return list;
  }
})();
