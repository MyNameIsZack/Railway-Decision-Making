import React, { useState } from 'react';

export default function DisLike({stroke, style, isDisLike, onClick }) {
    const [isDisLiked, setIsDisLiked] = useState(isDisLike || false);

    const handleDislikeClick = () => {
      setIsDisLiked(!isDisLiked);
      if (onClick && typeof onClick === 'function') {
        onClick();
      }
    };

    return (
        <div style={{...style}} onClick={handleDislikeClick}>
            <svg
                stroke={stroke}
                fill={isDisLiked ? stroke : "transparent"}
                width = "100%"
                height= "100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.48 18.3c-.8.83-2.09.38-2.43-.6-.28-.8-.64-1.77-1-2.48C8 13.1 7.38 11.9 5.67 10.37c-.23-.2-.52-.36-.84-.49-1.13-.44-2.2-1.61-1.91-3l.35-1.77a2.5 2.5 0 011.8-1.92l5.6-1.53a4.5 4.5 0 015.6 3.54l.69 3.76A3 3 0 0114 12.5h-.89l.01.05c.08.41.18.97.24 1.58.07.62.1 1.29.05 1.92a3.68 3.68 0 01-.5 1.73c-.11.16-.27.35-.44.52z"></path>
            </svg>
        </div>
    );
}
