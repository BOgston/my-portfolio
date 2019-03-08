import React, { Component } from 'react';

//Components
import Dropdown from './dropdown';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <Dropdown/>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Artwork</a>
            </li>


          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
