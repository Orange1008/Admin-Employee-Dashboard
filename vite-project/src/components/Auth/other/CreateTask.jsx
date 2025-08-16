import React, { useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { useContext } from 'react'
const CreateTask = () => {

  const [userData,setUserData]=useContext(AuthContext)
  
  const[taskTitle,setTaskTitle]=useState('')
   const[taskDescription,setTaskDescription]=useState('')
   const[taskDate,setTaskDate]=useState('')
  const[assignto,setassignto]=useState('')
  const[newtask,setnewTask]=useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
   setnewTask({taskTitle,taskDescription,taskDate,assignto,active:false,newTask:true,failed:false,completed:false})
   const data=userData
   data.forEach(function(elem){
    if(assignto==elem.firstName){
      elem.tasks.push(newtask)
      elem.taskCount.newTask=elem.taskCount.newTask+1
      console.log(elem);
      
      
    }
   })
   setUserData(data)
   
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Task</h2>

      <form  onSubmit={(e)=>{
        submitHandler(e)
      }}className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Task Title</label>
          <input
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
            type="text"
            className="border-2 border-gray-300 p-2 rounded w-full"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Task Description</label>
          <textarea
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}

            className="border-2 border-gray-300 p-2 rounded w-full"
            placeholder="Enter task description"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Assign To</label>
          <select 
          value={assignto}
          onChange={(e)=>{
            setassignto(e.target.value)
          }} 
          className="border-2 border-gray-300 p-2 rounded w-full">
            <option value="">Select Employee</option>
            <option value="John">John</option>
            <option value="Sarah">Sarah</option>
            <option value="Raj">Raj</option>
            <option value="Priya">Priya</option>
            <option value="Ali">Ali</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Due Date</label>
          <input
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
            type="date"
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button
       
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Assign Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
