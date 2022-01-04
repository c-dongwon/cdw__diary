import React from 'react';

const BusinessItem = ({item}) => {
    const {id,image,title,titleeng,des} = item
    return (
        <li>
            <a href="#">
                        <div><img src={image} alt=""/></div>
                        <h3>
                            {title}
                           <span> {titleeng}</span></h3>
                        <p>{des}</p>
                    </a>
        </li>
    );
};

export default BusinessItem;