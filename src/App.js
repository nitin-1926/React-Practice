import React from 'react';
import './App.css';

let z=122
let p="AAA"
let placeholder="Hello Type here"
let fgt = "CLICK ME DUDE"
class App extends React.Component{
a=0;
  state={
    val:"",
    todo:[]
  }
  addList=(e)=>{
    const {val,todo} = this.state;
    todo.push(val);
    console.log(todo);
    this.setState({todo:todo});
  }
  handleInput=(e)=>{
    const value = e.target.value;
    this.setState({val:value});
  }
  render(){
    const {val:a} = this.state;
    return (
      <div className={p}>
        <div id={z}><button>{fgt}</button><input placeholder={placeholder}></input></div>
        <div>
          <input value = {a} onChange = {this.handleInput} />
          <button onClick = {this.addList}>ADD</button>
        </div>
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
