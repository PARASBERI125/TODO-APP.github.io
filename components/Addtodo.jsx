import  { useState,useContext } from 'react'
import Todo from './Todo';
import styles from "./Addtodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import todostore from '../src/store/todostore';
function Addtodo() {
  const {addnewitems}=useContext(todostore)
    let[addname,setaddname]=useState("");
  let[adddate,setadddate]=useState("");
return (
    <div>
    <div className="items-container">
      <div className="row new-row">
    <div className= {`${styles.inputnaam} col-6` }>
      <input type="text" placeholder="Enter Todo Here" value={addname} onChange={(event)=>{
        addname=event.target.value;
        setaddname(addname)
      }} className={`${styles.inputnaam1}`}/>
    </div>
    <div className={`${styles.inputtarik} col-4`}>
      <input type="date" value={adddate} onChange={(event)=>{
        adddate=event.target.value;
        setadddate(adddate)
      }}className={`${styles.inputtarik1}`}></input>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success new-button" onClick={(event)=>{
      if(addname!=="" || adddate!==""){
      addnewitems(addname,adddate);
         
      setaddname("");
      setadddate("");}
    }}><IoMdAddCircleOutline size={21}/></button>
    </div>
  </div>
  <Todo ></Todo>
  </div>
    </div>
  )
}

export default Addtodo
