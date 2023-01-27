import React from "react";
import moment from "moment/moment";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [state, setState] = React.useState({ title: "", amount: 0, date: "" });

  const titleChangeHandler = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const dateHandler = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitExpenseData(state);
    setState({ title: "", amount: 0, date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={state.title}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={state.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={moment().format("YYYY-MM-DD")}
            value={state.date}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
