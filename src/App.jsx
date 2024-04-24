import AppName from "../components/AppName";
import Addtodo from "../components/Addtodo";
import "./app.css"
import todostore from "./store/todostore";
import { useContext,useState } from "react";

function App() {
 let todo1=useContext(todostore);
let [todo,settodo]=useState(todo1);

 let addnewitems=(addname,adddate)=>{
  const addfinal=[...todo,{name:addname,dueDate:adddate}];
    settodo(addfinal);
  }
  let deletemaar=(itemname)=>{
  let newtodoitems=todo.filter(item => item.name!==itemname);
  settodo(newtodoitems);
};
  return (
    <div className="hero">
    <todostore.Provider value={{todo:todo,
    deletemaar:deletemaar,addnewitems:addnewitems}}>
      <center className="todo-content">
      <AppName></AppName>
      <Addtodo></Addtodo>
      </center>
    </todostore.Provider>
    </div>
  )
}
export default App
