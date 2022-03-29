import React,{useState} from 'react'


export default function Textform(props) {

    let newtet='';

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

    const handleCpClick=()=>{
        var text=document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleEmClick=()=>{
        let arr=text.split(" ")
        arr.forEach((txt,index)=>{
            if(txt.indexOf('@')===-1)
            {
                
            }
            else
            {
                newtet=txt+'\n'+txt;
                setText(newtet);
            }


        });

    }
    const [text,setText]=useState('Enter the text here');
  return (
<div>
    <div className="container">
       <h1 className={`text-${props.tmode}`}>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" style={{

           backgroundColor: props.tmode==='dark'?'white':'grey'
       }}></textarea>
       </div>
       <div className="conatiner my-4">
                  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-4" onClick={handleEmClick}>Extract Email</button>
        <button className="btn btn-primary mx-4" onClick={handleCpClick}>Copy Text</button>



       </div>

        
    </div>

    <div className="container my-5">
        <h2 className={`text-${props.tmode}`}>Your Text Summary</h2>
        <p className={`text-${props.tmode}`}>{text.split(" ").length} words,{text.length}chaaracters</p>
        <p className={`text-${props.tmode}`}>{text.split(" ").length * 0.08} Minutes to read</p>
        <h2 className={`text-${props.tmode}`}>Preview</h2>
        <p className={`text-${props.tmode}`}>{(text.length>0)?text.toLocaleLowerCase():'Enter the text to preview it'}</p>

    </div>

    
</div>
  )
}
