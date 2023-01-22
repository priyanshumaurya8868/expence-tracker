import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
const Expenses = (props) => {
  const expenseItems = props.expenses.map((exp) => (
    <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
  ));
  return <div className="expenses">{expenseItems}</div>;
};

export default Expenses;
