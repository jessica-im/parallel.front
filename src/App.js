import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Nav from './routes/Nav';
import About from './routes/About';
import Shop from './routes/Shop';


const App = () => {
    return (
         <Router>
              <div className="App">
                    <Nav />
                    <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="about" element={<About />}/>
                         <Route path="shop" element={<Shop />}/>
                    </Routes>
              </div>
         </Router>
    );
}

const Home = () => (
     <div>
          <h1>Home Page</h1>
     </div>
)

export default App;
