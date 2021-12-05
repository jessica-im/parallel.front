import { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css';

const About = () => {
     let [profiles, setProfiles] = useState([])

     const getProfiles = () => {
          axios.get('https://parallel-back.herokuapp.com/api/profile')
          .then(
               (response) => setProfiles(response.data),
               (error) => console.error(error)
          )
          .catch((error) => console.error(error))
     }

     useEffect(()=>{
          axios.get('https://parallel-back.herokuapp.com/api/profile')
          .then((response)=>{
          	setProfiles(response.data);
          })
     },[])

     return (
          <div>
               <h1>About Page</h1>
               {
                    profiles.map((profile) => {
                         return <div>
                              {profile.name}
                              <img src={profile.image}/>
                         </div>
                    })
               }
          </div>
     );
}

export default About;
