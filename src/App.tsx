import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './ImageSelector/ImageSelector'
import './ImageSelector/ImageSelector.css'
import { useState } from 'react'
// import { imageGallery } from './API'

function App() {
  const [currentImage, setCurrentImage] = useState({
    src: '',
    index: 0,
  });
  
  return (
    <>
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src ={currentImage.src}/>
      </div>
      <div className="thumbnailContainer">
      
          {
            imageUrls.map((src: string, index: number) =>
                <ImageSelector onClick={() => setCurrentImage({src, index})} src={src} 
                className={
                   currentImage.index === index? 'activeThumbnail': ''
                }/>
            )
          }
              
      </div>  
    </>
  )
}

export default App
