import React from 'react'
import Expenses from './components/Expenses/Expenses'

const App = () => {

  let expenses = [
    {id: 'e1', title: 'School Fee', amount: 250,  date: new Date(2021, 5, 12)},
    {id: 'e2', title: 'Books', amount: 150,  date: new Date(2021, 2, 14)},
    {id: 'e3', title: 'House Rent', amount: 1500,  date: new Date(2022, 5, 2)},
    {id: 'e4', title: 'Food', amount: 2050,  date: new Date(2022, 2, 2)},
  ];

  return (
    <>
      <h1>Let's get started</h1>
      <Expenses item={expenses}/>
    </>
  )
}

export default App