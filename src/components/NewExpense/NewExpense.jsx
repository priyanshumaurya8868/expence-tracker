import moment from 'moment';
import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props) {

    const onSubmitExpenseDataHandler = (data) => {
        return props.onSubmitExpenseData({
            id : moment.now(),
            ...data
        })
    }

  return (
    <div className='new-expense'>
    <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler}/>
    </div>
  )
}


export default NewExpense
