import './logo.css';

import Box from '../../images/imagetwo.png';

const Logo = () => {
  return (
    <div className='logo-cnt'>
      <img className='logo' src={Box} alt='logo' />
    </div>
  );
};

export default Logo;
