import React from 'react'
import LoginForm from './LoginForm'
import LoginLogo from './LoginLogo'

function Login(props){
  const { onlineTotal='unknown'} = props;
  return(
    <div>
      <LoginLogo/>
      <LoginForm/>
      <p>
        CURRENT { onlineTotal } people oneline
      </p>
    </div>
  )
}

export default Login;