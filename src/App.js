import React, { useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  let DUMMY_EXPENSE = [
    {id: 'e1', title: 'School Fee', amount: 250,  date: new Date(2021, 5, 12)},
    {id: 'e2', title: 'Books', amount: 150,  date: new Date(2021, 2, 14)},
    {id: 'e3', title: 'House Rent', amount: 1500,  date: new Date(2022, 5, 2)},
    {id: 'e4', title: 'Food', amount: 2050,  date: new Date(2022, 2, 2)},
  ];

  const [expenses, setExpenses] =useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) =>{
   const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses)
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </>
  )
}

export default App