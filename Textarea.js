import React, {useState} from 'react'

export default function Textarea(props) {
  const handleUPClick=()=>{
        console.log(text);
    let newText = text.toUpperCase();
        setText(newText)
    }
  const handleLcClick=()=>{
      console.log(text);
    let newText = text.toLowerCase();
      setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
     msg.text = text;
     window.speechSynthesis.speak(msg);
  }
  const handleOnClick= (event)=>{
        setText(event.target.value)
    }
  const [text, setText]= useState('Enter Text Here')
  return (
    <>
    
    <div className='container'>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text}  onChange={handleOnClick} id="myText" rows="5"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick ={handleUPClick}> Upper Case</button>
<button className='btn btn-primary mx-2' onClick ={handleLcClick}> Lower Case</button>
<button type="submit" className="btn btn-warning mx-2 my-2" onClick={speak} >Speak</button>
    </div>
    <div className='container'>
  <h2>Your Text Sumarry</h2>
<p>{text.split(" ").length} Word And {text.length} Its a Character </p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
