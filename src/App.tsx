// import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './ImageSelector/ImageSelector'
import './ImageSelector/ImageSelector.css'
import { useState } from 'react'
// import { imageGallery } from './API'

function App() {
  const [currentImage, setCurrentImage] = useState("");
  
  function handleClick(currentImage: string): void {
      console.log("I was clicked");
      setCurrentImage(currentImage);
  }
  return (
    <>
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src ={currentImage}/>
      </div>
      <div className="thumbnailContainer">
      
          {
            imageUrls.map((imageUrl) =>
                <ImageSelector click={handleClick} src={imageUrl} />
            )
          }
          
              
      </div>  
    </>
  )
}

export default App
