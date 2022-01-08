import React from 'react';
import GalleryBig from './GalleryBig';
import GalleyList from './GalleyList';

const GalleryView = ({cat,data,onView}) => {
    return (
        <div className='bigview'>
            <GalleryBig cat={cat}/>
            {/* data -> imgList 첫번째 요소 출력 */}
            <GalleyList data={data} onView={onView}/>
            {/* data -> imgList 리스트 출력 */}
        </div>
    );
};

export default GalleryView;