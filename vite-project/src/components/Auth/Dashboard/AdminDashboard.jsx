import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import EmployeeTask from '../other/EmployeeTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full bg-gray-100'>
      <Header changeUser={props.changeUser}/>
<div className='flex gap-6 p-5'>
        <div className='w-1/2 h-auto'>
          <CreateTask />
        </div>
        <div className='w-1/2 '>
          <EmployeeTask/>
        </div>
      </div>
        
    </div>
  )
}

export default AdminDashboard
