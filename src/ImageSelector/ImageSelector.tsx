
export function ImageSelector(props: {
    click: void | undefined; src: string | undefined; 
})
{
    return(
        <div className="thumbnail" >
            <img onClick={props.click} src= {props.src}/>
        </div>
    );    
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];
function getImageUrls() {
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    return urls;
}
export const imageUrls = getImageUrls();

// export function handleClick(currentImage): void {
//     console.log("I was clicked");
//     setCurrentImage = currentImage;
// }