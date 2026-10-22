import React, {useState} from 'react'

// const [text, setText] = useState('Enter text here');
// console.log(useState ('Enter text here'));
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    // setText("You have clicked on handleUpClick");
     setText(newText);
    props.showAlert("Text has been converted to uppercase", "success");

  }
   const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    // setText("You have clicked on handleLoClick");
     setText(newText);
      props.showAlert("Text has been converted to lowercase", "success");
  }
  const handleClearClick = () => {
 let newText = '';
     setText(newText);
      props.showAlert("Text has been cleared", "success");
  }
     const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    props.showAlert("Text has been changed", "success");
  }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
// text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed", "success");
  }

  const [text, setText] = useState('');
  // setText('new text');     
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
    <h1 className= 'mb-4'> {props.heading}</h1>
     <div className="mb-3">
     {/* <label htmlfor="myBox" class="form-label">Example textarea</label> */}
     <textarea className="form-control"value={text} onChange={handleOnChange}
      style={{backgroundColor: props.mode === 'dark' ? '#2c4468' : 'white'
      ,color: props.mode === 'dark' ? 'white' : '#042743'
     
      }} id="myBox" rows="8"></textarea>
     </div>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 "
      onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" 
     onClick={handleLoClick}>Convert to Lowercase</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1"
      onClick={handleClearClick}>Clear Text</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1"
      onClick={handleCopy}>Copy Text</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" 
     onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
     <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element) => { return element.length !== 0; }).length}
         words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0; }).length} 
        Minutes read</p>
      <h3> Preview</h3>
      <p>{text.length>0 ? text : "Nothing to preview"}</p>
     </div>
    </>
  )
}
