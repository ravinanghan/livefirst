import "./App.css";
import Movie from './component/Movie'
import Header from "./component/Header";
import React,{useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Button  from '@mui/material/Button'
function App() {
  const [num, setNum] = useState(1);

  function inc(n){
    setNum(num+n);
  }
  function dec(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
         <button className="btn btn-danger" onClick={()=> inc(2)}>increment</button>
         <button className="btn btn-success" onClick={dec}>decrement</button>
        </div>
      </div>
      <Movie />
    </div> 
  );
}
export default App;
