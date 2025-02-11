export function PhotoViewer(props: { src: string | undefined; }) 
{    
    return (                
        <div className="mainImage">   
            <img src= {props.src}/>             
        </div>
    );
}
