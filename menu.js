const { app, Menu } = require('electron');

const setMenu = () => {
  const template = [
    {
      label: app.name,
      submenu: [
        { role: 'quit' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

module.exports = { setMenu };
