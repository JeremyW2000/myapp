import React, { useState } from 'react'


const MyForm = (props) => {

  return (
    <>
    <form className="shadow-lg">
        <label>
            Email:
            <input placholder="email" type="text" onChange={e => props.setEmail(e.target.value)}></input>
        </label>
    </form>
    </>
  )
}

export default MyForm