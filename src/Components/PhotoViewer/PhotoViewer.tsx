export function PhotoViewer(props: { src: string | undefined; }) 
{    
    return (                
        <div>   
            <img src= {props.src}/>             
        </div>
    );
}
