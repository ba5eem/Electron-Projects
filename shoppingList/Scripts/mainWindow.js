  const electron = require('electron');
  const { ipcRenderer } =  electron;
  const ul = document.querySelector('ul');

  const colors = [
    'collection-item cyan lighten-4', 
    'collection-item deep-purple lighten-4', 
    'collection-item blue lighten-4',
    'collection-item teal lighten-4' ]

  // Add Items
  ipcRenderer.on('item:add', (e, item) => {
    ul.className = 'collection cyan darken-4';
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    if(item.length === 0){ return;}
    li.className = colors[Math.floor(Math.random() * colors.length)];
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