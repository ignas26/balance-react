import React from 'react';


class Content extends React.Component {
  state = {
    income: [{name: 'atlyginimas', amount: 900}, {name: 'palukanos', amount: 80}],
    expenses: [{name: 'kelione', amount: 120}, {name: 'auto nuoma', amount: 80}],
    tempName: '',
    tempAmount: '',
    sumaExpensesTotal: 0
  };

  addIncome = () => {
    const newIncome = [...this.state.income, {name:this.state.tempName, amount:this.state.tempAmount}];
    this.setState({
      income: newIncome
    })
  };

  addExpense = () => {
    const newExpense = [...this.state.expenses, {name:this.state.tempName, amount:this.state.tempAmount}];
    this.setState({
      expenses: newExpense
    })
  };

  // countAmount = () =>{
  //
  // };

  clearInput = () => {
    this.setState({tempAmount: '', tempName: ''})
  };

  inputHandlerName = (value) => {
    this.setState({
      tempName: value
    })
  };
  inputHandlerAmount = (value) => {
    this.setState({
      tempAmount: value
    })
  };

  ExpensesAddition=(n)=>{
    const sumaExpenses=[...this.state.sumaExpensesTotal, n];
    this.setState({
      sumaExpensesTotal:sumaExpenses
    });
  };


  render() {
    const income = this.state.income.map((inc, i) => {
      return <li key={i}> {inc.name} {inc.amount}  </li>
    });

    const expense = this.state.expenses.map((expense, i) =>{
      return <li key={i}> {expense.name} {expense.amount} </li>
    });

    // const countSum = this.state.expenses.map((expense, i) =>{
    //   return <li key={i}> {expense.amount} </li>
    // });
    const count = this.state.expenses.reduce((total, b)=>{
      return (total + b.amount)
    },0);

    return (
        <div className="content">
          <div className="remainder">
            Liekana:
          </div>
          <br/>


          <div className="inside">

            <div className="left-side">
              <div className="btn-left">
                <div className="islaidos">
                  <input
                  onChange={(e) => this.inputHandlerName(e.target.value)}
                  type="text"
                  value={this.state.tempName}
                  placeholder="islaida"
                  />
                </div>

                <div className="suma">
                  <input
                      onChange={(e) => this.inputHandlerAmount(e.target.value)}
                      value={this.state.tempAmount}
                      type="text"
                      placeholder="islaidos dydis"
                  />
                </div>
                <button onClick={() => {
                  this.addIncome();
                  this.clearInput();
                }}>
                  itraukti
                </button>


              </div>
              <div className="nuostoliai">
                <div>{income}</div>
                <br/><br/><br/>
              </div>
              <div className="total">suma
              </div>
            </div>
            <div className="right-side">
              <div className="btn-right">
                <div className="pajamos">
                  <input
                      onChange={(e)=>this.inputHandlerName(e.target.value)}
                      type="text"
                      value={this.state.tempName}
                  placeholder="pajama"
                  />

                </div>
                <div className="suma-2">
                  <input
                      onChange={(e) => this.inputHandlerAmount(e.target.value)}
                      type="text"
                      value={this.state.tempAmount}
                      placeholder="pajamos dydis"
                  />
                </div>
                <button className="itraukti-2" onClick={() => {
                  this.addExpense();
                  this.ExpensesAddition();
                  this.clearInput();
                }}>itraukti
                  </button>
              </div>
              <div className="pelnas">
              </div>
              <div className="pajamos">
                <div>{expense}</div>
                <br/><br/><br/>
              </div>
              <div className="total2">suma {count}
              </div>
            </div>
          </div>
        </div>
    );
  }

}


export default Content;