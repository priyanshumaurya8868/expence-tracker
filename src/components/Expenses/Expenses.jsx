import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(+new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = (props.expenses ?? [])
    .filter((expense) => expense.date.getFullYear() === +filteredYear)
  
    const expenseItems  =  
    filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        date={exp.date}
        amount={exp.amount}
      />
    ));

    console.log(filteredExpenses)
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
