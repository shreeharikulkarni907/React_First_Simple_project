import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        console.log('BUTTON WAS PRESSED');
       
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
        console.log('BUTTON WAS PRESSED');
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log('ON CHANGE');
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter the text here');
  return (
<div>
    <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
       </div>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to lowercase</button>
        
    </div>

    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words,{text.length}chaaracters</p>
        <p>{text.split(" ").length * 0.08} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.toLocaleLowerCase()}</p>

    </div>

    
</div>
  )
}
