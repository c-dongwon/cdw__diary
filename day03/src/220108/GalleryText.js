import React from 'react';

const GalleryText = ({cat}) => {
    const {title,desc} = cat
    //비구조화할당 
    return (
        <div className='text'>
            <strong>{title}</strong>
            <p>
                {desc}
            </p>
        </div>
    );
};

export default GalleryText;