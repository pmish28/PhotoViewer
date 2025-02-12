import { MouseEventHandler } from "react";

export function ImageSelector(props: {
    onClick: MouseEventHandler; className: string; src: string; 
})
{
    return(
        <div className="thumbnail">
            <img onClick={props.onClick} className={props.className} src={props.src} />
        </div>
    );    
}