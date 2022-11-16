import React from 'react';

const ImgCnt = ({ img, style }) => {
  return (
    <div className='img-cnt'>
      <img src={img} alt='' style={style} />
    </div>
  );
};

export default ImgCnt;
