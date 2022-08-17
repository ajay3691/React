import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
  return (
        <div>
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
              <a href="#" class="navbar-brand text-light">Notwell company</a>
                <div class="ml-auto">
                    <ul class="navbar-nav">
                      <li class="nav-list"><a class="nav-link text-light" href="./index.html">Home</a></li>
                      <li class="nav-list"><a class="nav-link text-light" href="./about.html">About</a></li>
                      <li class="nav-list"><a class="nav-link text-light" href="./product.html">Product</a></li>
                      <li class="nav-list"><a class="nav-link text-light" href="./contact.html">Contact </a></li>
                      <li class="nav-item"><a class="nav-link text-light" href="services.html" >services</a></li>
                    </ul>
                </div>
            </nav>
        
        </div>
    )
  }
}

export default Navbar
