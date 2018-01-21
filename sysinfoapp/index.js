


let output = `
    <h2 class="page-header">System Information</h2>
    <ul class="list-group">
    <li class="list-group-item">
      Node: ${process.versions.node}
    </li>
    <li class="list-group-item">
      Chrome: ${process.versions.chrome}
    </li>
    <li class="list-group-item">
      Electron: ${process.versions.electron}
    </li>
    <li class="list-group-item">
      System Architecture: ${process.arch}
    </li>
    <li class="list-group-item">
      User: ${process.env.USER}
    </li>
    </ul>
  `;


document.getElementById('output').innerHTML = output;

