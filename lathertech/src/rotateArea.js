import React, { useEffect, useState } from 'react';

function Rotate() {
    const [scrollY, setScrollY] = useState(0);
    const [image, setImage] = useState(process.env.PUBLIC_URL+ '/rotateimages/photo_1.jpg');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const imageNumber = Math.min(Math.floor(scrollY / window.innerHeight * 12) + 1, 12);
        setImage(process.env.PUBLIC_URL+ `/rotateimages/photo_${imageNumber}.jpg`);
    }, [scrollY]);

    return (
        <div className="">
            <img src={image} alt="Scene" width="500" height="600"></img>
        </div>
    );
}

export default Rotate;