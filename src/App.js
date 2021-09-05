import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout( () => {
      setalert(null);
    }, 1500);
  }

  const modeToggle = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "Success");
      document.title= "Text utillz - Dark mode enabled";
      // setInterval(()=>{
      //   document.title = "Text utiilz is amazing";
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "Download Text utiilz now";
      // }, 1500)
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "Success");
      document.title= "Text utillz - Light mode enabled";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" aboutText= "About" toggle = {modeToggle} mode={mode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Write the text here" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
