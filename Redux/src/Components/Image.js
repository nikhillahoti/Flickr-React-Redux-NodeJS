import React from 'react';
import './Image.css';

const Image = (props) => {
    let elem = props.elem;
    let title = elem["title"];
    if(title != null) {
        if(title.length > 15){
            title = title.substring(0,14) + "...";
        }
    }
    else {
        title = "";
    }
    return (
        <div className="card">
            <img src={elem["media"]["m"]} alt="Smiley face" className="imageElem">
            </img>
            <div className="container">
                <h4><b>{title}</b></h4>
            </div> 
        </div>
    );
}

export default Image;