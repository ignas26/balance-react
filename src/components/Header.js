import React from 'react';


class Header extends React.Component {
  render(){
    return (
        <div className="topic">
            <h1>{this.props.firstTab}</h1>
        </div>
    );
  }
}


export default Header;