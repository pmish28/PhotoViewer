import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ImageSelector, imageUrls } from './Components/ImageSelector/ImageSelector';
import userEvent from '@testing-library/user-event';

// const images = ["https://picsum.photos/id/16/2500/1667.jpg", "https://picsum.photos/id/20/3670/2462.jpg","https://picsum.photos/id/10/2500/1667.jpg"]
  
// test('ImageSelector renders activeThumbnail css class ', () => {
//   const user = userEvent.setup()
//   const component =  render(<ImageSelector src ={images[0]}/>);
//   await user.click(screen.getByRole('img', {name: /click me!/i}))
//   const textElement = getByText(/Hello world/i);
//   expect(textElement);
// });

test('src contains correct value', () => {
  render(<ImageSelector onClick={undefined} src={imageUrls[0]} className=''/>)
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.src).toContain("https://picsum.photos/id/600/1600/900.jpg");
  expect(testImage.src).not.toContain("https://picsum.photos/id/601/1600/900.jpg");

})