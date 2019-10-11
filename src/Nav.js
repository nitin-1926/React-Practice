import React from 'react';
import './App.css';
//import Input from "./components/input";
//import BUTTON from "./components/button";
import {Link} from 'react-router-dom';

export default function(){
    return(
        <div>
            <Link to = "/"> <button> HOME </button> </Link>
            <Link to = "/about"> <button> About </button> </Link>
            <Link to = "/todo"> <button> To-do </button> </Link>
        </div>
    )
}