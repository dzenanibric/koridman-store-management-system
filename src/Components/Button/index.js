import React from 'react';
import "./index.scss";

export default function Button(props) {
  return (
    <button className='component__button' style={{background: props.background, color: props.color, width: props.width, height: props.height}} onClick = {props.onClick} >{props.value}</button>
  )
}
