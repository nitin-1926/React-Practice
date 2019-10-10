import React from 'react';

export default function(props){
    return (
        <input placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onChange} />
    )
}

