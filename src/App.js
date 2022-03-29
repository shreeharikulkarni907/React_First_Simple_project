
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
        <Navbar title="Textutisl" aboutText="About us"/>
        <div className="container my-3 ">
          <Textform heading='Enter the text to analyse'/>

        </div>
        
    </>
  
   
  );
}

export default App;
