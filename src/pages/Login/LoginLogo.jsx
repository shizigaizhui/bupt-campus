import React from 'react'

import style from './LoginLogo.module.css'

function LoginLogo(props){
  // console.log( style );
  return(
    <div className={style.container}>
      <button className={style.title} > BUPT </button>
    </div>
  )
}

export default LoginLogo