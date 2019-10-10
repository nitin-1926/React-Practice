import React from 'react';
import logo from './logo.svg';
import './App.css';

let z=122
let a="AAA"
let placeholder="Hello Type here"
let fgt = "CLICK ME DUDE"
function App() {
  return (
    <div className={a}>
      <div id={z}><button>{fgt}</button><input placeholder={placeholder}></input></div>
      <div><input value = "123" /></div>
        <div>NEW</div>
        <div>
          <ul>
          {aa()}
          </ul>
        </div>
    </div>
  );
}
function aa(){
  var arr=[];
  for(var i =0; i<10  ;i++){
    arr.push(<li> {i} </li>)
  }
  return arr;
}

export default App;
