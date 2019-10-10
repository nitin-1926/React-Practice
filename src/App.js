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
    this.setState({todo:todo,val:" "});
  }
  handleInput=(e)=>{
    const value = e.target.value;
    this.setState({val:value});
  }
  render(){
    const {val:a,todo} = this.state;
    return (
      <div className={p}>
        <div id={z}><button>{fgt}</button><input placeholder={placeholder}></input></div>
        <div>
          <input value = {a} onChange = {this.handleInput} />
          <button onClick = {this.addList}>ADD</button>
        </div>
          <div>
            <ul>
            {
              todo.map((item,i)=>
              {
                return(
                  <li key={i}>{item}</li>
                )
              })
            }
            </ul>
          </div>
          </div>
    );
  }
}

export default App;
