import moment from "moment";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };

  const onSubmitExpenseDataHandler = (data) => {
    return props.onSubmitExpenseData({
      id: moment.now(),
      ...data,
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpenseData={onSubmitExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
