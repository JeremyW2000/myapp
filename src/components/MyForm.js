import React, { useState } from 'react'

export default function MyForm(props){

  const [emailField, setEmailField] = useState("");

  const handleSubmit  = (e) => {
    e.preventDefault();
    props.setEmail(emailField);
  }
  
  const getInputValue = (event)=>{
    // event.preventDefault();
    const val = event.target.value;
    setEmailField(val);
  };
  
  return (
    <>
    <form className="shadow-lg" >
        <label>
            Email:
            <input placholder="email" type="text" onChange={getInputValue}></input>
        </label>
        <button onClick={handleSubmit}>click me</button>
    </form >
    </>
  )
}