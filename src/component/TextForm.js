import React, { useState } from 'react' 

 
export default function TextForm(props) {

  const handleUpClick = ()=>{ 
    let newText=text.toUpperCase(); 
    setText(newText);
  }

  const handleLoClick = ()=>{ 
    let newText=text.toLowerCase(); 
    setText(newText);
  }

  const handleClearClick = ()=>{ 
    let newText=""; 
    setText(newText);
  }

  const handleReverseClick=()=>{
    let newText=" ";
    for(let i=text.length-1 ;i>=0; i--){
        newText+=text[i];
    }
    setText(newText);
  }

  const handleReverseWordClick=()=>{
    let words = text.split(' ');
    let reversedWords = words.reverse();
    let newText = reversedWords.join(' ');
    setText(newText);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange= (event)=>{
    setText(event.target.value)
  }

  const[text,setText]=useState('Enter Text Here');

  return(
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3"> 
       <textarea className="form-control" value={text} onChange={handleOnChange} id='myBox' rows="8"> 
        </textarea>
    </div>

    <button  className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase </button>
    <button  className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Lowercase </button>
    <button  className="btn btn-secondary mx-3" onClick={handleReverseClick}>Revers the Paragraph </button>
    <button  className="btn btn-warning mx-3" onClick={handleReverseWordClick}>Revers para by words </button>
    <button  className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text </button>
    <button  className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text </button>




    </div>
    <div className='container my-3'>
      <h2>Your Text Summery</h2>
      <p>your word length is {text.split(" ").length} and your numbers of characters is {text.length}</p> 
      <p>{0.008 * text.split(" ").length} Minutes to read </p>   
      <h1>Preview</h1>
      <p>{text}</p>
    </div>    
    </>
  );
}