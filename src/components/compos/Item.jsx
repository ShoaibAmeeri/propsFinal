import React from 'react'

export default function Item(props) {
    
  return (
    <>
   
   

      <div className="card bg-secondary" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">{props.desc}</p>
          <h5>Rs. {props.price}</h5>
          <button className="btn btn-primary" /*style={{fontWeight:"400" ,fontSize:"15px" , margin:"0 auto"}}*/ onClick={props.onClick}>Add to Cart</button>
        </div>
      </div>
     
   
    </>
  )
}
