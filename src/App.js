import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './home.js';
import About from './about.js';
import Todo from './todo.js';
import {Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <Nav />
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/todo" component={Todo} />
      </div>
    )
  }
}
export default App;
// import React from 'react';
// import './App.css';
// import Input from "./components/input";
// import BUTTON from "./components/button";

// let z=122
// let p="AAA"
// let fgt = "CLICK ME DUDE"
// class App extends React.Component{
// a=0;
//   state={
//     val:"",
//     todo:[]
//   }
//   addList=(e)=>{
//     const {val,todo} = this.state;
//     todo.push(val);
//     console.log(todo);
//     this.setState({todo:todo,val:" "});
//   }
//   handleInput=(e)=>{
//     const value = e.target.value;
//     this.setState({val:value});
//   }
//   deleteTask=(e)=>{
//     const {todo} = this.state;
//     const index = e.target.id;
//     todo.splice(index,1);
//     this.setState({todo:todo});
//   }
//   render(){
//     const {val:a,todo} = this.state;
//     return (
//       <div className={p}>
//         <div id={z}><button>{fgt}</button>
//         <Input placeholder="Write anything you want" /></div>
//         <div>
//           <Input value = {a} onChange = {this.handleInput} />
//           <BUTTON onClick = {this.addList} value = "ADD" />
//         </div>
//           <div>
//             <ul>
//             {
//               todo.map((item,i)=>
//               {
//                 return(
//                   <div key={i}>
//                     <li>{item}</li>
//                     <BUTTON id = {i} onClick = {this.deleteTask} value="Delete(X)" />
//                   </div>
//                 )
//               })
//             }
//             </ul>
//           </div>
//         </div>
//     );
//   }
// }

// export default App;
