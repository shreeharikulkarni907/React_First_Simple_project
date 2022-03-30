
import { useState } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState("light");
  const [tmode,setTmode]=useState("dark");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,status)=>{

    setAlert({
      message:message,
      type:status
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  




  return (
    <>
       
        <Navbar title="Textutisl" aboutText="About us" mode={mode} toggleMode={()=>{

          if(mode==="light")
          {
            setMode("dark");
            setTmode("light");
            showAlert("Dark Mode enabled ","success");

            document.body.style.backgroundColor="grey"
       
          }
          else
          {
            setMode("light");
            setTmode("dark");
            showAlert("Light mode enabled","success");
            document.body.style.backgroundColor="white"
            
          
          }
        }} tmode={tmode}/>

        <Alert alert={alert}/>
        
        <div className="container my-3 ">
          <Textform heading='Enter the text to analyse' tmode={tmode} showAlert={showAlert}/>

          {/* <About/> */}

        </div>

        
        
    </>
  
   
  );
}

export default App;
