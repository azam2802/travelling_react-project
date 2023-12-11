import { Route, Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Home/Home';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {

  const func =()=>{
    
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
