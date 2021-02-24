import React from 'react'

const SVG = ({
    style = {},
    fill = "",
    stroke = "",
    width = "181px",
    height = "181px",
    className = "",
    viewBox = "0 0 181 181"
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
    <defs>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');
    </style>
    <linearGradient x1="12.7685237%" y1="6.15017361%" x2="91.7711704%" y2="100%" id="linearGradient-1">
        <stop stop-color="#00ABAC" offset="0%"></stop>
        <stop stop-color="#00AB7E" offset="68.4542762%"></stop>
        <stop stop-color="#00AB69" offset="100%"></stop>
    </linearGradient>
    <path d="M90.5,0 C140.48177,0 181,40.5182301 181,90.5 C181,140.48177 140.48177,181 90.5,181 C40.5182301,181 0,140.48177 0,90.5 C0,40.5182301 40.5182301,0 90.5,0 Z M91.1753731,18.0099502 C50.7672259,18.0099502 18.0099502,50.7672259 18.0099502,91.1753731 C18.0099502,131.58352 50.7672259,164.340796 91.1753731,164.340796 C131.58352,164.340796 164.340796,131.58352 164.340796,91.1753731 C164.340796,50.7672259 131.58352,18.0099502 91.1753731,18.0099502 Z" id="path-2"></path>
</defs>
    <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-Homepage-UI" transform="translate(-1144.000000, -1881.000000)">
            <g id="Group-14" transform="translate(-54.000000, 1723.000000)">
                <g id="Group-13" transform="translate(1198.000000, 158.000000)">
                    <g id="Oval-41-+-Oval-41-Copy-Mask">
                        <mask id="mask-3" fill="white">
                            <use xlinkHref="#path-2"></use>
                        </mask>
                        <use id="Mask" fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                        <circle id="Oval-41" fill="#383838" mask="url(#mask-3)" cx="90.5" cy="9.5" r="9.5"></circle>
                        <circle id="Oval-41-Copy" fill="#505050" mask="url(#mask-3)" cx="76.5" cy="14.5" r="25.5"></circle>
                    </g>
                    <text id="98%" font-family="Titillium Web" font-size="30" font-weight="normal" letter-spacing="-1.05882353" fill="#171717">
                        <tspan x="65" y="89">98%</tspan>
                    </text>
                    <text id="Customer-Retention" font-family="Titillium Web" font-size="14" font-weight="normal" letter-spacing="-0.494117647" fill="#171717">
                        <tspan x="62.2899472" y="109">Customer </tspan>
                        <tspan x="63.3333927" y="123">Retention</tspan>
                    </text>
                </g>
            </g>
        </g>
    </g>
    </svg>
)

export default SVG;