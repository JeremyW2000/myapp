import React, { useState } from 'react'

export default function CreateProductForm(props) {
    const [price, setPrice] = useState(0);
    const [id, setID] = useState("");
    const [color, setColor] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        let object = {
            "id" : id,
            "price" : price,
            "colour" : color,
        }
        props.sendData(object)
    }
    const getID = (e) => {
    setID(e.target.value);
    }
    const getPrice = (e) => {
    setPrice(e.target.value);
    }
    const getColor = (e) => {
        setColor(e.target.value);
    }
  return (
    <div className='flex grid w-10'>
        <div>createProductForm</div>
        <input className="shadow-lg border" placeholder="id" type="number" onChange={getID}></input>
        <input className="shadow-lg border" placeholder="price" type="number" onChange={getPrice}></input>
        <input className="shadow-lg border" placeholder="color" type="text" onChange={getColor}></input>
        <button onClick={sendData}>add product</button>
    </div>
  )
}