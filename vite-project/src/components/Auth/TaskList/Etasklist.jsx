import React, { useContext, useEffect, useState } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { AuthContext } from '../../../context/AuthProvider';

const Etasklist = () => {
  
  const [userData,setUserData]=useContext(AuthContext)
  

  return (
    <div  className="w-full bg-gray-100 "
    style={{
      height: '50vh',        
      marginTop: '64px'     
    }}>
    <ScrollStack>
      {userData.map((emp, index) => (
        <ScrollStackItem key={index}>
         <div className="p-[2px] rounded-[20px] ">
        <div className="bg-white rounded-[18px] p-6 flex justify-between">
            <h2 className="text-xl font-bold mb-2">{emp.firstName}</h2>
              <p>{emp.taskDate}</p>
            </div>
             <h2 className="text-xl font-bold mt-4 flex justify-center" > Active Tasks:{emp.taskCount.active}</h2>
            <p className="text-gray-600 flex justify-center">Completed Tasks:{emp.taskCount.completed}</p>
            <p className="text-gray-600 flex justify-center">New Tasks:{emp.taskCount.newTask}</p>
            <p className="text-gray-600 flex justify-center">Failed Tasks:{emp.taskCount.failed}</p>
           
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  </div>
  );
};

export default Etasklist;
