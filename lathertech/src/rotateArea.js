import React, { useEffect, useState } from 'react';

function Rotate() {
    const [image, setImage] = useState(1);
    const imageCount = 12; // The total number of rotating images

    useEffect(() => {
        const handleScroll = (e) => {
            setImage((prevImage) => {
                if (e.deltaY > 0) { // scrolling down
                    return ((prevImage) % imageCount) + 1;
                } else { // scrolling up
                    return ((prevImage - 2 + imageCount) % imageCount) + 1;
                }
            });
        };
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [imageCount]);

    return (
        <div className="">
            <img src={`${process.env.PUBLIC_URL}/rotateimages/photo_${image}.jpg`} alt="Scene" width="500" height="600"></img>
        </div>
    );
}

export default Rotate;