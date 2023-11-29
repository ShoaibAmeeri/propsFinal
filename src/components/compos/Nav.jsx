import React from 'react'

export default function Nav(props) {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">
        Cart({props.counter} | Rs. {props.total}) </span>
        <button className="btn btn-primary px-4 me-5" onClick={props.onClick}>Reset</button>
    </div>
  </nav>
  )
}
