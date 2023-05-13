import React from 'react'

function ImageUpload() {
  return (
    <div className="upload-container">
      <h3>Upload your Image</h3>
      <div className="drag-area">
        <span className="header">Drag & Drop</span>
        <span className="header">or <span className="button">browse</span></span>
        <span className="support">Supports: JPEG, JPG, PNG</span>
      </div>
    </div>
  )
}

export default ImageUpload