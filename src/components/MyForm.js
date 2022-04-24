import React, { useState } from 'react'


const MyForm = (props) => {
  

  return (
    <>
    <form className="shadow-lg" onSubmit={e => props.setEmail.setCookieFunction(e.target.value)}>
        <label>
            Email:
            <input placholder="email" type="text" ></input>
        </label>
    </form >
    </>
  )
}

export default MyForm