import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Routes>
    <Route path = "/About" element= {<News category = 'sports' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "in" headlines ='NewsMania - Top Headlines' pageSize = {8}/>}></Route>
    
    </Routes>
    </>
   
  );
}

export default App;
