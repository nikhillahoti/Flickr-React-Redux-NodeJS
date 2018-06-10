import React from 'react';
import './ImageList.css';
import Image from './Image';

const ImageList = (props) => {
    let imgList;

    if(props.imageList !== undefined){
        imgList = props.imageList.map(arr => {
            return <Image key={arr["media"]["m"]} elem={arr} />
        });
    }
    return (
        <div className="ImageHolder">
            {imgList}
        </div>
    );
}

export default ImageList;
