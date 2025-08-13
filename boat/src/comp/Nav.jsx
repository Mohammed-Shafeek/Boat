import React from 'react'
import img1 from "../assets/img/1.svg"

export const Nav = () => {
  return (
    <div >
        {/* <nav className='nav'>
            
            <div ><img src={img1} alt="" /> </div>
            <div className='nav'>
              <p>category</p>
              <p>boat personilication</p>
              <p>gift with boat</p>
              <p>carporate orders</p>
              <p>more</p>            
            </div>
            <div >
              <input type="text" placeholder='search earbuds' />
              
            </div>
        </nav> */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <div ><img src={img1} alt="" /> </div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">boat personilication</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">gift with boat</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">carporate orders</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
   

  </div>
  <br />
  <i class="fa-regular fa-user"></i>
  <br />
  <br />
  <i class="fa-solid fa-bag-shopping"></i>
</nav>
    </div>
  )
}
