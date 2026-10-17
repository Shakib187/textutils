import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
// import About from './About';
//  import About from './About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); 
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1500);
};

  // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
           <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={Mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}

  
            {/* <About /> */}
      
      
    </>
  );
}

export default App;