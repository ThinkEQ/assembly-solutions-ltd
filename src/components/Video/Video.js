import React, { useEffect, useRef } from 'react'

// Load components
import { Box, AspectRatio } from '@chakra-ui/react'

// Are we safari
const isSafari = () => {
      const ua = navigator.userAgent.toLowerCase()
      return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0
}

const Video =({ id, vidweb, vidmp, ratioConfig = {base: 9 / 16, lg: 4 / 3 }}) => {
    const videoRef = useRef()

    useEffect(() => {

        // We are safari + have a ref
        if (isSafari() && videoRef.current) {
            // ref video element
            const player = videoRef.current.children[0]

            if (player) {
                // Set the video elements programmatically
                player.controls = false
                player.playsinline = true
                player.muted = true
                player.setAttribute("muted", "")
                player.autoplay = true

                setTimeout(() => {
                    const promise = player.play()

                    // Check we have a promise
                    if (promise.then) {
                        promise
                        .then(() => {})
                        .catch(() => {
                            // promise rejected hide the video
                            videoRef.current.style.display = "none"
                        })
                    }
                }, 0)
            }
        }
    }, [])

  
   
    return (
        <Box position="relative" height="100%" width="100%" overflow="hidded">
            <AspectRatio ratio={ratioConfig} >
                <Box
                ref={videoRef}    
                dangerouslySetInnerHTML={{
                    __html: `
                    <video as="video" playsinline autoplay muted loop id="homevide-${id}" style="height: 100%; overflow: hidden; width: 100%; object-fit: cover;">
                        <source src="${vidweb}" type="video/webm"></source>
                        <source src="${vidmp}" type="video/mp4"></source>
                    </video>`
                }} />
            </AspectRatio>
        </Box>
    );
  };

  export default Video