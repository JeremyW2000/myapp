import React, { useState } from 'react'

export default function CreateProductForm(props) {
    const [price, setPrice] = useState(0);
    const [id, setID] = useState("");
    const [description, setDescription] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        let object = {
            "id" : id,
            "price" : price,
            "description" : description,

        }
        props.sendData(object)
    }
    const getID = (e) => {
        e.preventDefault();
    setID(e.target.value);
    }
    const getPrice = (e) => {
        e.preventDefault();
    setPrice(e.target.value);
    }
    const getDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }
  return (
    <div className='flex grid w-50'>
        <input className="shadow-lg border rounded-lg" placeholder="id" type="number" onChange={getID}></input>
        <div className="py-5">
            <input className="shadow-lg border rounded-lg" placeholder="price" type="number" onChange={getPrice}></input>
        </div>
        <input className="shadow-lg border rounded-lg" placeholder="description" type="text" onChange={getDescription}></input>
        <div className="py-5  justify-self-center">
        <button className="shadow-lg border rounded-lg bg-slate-50 w-32" onClick={sendData}>add product</button>
        </div>
    </div>
  )
}