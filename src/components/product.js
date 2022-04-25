import React from 'react'

const product = (props) => {
    if (props.prod == null) {
        return
    } else {
        return (
            <div className="flex justify-center p-5 w-96 bg-slate-50 rounded-lg shadow-lg">
                <div> 
                    <h2 className="">ID: {props.prod["id"]}</h2>
                    <h2 className="">Color: {props.prod["color"]}</h2>
                    <button onClick={() => props.delete(props.prod["id"])}>Delete</button>
                </div>
            </div>
        )
    }
}

export default product