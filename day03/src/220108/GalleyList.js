import React from 'react';
import GalleryItem from './GalleryItem';

const GalleyList = ({data,onView}) => {
    return (
        <ul>
           {
               data.map(item  => <GalleryItem key={item.id} item={item} onView={onView}/>)
            //    반복되는 컴포넌트li 렌더링을위해 map사용 item.id를 키값으로 설정
           } 
        </ul>
    );
};

export default GalleyList;