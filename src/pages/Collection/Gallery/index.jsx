import React from 'react';
import "./style.css"

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-body">
                <iframe src="https://images.huangrx.cn" title="Page 1"  className="gallery-iframe" sandbox="allow-scripts allow-forms allow-same-origin"/>
            </div>
        </div>
    );
};

export default Gallery;