export function PhotoViewer(props: { src: string | undefined; }) 
{    
    return (                
        <div className="mainImage">   
            <img src= {props.src}/>             
            <p>Image url: {props.src}</p>
        </div>
    );
}
