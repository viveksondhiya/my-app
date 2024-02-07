
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';

function App() {
  return (
   <>
   <Navbar title="TextUtils " aboutText="About us"/>
   {/* <Navbar /> */}
   <div className="container my-3">
   <TextForm heading="Text area to analyze"/>
   <About/>
   </div>
   </>
  );
}

export default App;
