import React from 'react';
import logo from './logo.svg';
import './App.css';

var z=122
var a="AAA"
var placeholder="Hello Type here"
var fgt = "CLICK ME DUDE"
function App() {
  return (
    <div>
    <div id={z} className={a}><button>{fgt}</button><input placeholder={placeholder}></input></div>
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
