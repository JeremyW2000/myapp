import React from 'react'

const product = (props) => {
  return (
      <>

    <h2>this is a product</h2>
    <div>{props.prod["ownerEmail"]}</div>
    </>
  )
}

export default product