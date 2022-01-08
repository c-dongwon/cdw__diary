import React from 'react';

const GalleryItem = ({item,onView}) => {
    return (
        <li onClick={() => onView(item.id)}>
            {/* 클릭한 객체를 find함수로 컴포넌트를 찾고 출력 */}
            <img src={item.image} alt={item.title}/>
        </li>
    );
};

export default GalleryItem;