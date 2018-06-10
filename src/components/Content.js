import React from 'react';


class Content extends React.Component {
  state = {
    income: [],
    expenses: [],
    tempNameIncome: '',
    tempNameExpenses: '',
    tempAmountIncome: '',
    tempAmountExpenses: ''
  };

  addIncome = () => {
    const newIncome = [...this.state.income, {name:this.state.tempNameIncome, amount:this.state.tempAmountIncome}];
    this.setState({
      income: newIncome
    })
  };

  addExpense = () => {
    const newExpenses = [...this.state.expenses, {name:this.state.tempNameExpenses, amount:this.state.tempAmountExpenses}];
    this.setState({
      expenses: newExpenses
    })
  };


  clearInputIncome = () => {
    this.setState({tempAmountIncome: '', tempNameIncome: ''})
  };

  clearInputExpenses = () => {
    this.setState({tempAmountExpenses: '', tempNameExpenses: ''})
  };

  inputHandlerIncomeName = (value) => {
    this.setState({
      tempNameIncome: value
    })
  };

  inputHandlerIncomeAmount = (value) => {
    this.setState({
      tempAmountIncome: value
    })
  };

  inputHandlerExpensesName = (value) => {
    this.setState({
      tempNameExpenses: value
    })
  };

  inputHandlerExpensesAmount = (value) => {
    this.setState({
      tempAmountExpenses: value
    })
  };

  render() {
    const income = this.state.income.map((inc, i) => {
      return <div key={i}> {inc.name} {inc.amount}  </div>
    });

    const expense = this.state.expenses.map((expense, i) =>{
      return <div key={i}> {expense.name} {expense.amount} </div>
    });

      const countExpenses = this.state.expenses.reduce((total, b) => {
        return (total + parseFloat(b.amount))
      }, 0);

    const countIncome = this.state.income.reduce((total, b)=>{
      return (total + parseFloat(b.amount))
    },0);

    const totalCount = countIncome - countExpenses;


    return (
        <div className="content1">
          <div className="remainder">
               Likutis: <span> {totalCount}</span>
          </div>
          <br/>


          <div className="inside">

            <div className="left-side">
              <div className="btn-left">

                  <input
                  onChange={(e) => this.inputHandlerIncomeName(e.target.value)}
                  type="text"
                  value={this.state.tempNameIncome}
                  placeholder="pajamų šaltinis"
                  />



                  <input
                      onChange={(e) => this.inputHandlerIncomeAmount(e.target.value)}
                      value={this.state.tempAmountIncome}
                      type="text"
                      placeholder="pajamų dydis (skaičius)"
                  />

                <button className="itraukti-2" onClick={() => {
                  this.addIncome();
                  this.clearInputIncome();
                }}>
                  itraukti
                </button>


              </div>
              <div className="pajamos">
                {income}
                <br/><br/><br/>
              </div>
              <div className="total">suma {this.state.income.length>0 && <span> {countIncome}</span>}
              </div>
            </div>



            <div className="right-side">
              <div className="btn-right">

                  <input
                      onChange={(e)=>this.inputHandlerExpensesName(e.target.value)}
                      type="text"
                      value={this.state.tempNameExpenses}
                  placeholder="islaidų šaltinis"
                  />



                  <input
                      onChange={(e) => this.inputHandlerExpensesAmount(e.target.value)}
                      type="text"
                      value={this.state.tempAmountExpenses}
                      placeholder="islaidų dydis (skaičius)"
                  />

                <button className="itraukti-2" onClick={() => {
                  this.addExpense();
                  this.clearInputExpenses();
                }}>itraukti
                  </button>
              </div>

              <div className="nuostoliai">
                {expense}
                <br/><br/><br/>
              </div>
                <div className="total2">suma {this.state.expenses.length>0 && <span> {countExpenses} </span>}
              </div>
            </div>
          </div>



        </div>
    );
  }

}


export default Content;