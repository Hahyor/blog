import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class=" navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <i class="fa-solid fa-blog"></i>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Styles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Lifestyle</a></li>
            <li><a class="dropdown-item" href="#">Health</a></li>
            <li><a class="dropdown-item" href="#">Family</a></li>
            <li><a class="dropdown-item" href="#">Management</a></li>
            <li><a class="dropdown-item" href="#">Travel</a></li>
            <li><a class="dropdown-item" href="#">Work</a></li>
          </ul>
          </li>
        <li class="nav-item">
          {/* <a class="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
        

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav