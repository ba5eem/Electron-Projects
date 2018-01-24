  const electron = require('electron');
  const { ipcRenderer } =  electron;
  const ul = document.querySelector('ul');

  // Add Items
  ipcRenderer.on('item:add', (e, item) => {
    ul.className = 'collection';
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    li.className = 'collection-item';
    li.appendChild(itemText);
    ul.appendChild(li);
  })
  // Clear Items
  ipcRenderer.on('item:clear', () => {
    ul.innerHTML = '';
    ul.className = '';
  });

  // Delete Items
  ul.addEventListener('dblclick', (e) => {
    e.target.remove();
    if(ul.children.length == 0){
      ul.className = '';
    }

  })