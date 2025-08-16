import React from 'react'

const Header = (props) => {
// const[username,setUsername]=useState('')
// if(!data){
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }

const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  //window.location.reload()
}
  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      {/* Left greeting */}
      <h1>
        Hello username<br />Welcome to Employee Dashboard
      </h1>

      {/* Right nav + logout */}
      <div className='flex gap-6 justify-items-end'>
        {["Home", "About", "Contact", "Help"].map((item, index) => (
          <h1 
            key={index} 
            className='text-lg font-bold cursor-pointer hover:text-gray-300 transition-colors'
          >
            {item}
          </h1>
        ))}

        <button  onClick={logOutUser}className='bg-white text-black px-5 py-2 rounded font-bold hover:bg-gray-200 transition-colors duration-200 hover:shadow-lg cursor-pointer'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
