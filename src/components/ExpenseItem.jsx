import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
 
 const ExpenseItem = (prop) => {
  return (
    <div className="expense-item">
    <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">{prop.amount}</div>
      </div>
    </div>
  );
};
export default  ExpenseItem
