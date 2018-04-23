import React from 'react';


class Header extends React.Component {
  render(){
    return (
        <div className="antraste">
          <ul>
            <li>{this.props.firstTab}</li>
          </ul>

        </div>
    );
  }
}


export default Header;