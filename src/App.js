
import { useState } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

import Alert from './components/Alert';

import "react-color-palette/lib/css/styles.css";

// Note: Behind the scenes a <Link> renders an <a> with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
  const [mode,setMode]=useState("light");
  const [tmode,setTmode]=useState("dark");
  const [alert,setAlert]=useState(null);
  const [status,changestatus]=useState(false);
  // cosnt [textalert,settextalert]=useStatenu

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
    <Router>
       
        <Navbar title="Textutisl" aboutText="About us" mode={mode} toggleMode={()=>{

          if(mode==="light")
          {
       
            setMode("dark");
            setTmode("light");
            showAlert("Dark Mode enabled ","success");
            changestatus(!status);
 


            document.body.style.backgroundColor="grey"
       
          }
          else
          {
            setMode("light");
            setTmode("dark");
            showAlert("Light mode enabled","success");
            document.body.style.backgroundColor="white"
            
          
          }
        }} tmode={tmode}

       
        
        />



        <Alert alert={alert}/>

       
        
        <div className="container my-3 ">
          
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
              <Textform  heading='Enter the text to analyse' tmode={tmode} showAlert={showAlert}/>
          </Route>
        </Switch>
      
        </div>
        </Router>

        
        
    </>
  
   
  );
}

export default App;
