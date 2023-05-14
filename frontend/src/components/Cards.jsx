import React from 'react'
import CardItem from './CardItem'
import dress from '../images/Edgarfield.jpg';

function Cards({img}) {
  console.log(img.state)
  return (
    <div className='cards'>
        <div className="cards-container">
            <div className="large-card">
              <li className="cards-item-large">
              <CardItem src={img.state}
                text='Your Item'
                path='/' />
              </li> 
            </div>
            <div className='small-card'>
              <h1>Here’s what we found! Click on any of the items below to shop!</h1> 
                <ul className='small-cards'>
                  <li className="cards-item">
                      <CardItem src={dress}
                      text='Item Name'
                      alt="option 1"
                      price='$20.00'
                      path='/' />  
                  </li>
                  <li className="cards-item">
                    <CardItem src={dress}
                      text='Long Item Name'
                      alt="option 2"
                      price='$20.00'
                      path='/' />  
                  </li>
                  <li className="cards-item">
                    <CardItem src={dress}
                    text='Longer Item Name'
                    alt="option 3"
                    price='$20.00'
                    path='/' />  
                  </li>
                  
                  <li className="cards-item">
                    <CardItem src={dress}
                    text='Item Name'
                    alt="option 4"
                    price='$20.00'
                    path='/' />  
                  </li>

                  <li className="cards-item">
                    <CardItem src={dress}
                    text='Item Name'
                    price='$20.00'
                    alt="option 5"
                    path='/' />  
                  </li>
                  
                  <li className="cards-item">
                    <CardItem src={dress}
                    text='The most longest Item Name hihihihihihihihi'
                    price='$20.00'
                    alt="option 6"
                    path='/' />  
                  </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards