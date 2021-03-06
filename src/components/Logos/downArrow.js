import React from 'react';

export default ({children, top, className, onClick}) => {
    return (
        <span
        className={className ? className : 'down-arrow'}
        onClick={onClick}
        >
            {top && !className && children}
            <svg viewBox="0 0 490.656 490.656">
                <g>
                    <path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0
                        c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667
                        C491.696,131.368,491.696,124.627,487.536,120.445z"/>
                </g>
            </svg>
            {!top && !className && children}
        </span>
    )
}