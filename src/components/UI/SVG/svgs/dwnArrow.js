import React from 'react'

const SVG = ({
    style = {},
    fill = "none",
    textFill = "",
    stroke = "#00AB69",
    width = "55px",
    height = "55px",
    className = "",
    viewBox = "0 0 55 55"
}) => (
    <svg id="downArrow" width="55px" height="55px" viewBox="0 0 55 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>3BADD2B6-9ED7-4DC0-AB35-8AA65A064700</title>
    <defs>
   
        <linearGradient x1="40.6921309%" y1="6.15017361%" x2="60.4427926%" y2="100%" id="linearGradient">
            <stop stop-color="#00ABAC" offset="0%">
                <animate attributeName="stop-color" values="#00AB69;#00ABAC" dur="5s" repeatCount="indefinite"  />
            </stop>
            <stop stop-color="#00AB69" offset="50%">
                <animate attributeName="stop-color" values="#00AB69;#00ABAC" dur="5s" repeatCount="indefinite"  />
            </stop>
            <stop stop-color="#00AB69" offset="100%">
                <animate attributeName="stop-color" values="#00ABAC;#00AB69" dur="5s" repeatCount="indefinite"  />
            </stop>
        </linearGradient>
    </defs>
    <g id="Desktop" stroke="none" stroke-width="1" fill={fill} fill-rule="evenodd">
        <g id="Desktop-Homepage-UI" transform="translate(-1338.000000, -698.000000)">
            <g id="Group-18" transform="translate(1339.000000, 699.000000)">
                <circle id="Oval" stroke="#FFFFFF" cx="26.5" cy="26.5" r="26.5"></circle>
                <g id="down5" transform="translate(19.000000, 10.000000)" fill="url(#linearGradient)" fill-rule="nonzero">
                    <path d="M15.6198753,23.3329884 C15.1147783,22.8459887 14.2978101,22.8478637 13.7951001,23.3371759 L9.29032338,27.7222987 L9.29032338,1.24999938 C9.29032338,0.559624722 8.71264564,0 8,0 C7.28735451,0 6.70967677,0.559624722 6.70967677,1.24999938 L6.70967677,27.7223612 L2.20490004,23.3371134 C1.70219008,22.8478012 0.885221883,22.8459262 0.380124824,23.3329259 C-0.12503675,23.8199882 -0.126907719,24.6114253 0.375737725,25.1007375 L7.08541892,31.6322343 C7.08580601,31.6326718 7.08625763,31.6329843 7.08664472,31.6333593 C7.58935468,32.1214216 8.40896805,32.1229841 8.91335543,31.6334218 C8.91374252,31.6329843 8.91419414,31.6326718 8.91458123,31.6322968 L15.6242624,25.1008 C16.1268434,24.6115503 16.1251014,23.8200507 15.6198753,23.3329884 Z" id="Path"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
)

export default SVG;