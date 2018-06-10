import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";


class App extends React.Component {
  state={
    firstTab: 'A simple balance solution',
    total:'',
    total2:''
  };

  renameTotal = (value) => {
    console.log(value);
    this.setState({
      total: value
    })
  };
  renameTotal2 = (value) => {
    console.log(value);
    this.setState({
      total2: value
    })
  };

  render() {
    return (
        <div className="parent">
        <Header firstTab={this.state.firstTab}/>
          <Content
              renameTotal={this.renameTotal}
              renameTotal2={this.renameTotal2}
              pageTotal={this.state.total}
              pageTotal2={this.state.total2}
          />
        </div>
    )
  }


}







export default App;