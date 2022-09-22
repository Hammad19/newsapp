import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {


  const[progress,setProgress] = useState(0);
  const pagesize = 6;
  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
     <Navbar></Navbar>
     <Routes>
    <Route exact path = "/" element= {<News setProgress= {setProgress} key = 'business' category = 'business' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    <Route exact path = "/business" element= {<News setProgress= {setProgress} key = 'business' category = 'business' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    
    
    <Route exact path = "/entertainment" element= {<News setProgress= {setProgress} key = 'entertainment' category = 'entertainment' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    <Route exact path = "/general" element= {<News setProgress= {setProgress} key = 'general' category = 'general' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    <Route exact path = "/health" element= {<News setProgress= {setProgress} key = 'health' category = 'health' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    <Route exact path = "/science" element= {<News setProgress= {setProgress} key = 'science' category = 'science' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    <Route exact path = "/sports" element= {<News setProgress= {setProgress} key = 'sports' category = 'sports' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {29}/>}></Route>
    <Route exact path = "/technology" element= {<News setProgress= {setProgress} key= 'technology' category = 'technology' apiKey ='0eac8158287f4625aae58d2ad60e12fe'  country= "us"  pagesize = {pagesize}/>}></Route>
    
    </Routes>
    </>
   
  );
}

export default App;
