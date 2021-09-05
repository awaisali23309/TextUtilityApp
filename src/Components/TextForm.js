import React, {useState} from 'react'
export default function TextForm(props) {
    const HandleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert(" Converted to Uppercase", "Success");
    }

    const HandleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Converted to Lowercase", "Success");
    }

    const HandleEmptyClick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert(" Text box is Empty Now", "Success");
    }

    const HandleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Your text is Copied", "Success");
    }
    
    const HandleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces are removed", "Success");
    }

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}} value= {text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpClick}  >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={HandleLowClick}  >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={HandleEmptyClick}  >Empty the textbox</button>
            <button className="btn btn-primary mx-1" onClick={HandleCopy}  >Copy text</button>
            <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}  >Erase extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Time to read</h2>
            <p>{0.008*text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter text in above box to preview it here"}</p>
        </div>
        </>
    )
}
