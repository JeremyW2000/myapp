import React from 'react'

const product = (props) => {
    if (props.prod == null) {
        return (<h1>Please enter an existing email account</h1>)
    } else {
        return (
            <>
                <h2>this is a product</h2>
                <div>{props.prod["ownerEmail"]}</div>
            </>
        )
    }
  
}

export default product