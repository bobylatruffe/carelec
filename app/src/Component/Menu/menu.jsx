import React from 'react';
import { Link } from 'react-router-dom';

import "./Menu.css"

class Menu extends React.Component {
  render() {
    return (
        <nav className='menu'>
          <div className='menu-container'>
            <ul>
              <li><a href='/' className='logo'><span className='red'>car</span>elec</a></li>
              <li><a href='/'>Accueil</a></li>
              <li><a href='/test'>Notre garage</a></li>
              <li><a href='#'>Comment ça marche</a></li>
              <li><a href='#'>Faire un devis</a></li>
              <li><a href='#'>Aides</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#' className='compte'></a></li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default Menu;