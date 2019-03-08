import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <div>
        <a onMouseEnter={this.showMenu} >
          Show menu
        </a>

        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;
