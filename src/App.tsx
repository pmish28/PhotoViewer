import './App.css';
import { PhotoViewer } from './Components/PhotoViewer/PhotoViewer';
import { ImageSelector } from './Components/ImageSelector/ImageSelector';
import { imageUrls } from './Utils/imageUrls';
import './Components/ImageSelector/ImageSelector.css';
import { useState } from 'react';

function App() {
  const [currentImage, setCurrentImage] = useState({
    src: imageUrls[1],
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
          {imageUrls.map((src: string, index: number) =>
            <ImageSelector  
              key={index}
              className={currentImage.index === index? 'activeThumbnail': ''}
              src={src}
              onClick={() => setCurrentImage({src, index})} 
            />
          )}
      </div>  
    </>
  )
}

export default App
