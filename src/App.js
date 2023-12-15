// import logo from './logo.svg';
import './App.css';
import MyImage from './assets/bagaaa.jpg';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
      <>
    <div style={{ 
          backgroundImage: `url(${MyImage})`,
          backgroundSize: 'cover'
        }}>
          
        


      <Navbar title = "AT"/>
      <Home />
      
    </div>
      </>

  );
}

export default App;
