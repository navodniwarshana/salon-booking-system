import React from 'react'
import Login from './LoginActivitys/Login'
import ResetPassword from './LoginActivitys/ResetPassword'
import SignUp from './LoginActivitys/SignUp'

function LoginWin() {
  return (
    <div>
        <Login/>
        <ResetPassword/>
        <SignUp/>
    </div>
  )
}

export default LoginWin