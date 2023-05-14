import React from 'react'
import "../styles/Home.css"
import ImageUpload from '../components/ImageUpload'
import logo from "../images/susFashionLogo.png"
import { useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
function Home() {
  
  
  const [showUploadBtn, setShowUploadBtn] = useState(true);
  const [imageUploadButton, setImageUploadbutton] = useState(false);
  return (
    <div className='home'>
      <img className='logo' src={logo} alt ="" />
      {
        showUploadBtn ? <button className = 'imageUpload' onClick={() => {
            setImageUploadbutton(true)
            setShowUploadBtn(!showUploadBtn);
        }}> upload image</button> :
        <div></div>
      }
      
      <ImageUpload onClose={() => {
        setImageUploadbutton(false)
        setShowUploadBtn(!showUploadBtn)
      }} show={imageUploadButton}/>

      


    </div>
  )
}

export default Home