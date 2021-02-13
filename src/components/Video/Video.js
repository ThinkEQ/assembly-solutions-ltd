import React, { useEffect, useState } from 'react'

// Load components
import { Box, Image, AspectRatio } from '@chakra-ui/react'

const Video =({ id, vidweb, vidmp, imgThumb, ratioConfig = {base: 9 / 16, lg: 4 / 3 }}) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    useEffect(() => {
        const element = document.getElementById(`homevid-${id}`)

        if (element) {
            element.addEventListener('loadeddata', onLoadedData)
        }

        return () => element.removeEventListener('loadeddata', onLoadedData)
    })

    return (
        <Box position="relative" height="100%" width="100%" overflow="hidded">
            <Image
            src={imgThumb}
            position="absolute"
            top="0"
            left="0"
            height="100%"
            width="100%"
            transition="opacity 400ms ease 0ms, visibility 0ms ease 400ms"
            filter="blur(20px)"
            transform="scale(1.1)"
            alt="thumb"
            pointerEvents="none"
            opacity={isVideoLoaded ? 0 : 1} />
        <AspectRatio ratio={ratioConfig} >
            <video as="video" playsInline autoPlay muted loop id={`homevid-${id}`} onLoadedData={onLoadedData} style={{opacity: isVideoLoaded ? 1 : 0, overflow: "hidden", maxHeight: "900px", objectFit: "cover"  }} >
                <source src={vidweb} type="video/webm"></source>
                <source src={vidmp} type="video/mp4"></source>
            </video>
        </AspectRatio>
    </Box>
    );
  };

  export default Video