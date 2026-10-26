import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
//  import About from './About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

//   // Whether dark mode is enabled or not
// const removeBodyClasses = () => {
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-primary');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-warning');
// };

// const toggleMode =(cls) => {
//   removeBodyClasses();
//   // console.log(cls);
//   document.body.classList.add('bg-'+cls)
  
  
    // document.body.classList.remove('bg-dark');
    // document.body.classList.remove('bg-warning');
    const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
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
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading=" Try Textutils - Word Counter, Character Counter,
            Remove extra spaces"mode={Mode}/>
          </Route>
        </Switch>
      </div>
      </Router>

  
            {/* <About /> */}
      
      
    </>
  );
}

export default App;