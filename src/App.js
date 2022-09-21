import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
     <Navbar></Navbar>
    <News headlines ='NewsMania - Top Headlines' pageSize = {8} ></News>
    </>
   
  );
}

export default App;
