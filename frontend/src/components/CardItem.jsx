import React from 'react'
import { Link } from 'react-router-dom'


function CardItem(props) {
  return (
    <a key={props.path} href={props.path} className='cards-item-link' to={props.path}>
        <figure className="cards-item-pic-wrap" data-category={props.label}>
          <img src={props.src} alt="User" className="cards-item-img"/>
        </figure>
        <div className="cards-item-info">
            <h5 className='cards-item-text'>{props.text}</h5>
            <h6 className='cards-item-price'>{props.price}</h6>
        </div>
    </a>
  )
}

export default CardItem