import { useState } from 'react';

const SignUp = ({handleSignUp}) => {
     const [ username, setUsername ] = useState('');
     const [ password, setPassword ] = useState('');

     const signUp = (event) => {
          event.preventDefault();
          let newUser = {
               username: username,
               password: password
          }
          handleSignUp(newUser);
     }

     const handleUsernameChange = (event) => {
          setUsername(event.target.value);
     }

     const handlePasswordChange = (event) => {
          setPassword(event.target.value);
     }

     return (
          <div>
               <h1>Sign Up</h1>
               <form onSubmit={signUp}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleUsernameChange} />
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={handlePasswordChange} />
                    <input type="submit" />
               </form>
          </div>
     )

}

export default SignUp;
