import React,{useState} from 'react'

export default function Textarea () {
  const [text,setText]=useState('');

  const handleUpClicked =()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleDoClicked =()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }


  return (
  <>
    <div className='container'>
        <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"><h1> Analayz Textarea</h1></label>
    <textarea class="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea> 
  </div>
  
   <button className='btn btn-primary mx-2' onClick={handleUpClicked}>Convert to UpperCase</button>
   <button className='btn btn-primary ' onClick={handleDoClicked}>Convert to LowerCase</button>
   <div className="container">
    <h2>Text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </div>
   </>
  )
}
