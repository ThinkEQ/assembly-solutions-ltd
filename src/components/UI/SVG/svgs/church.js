import React from 'react'

const SVG = ({
    style = {},
    fill = "",
    stroke = "",
    width = "50px",
    height = "50px",
    className = "",
    viewBox = "0 0 93 103"
}) => (
    <svg
    width={width}
    height={height}
    viewBox={viewBox}
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    >
	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
	<g id="Artboard" transform="translate(-1527.000000, -57.000000)" fill={fill} fillRule="nonzero">
		<g id="wedding" transform="translate(1527.000000, 57.000000)">
			<path d="M82.186,49.818 C83.19,48.5 82.936,46.618 81.618,45.614 L49.2,20.914 L49.2,12.6 L57.4,12.6 C59.056,12.6 60.4,11.256 60.4,9.6 C60.4,7.944 59.056,6.6 57.4,6.6 L49.2,6.6 L49.2,3 C49.2,1.344 47.856,0 46.2,0 C44.544,0 43.2,1.344 43.2,3 L43.2,6.6 L35,6.6 C33.344,6.6 32,7.944 32,9.6 C32,11.256 33.344,12.6 35,12.6 L43.2,12.6 L43.2,20.914 L10.782,45.614 C9.464,46.618 9.21,48.5 10.214,49.818 C11.2152,51.1314 13.0858,51.3868 14.4,50.4 C14.406,50.396 14.412,50.39 14.418,50.386 L20.4,45.8286 L20.4,102.4 L30.4,102.4 L30.4,81.6 C30.4,72.8716 37.5084,65.8 46.2,65.8 C54.8936,65.8 62,72.8736 62,81.6 L62,102.4 L72,102.4 L72,45.8286 C79.4276,51.4874 77.7498,50.2374 78,50.4 C79.3154,51.3876 81.1858,51.1302 82.186,49.818 Z M46.2,56 C41.016,56 36.8,51.784 36.8,46.6 C36.8,41.416 41.016,37.2 46.2,37.2 C51.384,37.2 55.6,41.416 55.6,46.6 C55.6,51.784 51.384,56 46.2,56 Z" id="Shape"></path>
			<circle id="Oval" cx="46.2" cy="46.6" r="3.4"></circle>
			<path d="M36.4,81.6 L36.4,102.4 L43.2,102.4 L43.2,72.27 C39.26,73.54 36.4,77.242 36.4,81.6 Z" id="Path"></path>
			<path d="M49.2,72.27 L49.2,102.4 L56,102.4 L56,81.6 C56,77.242 53.14,73.54 49.2,72.27 Z" id="Path"></path>
			<path d="M0,99.4 C0,101.056 1.344,102.4 3,102.4 L14.4,102.4 L14.4,60.9 L0,71.7 L0,99.4 Z" id="Path"></path>
			<path d="M78,60.9 L78,102.4 L89.4,102.4 C91.056,102.4 92.4,101.056 92.4,99.4 L92.4,71.7 L78,60.9 Z" id="Path"></path>
		</g>
	</g>
	</g>
    </svg>
)

export default SVG;