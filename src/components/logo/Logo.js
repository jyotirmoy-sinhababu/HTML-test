import './logo.css';

import Box from '../../images/imagetwo.png';

const Logo = () => {
  return (
    <div className='img-cnt'>
      <img className='img' src={Box} alt='logo' />
    </div>
  );
};

export default Logo;
