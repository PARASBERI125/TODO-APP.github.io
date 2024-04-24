import React from 'react'
import { useContext } from 'react'
import todostore from '../src/store/todostore'
import Todoitem from './Todoitem'
function Todo() {
  const { todo } =useContext(todostore);
  return (
    <div >
    <div className='items-container'>
    {todo.map((items)=>(
      <Todoitem todoDate={items.dueDate} todoName={items.name} ></Todoitem>
    )
    )
    }
  </div>
    </div>
  )
}
export default Todo
