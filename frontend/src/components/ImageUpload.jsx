import React, { useCallback, useEffect, useState } from 'react'
import '../styles/ImageUpload.css'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'

const ImageUpload = ({onClose, show}) => {
  const [showText, setShowText] = useState(true)
  const [uploadText, setUploadText] = useState("upload your clothing")

  

  const [selectedImages, setSelectedImages] = useState([])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setImage(
  //       acceptedFiles.map((upFile) => Object.assign(upFile, {
  //         preview: URL.createObjectURL(upFile)
  //       }))
  //     )
  //   }
  // })
  const [link, setLink] = useState('');
  
  const onDrop = useCallback(acceptedFiles => {
    setSelectedImages(acceptedFiles.map(file => 
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  useEffect(() => {
    if(selectedImages.length > 0) {
      setUploadText("re-upload your clothing")
    }
  }, [selectedImages.length])
  if(!show) {
    return null;
  }

  

  
  

  // //firestore upload
  // const uploadPost = async() => {
  //   console.log(selectedImages)
  //   const docRef = await addDoc(collection(db, "posts"), {
  //     timestamp: serverTimestamp()
  //   })
  //   await Promise.all(
  //       const imageRef = ref(storage, `posts/${docRef.id}/${image.path}`);
  //       uploadBytes(imageRef, image, "data_url").then(async() => {
  //         const downloadURL = await getDownloadURL(imageRef);
  //         await updateDoc(doc(db, "posts", docRef.id),{
  //           images:arrayUnion(downloadURL)
  //         })
  //       })
  //   )

  // }


  return (
    <>
      <div className="image-container">
          {selectedImages.length > 0 &&
           (
            <div key={selectedImages[0].preview} className="image-content">
              <img className = "uploaded-image" src={selectedImages[0].preview}alt="preview"/>
              <Link className="upload-btn" to='/result' state={selectedImages[0].preview}>upload</Link>
            </div>
            
          )}
          {/* {image.map((upFile) => {
            console.log(image)
            return (
              <div key={upFile.preview} className="image-content">
                <img className = "uploaded-image" src={upFile.preview}alt="preview"/>
                <Link className="upload-btn" to='/result' state={upFile.preview}>upload</Link>
              </div>
              
            )
          })} */}
        </div>
      <div className="upload-container">
        <div className='top-text'>
          <h3>{uploadText}</h3>
          <button className="close-button" onClick={onClose}>x</button>
        </div>
        
        <div {...getRootProps()} className={showText ? "drag-area": "drag-area-done"}>
            <div {...getInputProps()} />
            {
                isDragActive ? <p>drop image here</p> : <p>drag & drop or <b>click</b> to browse</p>
            }

          

          {/* <span className="header">Drag & Drop</span>
          <span className="header">or <button className="button">browse</button></span>
          <span className="support">Supports: JPEG, JPG, PNG</span> */}
        </div>
        
        <form>
          <input onChange={(e)=>setLink(e.target.value)} className="text-input" type="text" name="link" placeholder='enter link to clothing item'/>
          <Link className="upload-btn" to='/result' state={link}>upload</Link>
        </form>
      </div>
      
    </>
  )
}

export default ImageUpload