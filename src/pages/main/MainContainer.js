import './main.css';

import imgOne from '../../images/imageone.png';

import Logo from '../../components/logo/Logo';
import NavBar from '../../components/navbar/NavBar';
import ButtonCnt from '../../components/utils/ButtonCnt';
import ImgCnt from '../../components/utils/ImgCnt';
import TextContainer from '../../components/utils/TextContainer';

const MainContainer = () => {
  return (
    <div>
      <div>
        <Logo />
        <NavBar />
      </div>
      <div className='main-first-cnt'>
        <div className='main-first-txt-cnt'>
          {' '}
          <TextContainer
            styleTwo={{
              height: 'fit-content',
              width: '420px',
            }}
            style={{ fontSize: '28px' }}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          />
          <TextContainer
            styleTwo={{
              height: 'fit-content',
              width: '420px',
            }}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus, illum eius nostrum quia fuga totam ipsam eos odit assumenda molestiae at adipisci veritatis enim odio fugiat nesciunt repellendus numquam'
            }
          />
          <ButtonCnt
            style={{
              width: '167px',
              height: '45px',
              background: '#1492E6 0% 0% no-repeat padding-box',
              boxShadow: '0px 16px 48px #00000029',
              borderRadius: '33px',
              border: 'none',
            }}
          />
        </div>
        <div className='main-first-img-cnt'>
          <ImgCnt
            img={imgOne}
            style={{ with: 'fit-content', height: '450px' }}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MainContainer;
