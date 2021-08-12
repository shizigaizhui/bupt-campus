/*
 * @Author: your name
 * @Date: 2021-08-12 13:28:24
 * @LastEditTime: 2021-08-12 15:04:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bupt-campus\src\pages\login\loginForm.jsx
 */


import React from 'react'


class LoginForm extends React.Component{

  constructor(props){
    super(props);
    // const { usersTotalInfo } = props;
    // const { onelineTotal, registeredTotal, visitorTotal } = this.usersTotalInfo;
  }

  render(){
    return(
      <form action="./"  target="_self" acceptCharset="UTF-8"
        ectype="application/x-www-form-urlencoded" autoComplete="off" noValidate>

        <fieldset method="POST">
          <legend> User Login </legend>
          <label htmlFor="user"> UserName </label>
          <input type="text" name="userName" id="user" defaultValue=""></input>
          <label htmlFor="code"> PassCode </label>
          <input type="text" name="passCode" id="code" defaultValue=""></input>
          <input type="submit" value="submit"></input>
        </fieldset>

        <fieldset>
          <legend> Not user? </legend>
          <button> register </button>
          <button> visitor </button>
        </fieldset>
      </form>

    )
  }
}

export default LoginForm;