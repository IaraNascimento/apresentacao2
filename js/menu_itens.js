(() => {
  const menuItens = [
    {
      "id": "home",
      "label": "",
      "description": "",
      "target": "index.html",
      "color": "#000000",
      "homeVisible": false,
      "icon": "assets/images/menu/icon_home.png"
    }, {
      "id": "institucional",
      "label": "Institucional Tegra",
      "description": "Números atualizados",
      "target": "src/institucional/institucional.html",
      "color": "#F6BB4C",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_01.png"
    }, {
      "id": "esg",
      "label": "ESG",
      "description": "Iniciativas<br />Pilares<br />Política",
      "target": "src/esg/esg.html",
      "color": "#E3B25E",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_02.png"
    }, {
      "id": "selo_aqua",
      "label": "Selo Aqua",
      "description": "Selo<br />Empreendedor<br />Diferenciais",
      "target": "src/selo_aqua/selo_aqua.html",
      "color": "#D0AA6B",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_03.png"
    }, {
      "id": "gentilezas_urbanas",
      "label": "Gentilezas Urbanas",
      "description": "Imagens aéres adotadas<br />Resumo projeto de adoções",
      "target": "src/gentilezas_urbanas/gentilezas_urbanas.html",
      "color": "#BEA277",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_04.png"
    }, {
      "id": "programas_sociais",
      "label": "Programas Sociais",
      "description": "Exemplos Case",
      "target": "src/programas_sociais/programas_sociais.html",
      "color": "#AB9A80",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_05.png"
    }, {
      "id": "entregas",
      "label": "Entregas",
      "description": "Últimos lançamentos",
      "target": "src/entregas/entregas.html",
      "color": "#989187",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_06.png"
    }, {
      "id": "premiacoes",
      "label": "Premiações",
      "description": "",
      "target": "src/premiacoes/premiacoes.html",
      "color": "#86898D",
      "homeVisible": true,
      "icon": "assets/images/menu/icon_link_07.png"
    }
  ];

  localStorage.setItem('menu', JSON.stringify(menuItens));
})();
