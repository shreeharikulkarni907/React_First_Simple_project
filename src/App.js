
import { useState } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';


function App() {
  const [mode,setMode]=useState("light");
  const [tmode,setTmode]=useState("dark");


  return (
    <>
       
        <Navbar title="Textutisl" aboutText="About us" mode={mode} toggleMode={()=>{

          if(mode==="light")
          {
            setMode("dark");
            setTmode("light");
            document.body.style.backgroundColor="grey"
          }
          else
          {
            setMode("light");
            setTmode("dark");
            document.body.style.backgroundColor="white"
          
          }
        }} tmode={tmode}/>
        <div className="container my-3 ">
          <Textform heading='Enter the text to analyse' tmode={tmode}/>

          {/* <About/> */}

        </div>
        
    </>
  
   
  );
}

export default App;
