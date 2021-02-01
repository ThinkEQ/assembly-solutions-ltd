import React, { useEffect } from 'react'

// Load components
import { Box } from '@chakra-ui/react'

const Map = () => {
    
    useEffect(() => {

        function loadMap() {
            //Create the script tag, set the appropriate attributes
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCIpXBPXRDzh0tB15upZAw_uzW0bZZPvAg&callback=initMap';
            script.defer = true;
            script.id = 'gmap'
        
            script.async = true;
            
            window.initMap = function() {
            var location = {lat: 53.57022853262313, lng: -2.427929508994092}
            var map = new window.google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 16
            }); 
            
            var marker = new window.google.maps.Marker({
                position: location,
                map: map,
                size: '100x100',
                draggable: false,
                animation: window.google.maps.Animation.DROP,
                title: 'Assembly Solutions',
                label: 'ASL'
                
            })
    
            marker.setMap(map)
            }

             // Append the 'script' element to 'head'
            document.head.appendChild(script);
        }

        // We have not downloaded the script yet
        if (!document.getElementById('gmap')) {
        
            return loadMap()
        }
        
        // We have loaded the script so call global map function
        if (document.getElementById('gmap')) {
        
            return window.initMap()
        }
  }, [])
    
    return (
        <Box width={{base: "100%", lg: "500px"}} height={{base: "300px", lg: "80%"}} id="map"/>
    )
}

export default Map