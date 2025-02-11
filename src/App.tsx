import './App.css'
import { PhotoViewer } from './Components/PhotoViewer/PhotoViewer'
import './Components/PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './Components/ImageSelector/ImageSelector'
import './Components/ImageSelector/ImageSelector.css'
import { useState } from 'react'

function App() {
  const [currentImage, setCurrentImage] = useState({
    src: imageUrls[0],
    index: 0,
  });
  
  return (
    <>
      <div>
          <h1>React PhotoViewer</h1>
          <PhotoViewer src ={currentImage.src}/>
        <p>Click on an image below to display it in a large size.</p>
      </div>
      <div className="thumbnailContainer">
          {
            imageUrls.map((src: string, index: number) =>
                <ImageSelector onClick={() => setCurrentImage({src, index})} src={src} 
                  className={
                    currentImage.index === index? 'activeThumbnail': ''
                  }
                />
            )
          }
      </div>  
    </>
  )
}

export default App
