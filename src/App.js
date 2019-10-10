import React from 'react';
import logo from './logo.svg';
import './App.css';

let z=122
let a="AAA"
let placeholder="Hello Type here"
let fgt = "CLICK ME DUDE"
class App extends React.Component{
  handleInput=(e)=>{
    const value = e.target.value;
    z=value;
    this.setState({});
  }
  render(){
    return (
      <div className={a}>
        <div id={z}><button>{fgt}</button><input placeholder={placeholder}></input></div>
        <div><input value = {z} onChange = {this.handleInput} /></div>
          <div>NEW</div>
          <div>
            <ul>
            {aa()}
            </ul>
          </div>
      </div>
    );
  }
}
function aa(){
  var arr=[];
  for(var i =0; i<10  ;i++){
    arr.push(<li> {i} </li>)
  }
  return arr;
}

export default App;
