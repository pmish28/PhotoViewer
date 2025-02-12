export function PhotoViewer(props: { src: string | undefined; }) 
{    
    return (                
        <div>   
            <img src= {props.src}/>             
            <p>Image url: {props.src}</p>
        </div>
    );
}
