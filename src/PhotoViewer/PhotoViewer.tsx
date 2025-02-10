// import React from "react";  // import React (to provide access to TSX)
export function PhotoViewer(props: { src: string | undefined; }) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>   
            <img src= {props.src}/>             
        </div>
    );
}
