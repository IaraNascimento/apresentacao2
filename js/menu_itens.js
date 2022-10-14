(() => {
  const menuItens = [
    {
      "label": "",
      "description": "",
      "target": "index.html",
      "color": "#000000",
      "homeVisible": false,
      "icon": "assets/images/menu/icon_home.png"
    }, {
      "label": "Institucional Tegra",
      "description": "números atualizados",
      "target": "src/institucional/institucional.html",
      "color": "#F6BB4C",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_01.png"
    }, {
      "label": "ESG",
      "description": "Iniciativas<br />Pilares<br />Política",
      "target": "src/esg/esg.html",
      "color": "#E3B25E",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_02.png"
    }, {
      "label": "Selo Aqua",
      "description": "Selo<br />Empreendedor<br />Diferenciais",
      "target": "src/selo_aqua/selo_aqua.html",
      "color": "#D0AA6B",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_03.png"
    }, {
      "label": "Gentilezas Urbanas",
      "description": "Imagens aéres adotadas<br />Resumo projeto de adoções",
      "target": "src/gentilezas_urbanas/gentilezas_urbanas.html",
      "color": "#BEA277",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_04.png"
    }, {
      "label": "Programas Sociais",
      "description": "Exemplos Case",
      "target": "src/programas_sociais/programas_sociais.html",
      "color": "#AB9A80",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_05.png"
    }, {
      "label": "6",
      "description": "6",
      "target": "index.html",
      "color": "#989187",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_06.png"
    }, {
      "label": "7",
      "description": "7",
      "target": "index.html",
      "color": "#86898D",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_07.png"
    }
  ];

  localStorage.setItem('menu', JSON.stringify(menuItens));
})();
