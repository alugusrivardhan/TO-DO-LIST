import React, { useState } from 'react'
import TODOLIST from './TODOLIST';

function TODOLIST(){
    const {tasks, setTasks} = useState([]);
    const {newTask,setnewTasks} = useState("");
    
    function handleInputchange(event){
        setnewTasks(event.target.value);

    }
    function addtask(){
      if(newTask.trim() !==""){
        setTasks(t => [...t, newTask]);
        setnewTasks("");
      }
    }

    
    function deletetask(index){
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);

    }
    function moveuptask(index){
      if(index > 0){

        const updatedTasks = [...tasks];
        
        [updatedTasks [index], updatedTasks [index - 1]] = [updatedTasks[index - 1], updatedTasks [index]];
        
        setTasks (updatedTasks);

    }
  }
    function movedowntask(index){
      if(index < tasks.length - 1){

        const updatedTasks = [...tasks];
        
        [updatedTasks [index], updatedTasks [index - 1]] = [updatedTasks[index - 1], updatedTasks [index]];
        
        setTasks (updatedTasks);

      }
    }
  
    return(
    <div className='TODOLIST'>
             
             <h1>TO-DO-LIST
             </h1>
             <div>
                <input type='text' value={newTask} placeholder='Enter a task' onChange={handleInputchange}/>
             
             <button
               className='add-button'
               onClick={addtask}>add
               Add              
              </button>
              </div>

              <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                    className="delete-button"
                    onClick={() => deletetask(index)}>
                    Delete
                    </button>
                    <button
                    className="move-button"
                    onClick={() => moveuptask(index)}>
                    up
                    </button>
                    <button
                    className="move-button"
                    onClick={() => movedowntask(index)}>
                    Down
                    </button>
                </li>
                
                )}
              </ol>

    </div>);
    
}
export default TODOLIST