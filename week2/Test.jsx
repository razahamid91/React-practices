import React from "react";
import PropTypes  from "prop-types";


export default function Test( {name="" , setName } ) {
    Teat.PropTypes = {
        name : PropTypes.string,
        setName : PropTypes.func,
    }
  return (
    <>
        <h1>The name is : {name}</h1>
        <input 
            type="text" 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
        /> 
    </>
  )
}
