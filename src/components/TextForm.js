import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClClick = () => {

    setText(" ")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
   navigator.clipboard.writeText(text)
  }

  const [text, setText] = useState('enter the here');
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor:props.mode === 'dark'?'#6b5a5a':'white',color:props.mode==='dark'?'white':'black' }}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >convert to upperCase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >convert to lowerCase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick} >clear Text</button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >copy Text</button>
      </div>
      <div style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((element=>{return element.length!==0})).length} Words And {text.length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element=>{return element.length!==0})).length} Minutes required to read the text.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  )
}
