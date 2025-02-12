import { render, screen } from '@testing-library/react';
import App from './App';
import { ImageSelector } from './Components/ImageSelector/ImageSelector';
import { imageUrls } from './Utils/imageUrls'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// const images = ["https://picsum.photos/id/16/2500/1667.jpg", "https://picsum.photos/id/20/3670/2462.jpg","https://picsum.photos/id/10/2500/1667.jpg"]
  
test('Displayed image url to match url of clicked thumbnail', async () => {
  const user = userEvent.setup();
  render(<App />);
  const textElement = screen.getByRole('paragraph');
  expect(textElement).toHaveTextContent('Image url: https://picsum.photos/id/600/1600/900.jpg');
  const images = screen.getAllByRole('img');
  await user.click(images[3]);
  const clickedTextElement = screen.getByRole('paragraph');
  // expect(clickedTextElement).getAttribute('src').toBe('Image url: https://picsum.photos/id/603/1600/900.jpg')
  expect(clickedTextElement).toHaveTextContent('Image url: https://picsum.photos/id/603/1600/900.jpg')
});

test('src contains correct value', () => {
  render(<ImageSelector onClick={jest.fn()} key={0} src={imageUrls[0]} className=''/>)
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.src).toContain("https://picsum.photos/id/600/1600/900.jpg");
  expect(testImage.src).not.toContain("https://picsum.photos/id/601/1600/900.jpg");
})

test.only('No broken images in ImageUrls list', () => {
  const brokenImages = [1, 24, 32, 36, 44, 47];
  const brokenImageUrls = [] as string[];
  brokenImages.forEach((number) => {
    const imageNumberString = number.toString().padStart(2, '0');
    brokenImageUrls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`);
  })
  render(<App />)
  const images = screen.getAllByRole('img');
  images.forEach((image) => {
    const imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    expect(brokenImageUrls).not.toContain(imageSrc);
  })
  });


// describe('ImageSelector', () => {
//   it('displays the images provided', () => {
//     render(<ImageSelector selectedImagUrl="" onClickImage={jest.fn()} imagUrls ={[image1.jpg, images2.jpy]});
//     const images = screen.getAllByRole('img');
//   });

//   it('calls onclick function', async => () {
//     const mockClick = jest.fn();
//     render<ImageSelector />
//     await userEvent.click(screen.getAllByRole)
//     expect
//   });
// });