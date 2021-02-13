import React from 'react'

// Load components
import { Box, AspectRatio } from '@chakra-ui/react'

const Video =({ id, vidweb, vidmp, ratioConfig = {base: 9 / 16, lg: 4 / 3 }}) => {
   
    return (
        <Box position="relative" height="100%" width="100%" overflow="hidded">
            <AspectRatio ratio={ratioConfig} >
                <video as="video" playsInline autoPlay muted loop id={`homevid-${id}`} style={{overflow: "hidden", maxHeight: "900px", objectFit: "cover"  }} >
                    <source src={vidweb} type="video/webm"></source>
                    <source src={vidmp} type="video/mp4"></source>
                </video>
            </AspectRatio>
        </Box>
    );
  };

  export default Video