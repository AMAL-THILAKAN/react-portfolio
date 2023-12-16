// import logo from './logo.svg';
import './App.css';
import MyImage from './assets/bagaaa.jpg';
import Navbar from './components/Navbar';
import Homeindex from './components/Homeindex';
import Skills from './components/Skills';
import Portfolio  from './components/Portfolio';
import Contacts  from './components/Contacts';




import React from 'react'
import {  BrowserRouter as Router, 
          Route,
          
          Routes} from 'react-router-dom';

function App() {
 return (
      <>
    <div style={{ 
          backgroundImage: `url(${MyImage})`,
          backgroundSize: 'cover',
          height : '100vh',
          }}>
      
       <Router>
       <Navbar title = "AT"/> 
          <Routes>
          <Route exact path="/" element={<Homeindex/>}  />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/Contacts" element={<Contacts/>} />

      </Routes>
    </Router> 


      
         
         </div>
      </>

  );
}

export default App;
