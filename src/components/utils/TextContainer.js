import React from 'react';

const TextContainer = ({ text, style, styleTwo }) => {
  return (
    <div className='text-cnt' style={styleTwo}>
      <p className='text-data' style={style}>
        {text}
      </p>
    </div>
  );
};

export default TextContainer;
