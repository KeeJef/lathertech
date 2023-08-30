import React, { useEffect, useState } from 'react';

function Rotate({folderName}) {
    const [image, setImage] = useState(1);
    const [hasScrolled, setHasScrolled] = useState(false);  // track if the user has ever scrolled
    const imageCount = 15;

    const isMobile = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    useEffect(() => {
        const preloadImages = () => {
            for (let i = 1; i <= imageCount; i++) {
                const img = new Image();
                img.src = `${process.env.PUBLIC_URL}/rotateimages/${folderName}/photo_${i}.webp`;
            }
        };
        preloadImages();

        let rotationTimer;
        let inactivityTimer = setTimeout(() => {
            if (!hasScrolled) {
                const rotationInterval = 330; // Same rotation rate as mobile
                rotationTimer = setInterval(() => {
                    setImage((prevImage) => ((prevImage) % imageCount) + 1);
                }, rotationInterval);
            }
        }, 3000);  // initiate after 5 seconds of inactivity

        const handleScroll = (e) => {
            setHasScrolled(true);  // user has scrolled
            clearTimeout(inactivityTimer); // clear inactivity timer
            if (rotationTimer) {
                clearInterval(rotationTimer); // stop auto rotation
                rotationTimer = null;
            }

            setImage((prevImage) => {
                if (e.deltaY > 0) {
                    return ((prevImage) % imageCount) + 1;
                } else {
                    return ((prevImage - 2 + imageCount) % imageCount) + 1;
                }
            });
        };

        window.addEventListener('wheel', handleScroll);

        if (isMobile()) {
            // Constant rotation rate for mobile screens
            const rotationInterval = 250; // Adjust to your desired rotation time (in ms)
            rotationTimer = setInterval(() => {
                setImage((prevImage) => ((prevImage) % imageCount) + 1);
            }, rotationInterval);
        }

        return () => {
            window.removeEventListener('wheel', handleScroll);
            clearTimeout(inactivityTimer);
            if (rotationTimer) {
                clearInterval(rotationTimer); // Clear the interval when the component is unmounted
            }
        };

    }, [imageCount, folderName]);

    return (
        <div className="">
            <img src={`${process.env.PUBLIC_URL}/rotateimages/${folderName}/photo_${image}.webp`} alt="Scene" width="350" height="350"></img>
        </div>
    );
}

export default Rotate;
