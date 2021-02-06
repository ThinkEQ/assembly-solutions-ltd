import React from "react";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/index'

const memoizedCreateCacheWithContainer = weakMemoize(container => {
    // @ts-ignore
    let newCache = createCache({ container });
    return newCache;
});

const withEmotion =  Component => props => {
    const iframe = document.querySelector("#nc-root iframe");
    const iframeHeadElem = iframe && iframe.contentDocument.head;

    if (!iframeHeadElem) {
        return null;
    }

    const styles = document.querySelectorAll("html>head>style");
    let i;
    for (i = 0; i < styles.length; ++i) {
        const style = styles[i];
        iframeHeadElem.appendChild(style.cloneNode(true));
    }

    return (
         <ChakraProvider theme={theme}>
           <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
           
                <Component {...props} />
           
            </CacheProvider>
         </ChakraProvider>
      
    );
};

export default withEmotion;