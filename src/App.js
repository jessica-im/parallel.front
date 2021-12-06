import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

import SignUp from './routes/SignUp'
import Login from './routes/Login'

const App = () => {

     const [ newName, setNewName ] = useState('');
     const [ newImage, setNewImage ] = useState('');
     const [ newWebsite, setNewWebsite ] = useState('');
     const [ profiles, setProfiles ] = useState([]);
     const [ user, setUser ] = useState({});

     const handleSignUp = (newUser) => {
          axios.post('https://parallel-back.herokuapp.com/api/useraccount', newUser)
          .then((response) => {
               if (response.data.username) {
                    setUser(response.data)
               } else {
                    console.log('error')
               }
          })
     }

     const handleLogin = (userObj) => {
          axios.put('https://parallel-back.herokuapp.com/api/useraccount/login', userObj)
          .then((response) => {
               if (response.data.username) {
                    setUser(response.data)
               } else {
                    console.log('error')
               }
          })
     }

     const handleNameChange = (event) => {
          setNewName(event.target.value)
     }

     const handleImageChange = (event) => {
          setNewImage(event.target.value)
     }

     const handleWebsiteChange = (event) => {
          setNewWebsite(event.target.value)
     }

     const handleFormSubmit = (event) => {
          event.preventDefault();
          axios.post('https://parallel-back.herokuapp.com/api/profile', {
               user: user.id,
               name: newName,
               image: newImage,
               website: newWebsite
          }).then(() => {
               axios.get('https://parallel-back.herokuapp.com/api/profile')
               .then((response) => {
                    setProfiles(response.data)
               })
          })
     }

     useEffect(() => {
          axios.get('https://parallel-back.herokuapp.com/api/profile')
          .then((response) => {
               setProfiles(response.data);
          })
     }, [])

     return (

          <main>
               <h1>Parallel</h1>
               <SignUp handleSignUp={handleSignUp} />
               <Login handleLogin={handleLogin} />
               <section>
                    <h2>Create a Profile</h2>
                    <form>
                         Name: <input type="text" onChange={handleNameChange} /><br/>
                         Image: <input type="text" onChange={handleImageChange} /><br/>
                         Website: <input type="text" onChange={handleWebsiteChange} /><br/>
                         <input type="submit" value="Create Profile" onSubmit={handleFormSubmit}/>
                    </form>
               </section>
               <section>
                    <h2>Profiles</h2>
                    <ul>
                         {profiles.map((profile) => {
                              return <li key={profile.id}>
                                        {profile.name}
                                        <img className="profile-img" src={profile.image} alt="user's profile"/>
                                        {profile.website}
                              </li>
                         })}
                    </ul>
               </section>
          </main>
     );
}

export default App;
