import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/


function App() {

  const [Mode, setMode] = useState('light')

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

return(
    <>
    {/*<Router>*/}
         <Navbar title="TEXTUTILS"  mode={Mode} togglemode={toggleMode}/>
         <div className="container my-3">
          {/*<Switch>
         <Route path="/about">
            <About />
          </Route>
<Route path="/">*/}
         <TextForm heading ="Enter The Text To Analyze" mode={Mode}/>
          {/*</Route>*/}
          </div>
        {/*</Switch>*/}
        
        {/*</Router>*/}
         </>
);
}
export default App;
  