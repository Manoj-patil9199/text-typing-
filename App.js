import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFile from './document/MyFile';
import Textarea from './document/Textarea';
import AboutUs from './document/AboutUs';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==="light"){
 setMode('dark')
  document.body.style.backgroundColor='black'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
   
  }

  return (
   <>  
  <MyFile mode={mode} toggleMode={toggleMode}/>
  <div className="container">
   <Textarea heading="Enter Your Text Here"/>
   </div>
   <AboutUs/>
   </>
  );
}

export default App;
