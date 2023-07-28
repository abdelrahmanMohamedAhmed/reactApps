import React , {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle , setEnteredTitle ]=useState('');
  const [enteredAmount , setEnteredAmount ]=useState('');
  const [enteredDate , setEnteredDate ]=useState('');


  const changeHandler = (e)=>{
    setEnteredTitle(e.target.value);
  

  }

  const changeAmount  = (e)=>{
    setEnteredAmount(e.target.value);
  

  }

  const changeDate  = (e)=>{
    setEnteredDate(e.target.value);
  

  }

  const submittHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title :  enteredTitle , 
      amount : +enteredAmount , 
      date : new Date (enteredDate)
    };


    props.onSaveData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }


  return (
    <form onSubmit={submittHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value = {enteredTitle} onChange={changeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value = {enteredAmount} onChange={changeAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value = {enteredDate} onChange={changeDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={submittHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;