import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData  ,
      id : Math.random().toString()
    };
    props.addHandler(expenseData)
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={saveExpenseHandler }/>
    </div>
  );
};

export default NewExpense;