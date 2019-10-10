import React from 'react';

export default function(props){
    return (
        <button value={props.value} id={props.id} onClick={props.onClick}>{props.value}</button>
    )
}

