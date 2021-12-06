import React, { useState } from 'react'
 
const Login = ({handleLogin}) => {

     const [ username, setUsername ] = useState('');
     const [ password, setPassword ] = useState('');

     const login = (event) => {
          event.preventDefault();
          let userLogin = {
               username: username,
               password: password
          }
          handleLogin(userLogin);
     }

     const handleUsernameChange = (event) => {
          setUsername(event.target.value);
     }

     const handlePasswordChange = (event) => {
          setPassword(event.target.value);
     }

     return (
          <div>
               <h1>Login</h1>
               <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleUsernameChange} />
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={handlePasswordChange} />
                    <input type="submit" />
               </form>
          </div>
     )

}

export default Login
