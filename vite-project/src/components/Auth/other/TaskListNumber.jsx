import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between mt-10 screen gap-5 '>
      <div className='h-40 w-[45%] bg-blue-500 rounded   text-white text-2xl font-bold flex flex-col items-center justify-center'>
<h2 className='text-3xl font-semibold  '>{data.taskCount.newTask}</h2>
<h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-500 rounded   text-white text-2xl font-bold flex flex-col items-center justify-center'>
<h2 className='text-3xl font-semibold  '>{data.taskCount.active}</h2>
<h3 className='text-xl font-medium'> Active Tasks</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-500 rounded   text-white text-2xl font-bold flex flex-col items-center justify-center'>
<h2 className='text-3xl font-semibold  '>{data.taskCount.completed}</h2>
<h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-500 rounded   text-white text-2xl font-bold flex flex-col items-center justify-center'>
<h2 className='text-3xl font-semibold  '>{data.taskCount.failed}</h2>
<h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
    
  )
}

export default TaskListNumber
