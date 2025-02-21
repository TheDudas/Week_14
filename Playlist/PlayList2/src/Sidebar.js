/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});




<html lang="en">

<body data-new-gr-c-s-check-loaded="14.1223.0" data-gr-ext-installed="">

    
    <main>
      <h1 class="visually-hidden">Sidebars examples</h1>
    
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
              Customers
            </a>
          </li>
        </ul>
        <hr>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    

      <div class="b-example-divider"></div>
    </main>
</body>
</html>

