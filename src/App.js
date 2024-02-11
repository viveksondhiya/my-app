
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{ useState } from 'react';

function App() {

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
   <>
   {/* <Navbar title="TextUtils " aboutText="About us"/> */}
   {/* <Navbar /> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <TextForm heading="Text area to analyze" mode={mode}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
