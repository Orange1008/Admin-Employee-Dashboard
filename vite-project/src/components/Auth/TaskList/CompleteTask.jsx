import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div>
      <div className="p-[2px] rounded-[20px] ">
            <div className="bg-white rounded-[18px] p-6 flex justify-between">
            <h2 className="text-xl font-bold mb-2">{task.categories}</h2>
              <p>{task.taskDate}</p>
            </div>
             <h2 className="text-xl font-bold mt-4 flex justify-center" >{task.taskTitle}</h2>
            <p className="text-gray-600 flex justify-center">{task.taskDescription}</p>
            <div className='mt-4'>
                <button className='w-full'>
                    Complete
                </button>
            </div>
          </div>
    </div>
  )
}

export default CompleteTask
