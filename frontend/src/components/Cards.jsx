import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import dress from '../images/Edgarfield.jpg';

function Cards({img}) {
  const [clothing, setClothing] = useState([])
  const manageUpload = () => {
    fetch("http://127.0.0.1:5000/", {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({"link": img.state})}).then((res) => 
        res.json()
        .then((data) => {
          setClothing(data)
          // console.log(data)
        }))

      
  }
  useEffect(() => {
    manageUpload()
    console.log(clothing)
  }, [])
  

  return (
    <div className='cards'>
        <div className="cards-container">
            <div className="large-card">
              <img className = "original-image" src={img.state} alt = 'original'></img>
            </div>
            <div className='small-card'>
              <h1>Here's what we found! Click on any of the items below to shop!</h1> 
                <ul className='small-cards'>
                  {clothing.length > 0 && 
                    // <li className="cards-item">
                    //   <CardItem src={clothing[0][0].img_src}
                    //   text={clothing[0][0].name}
                    //   alt={clothing[0][0].name}
                    //   price={clothing[0][0].price}
                    //   path={`/${clothing[0][0].link}`} />  
                    // </li>

                  clothing.map(data => {
                    return (<li className="cards-item">
                      <CardItem src={data.img_src}
                      text={data.name}
                      alt={data.name}
                      price={data.price}
                      path={data.link} />  
                    </li>)
                  })}


                  {/* <li className="cards-item">
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
                  </li> */}

                </ul>
                <h2>Please be patient, the query takes a bit of time...</h2>
            </div>
        </div>
    </div>
  )
}

export default Cards