import React from 'react';

const GalleryBig = ({cat}) => {

    const {title,image} = cat 
    // 비구조화할당 cat 값 추출
    return (
        <div className='bigimg'>

            <img src={image} alt=''/>
            {/* imgList 배열에 image값 출력 */}

            <h2>{title}</h2>
            {/* imgList 배열에 title 출력 */}

        </div>
    );
};

export default GalleryBig;
