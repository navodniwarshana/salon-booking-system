import React, { useEffect, useState } from 'react'
import ResetPassword from './LoginActivitys/ResetPassword'
import SignUp from './LoginActivitys/SignUp'
import Profile from './Profile'
import Login from './LoginActivitys/Login'
import NaviLink from '../../Components/NaviLink'

function LoginWin() {
  const arr=[<Login/>,<ResetPassword/>]


const [option,setOption]=useState(0);{
  useEffect(() => {
    switch (option) {
      case 1:
        {<NaviLink url="/ResetPassword.jsx" />}
        break;
      case 2:
        {<ResetPassword option={option}/>}
        break;
      case 3:
        {<SignUp option={option}/>}
        break;
    
      default:
        break;
    }
  
  })
}


  return (
    <div>
        <Login/>
        {/*<ResetPassword/>*/}
    </div>
  )
}

export default LoginWin