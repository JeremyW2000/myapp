import React from 'react'

const product = (props) => {
    if (props.prod == null) {
        return
    } else {
        return (
            <div className="flex justify-center p-5 w-62 bg-slate-200 rounded-lg shadow-lg">
                <h2 className="flex justify-item">product ID: {props.prod["id"]}</h2>
                <h2 className="flex">product Color: {props.prod["color"]}</h2>
                <div>
                    
                </div>
            </div>
        )
    }
  
}

export default product