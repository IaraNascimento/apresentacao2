(() => {
  const ref = localStorage.getItem('ref');
  const menuItens = JSON.parse(localStorage.getItem('menu'));

  document.getElementById('menu').append(buildContent(menuItens));

  function buildContent(itens) {
    let list = document.createElement('ul');
    list.classList = 'menu-list';
    itens.forEach(item => {
      let element = document.createElement('li');
      if (localStorage.getItem('active-menu') == item.id) {
        element.classList.add('active');
      }
      element.innerHTML = ''
        + '<a href="' + ref + item.target + '">'
        + '<img class="menu-list-img" src="' + ref + item.icon + '" />'
        + '</a>';
      list.append(element);
    });
    return list;
  }
})();
