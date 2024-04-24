import React from 'react'
import { MdDelete } from "react-icons/md";
import styles from "./Todoitem.module.css";
import { useContext } from 'react';
import todostore from '../src/store/todostore';
function Todoitem({todoName,todoDate}) {
    const {deletemaar}=useContext(todostore)
  return (
    <div>
    <div className="items-container">
       <div className="row new-row">
    <div className={`${styles.itemname}   col-6`} >
      {todoName}
    </div>
    <div className={`${styles.itemdate} col-4`}>
     {todoDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger new-button" onClick={(event)=>
              deletemaar(todoName)
   }><MdDelete size={21}/></button>
    </div>
  </div>
  </div>
    </div>
  )
}
export default Todoitem
