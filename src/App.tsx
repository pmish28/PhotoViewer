// import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './ImageSelector/ImageSelector'
// import { imageGallery } from './API'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src ={"https://picsum.photos/seed/picsum/400/300"}/>
      </div>
      <div>
      
          {
            imageUrls.map((imageUrl) =>
              <div>
                <ImageSelector src={imageUrl} />
              </div>
            )
          }
          
              
      </div>
    </>
  )
}

export default App
