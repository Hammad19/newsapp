import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from 'react-router-dom'

function App() {

  const pagesize = 20;
  return (
    <>
     <Navbar></Navbar>
     <Routes>
    <Route exact path = "/" element= {<News key = 'business' category = 'business' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    <Route exact path = "/business" element= {<News key = 'business' category = 'business' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    
    
    <Route exact path = "/entertainment" element= {<News key = 'entertainment' category = 'entertainment' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    <Route exact path = "/general" element= {<News key = 'general' category = 'general' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    <Route exact path = "/health" element= {<News key = 'health' category = 'health' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    <Route exact path = "/science" element= {<News key = 'science' category = 'science' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    <Route exact path = "/sports" element= {<News key = 'sports' category = 'sports' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {29}/>}></Route>
    <Route exact path = "/technology" element= {<News key= 'technology' category = 'technology' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us" headlines ='NewsMania - Top Headlines' pagesize = {pagesize}/>}></Route>
    
    </Routes>
    </>
   
  );
}

export default App;
