import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle(newTitle);
  }

  const changeHandler = (e) =>{
    setNewTitle(e.target.value)
  }

    
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} /> 
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <input onChange={changeHandler} type="text" value={newTitle} />
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem