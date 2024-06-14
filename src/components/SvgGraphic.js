import React from 'react';

const SvgGraphic = () => {
    return (
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          
            <rect x="150" y="300" width="300" height="50" fill="#FF5640" />
           
            <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="black"/>
            <text x="160" y="340" fill="black" font-family="Arial" font-size="14">
                Uifry Premium
            </text>
            <text x="160" y="355" fill="black" font-family="Arial" font-size="12">
                Free Trial
            </text>

           
            <rect x="100" y="200" width="400" height="100" fill="#FF5640" />
            <text x="250" y="250" fill="black" font-family="Arial" font-size="18">
                Make The Best Financial Decisions
            </text>

         
            <rect x="50" y="150" width="500" height="40" fill="black" />
            
            <text x="60" y="170" fill="white" font-family="Arial" font-size="12">
                Achievements
            </text>
            <text x="60" y="185" fill="white" font-family="Arial" font-size="10">
                Best Finance App On Playstore
            </text>
            <text x="480" y="170" fill="white" font-family="Arial" font-size="12">
                Finance
            </text>
            <text x="480" y="185" fill="white" font-family="Arial" font-size="10">
                Most Popular Accounting App
            </text>

           
            <text x="10" y="160" fill="white" font-family="Arial" font-size="18">
                A
            </text>
        </svg>
    );
};

export default SvgGraphic;
