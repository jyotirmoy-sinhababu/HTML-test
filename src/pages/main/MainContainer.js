import './main.css';

import imgOne from '../../images/imageone.png';
import firstPer from '../../images/personOne.png';
import secPer from '../../images/personTwo.png';
import thirdPer from '../../images/personThird.png';
import hand from '../../images/hand.png';
import arrow from '../../images/arrow.png';
import hiring from '../../images/hiring.png';

import Logo from '../../components/logo/Logo';
import NavBar from '../../components/navbar/NavBar';
import ButtonCnt from '../../components/utils/ButtonCnt';
import ImgCnt from '../../components/utils/ImgCnt';
import TextContainer from '../../components/utils/TextContainer';
import Card from '../../components/card/Card';

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
      <div className='second-txt-cnt'>
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '820px',
          }}
          style={{ fontSize: '28px' }}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </div>
      <div className='main-card-cnt'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='third-txt-cnt'>
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '820px',
          }}
          style={{ fontSize: '28px' }}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </div>
      <div className='main-img-and-card-cnt'>
        <div>
          <ImgCnt img={firstPer} />
          <Card
            style={{
              width: '328px',
              height: '168px',
              textAlign: 'left',
              font: 'normal normal normal 18px/24px Nunito Sans',
              letterSpacing: '0px',
              color: '#000000',
              opacity: '1',
            }}
          />
        </div>
        <div>
          <ImgCnt img={secPer} />
          <Card
            style={{
              width: '328px',
              height: '168px',
              textAlign: 'left',
              font: 'normal normal normal 18px/24px Nunito Sans',
              letterSpacing: '0px',
              color: '#000000',
              opacity: '1',
            }}
          />
        </div>
        <div>
          <ImgCnt
            img={thirdPer}
            style={{
              width: '220px',
              height: '190px',
            }}
          />
          <Card
            style={{
              width: '328px',
              height: '168px',
              textAlign: 'left',
              font: 'normal normal normal 18px/24px Nunito Sans',
              letterSpacing: '0px',
              color: '#000000',
              opacity: '1',
            }}
          />
        </div>
      </div>
      <div className='third-txt-cnt'>
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '820px',
          }}
          style={{ fontSize: '28px' }}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </div>

      <div className='main-small-card-cnt'>
        <div className='small-card-cnt'>
          {' '}
          <div className='small-logo-txt-ctn'>
            <ImgCnt img={hand} />
            <div className='small-txt-ctn'>
              {' '}
              <TextContainer
                styleTwo={{
                  height: 'fit-content',
                  width: '420px',
                }}
                style={{ fontSize: '28px' }}
                text={'Lorem ipsum dolor sit.'}
              />
            </div>
          </div>
          <TextContainer
            styleTwo={{
              height: 'fit-content',
              width: '420px',
            }}
            text={
              ' adipisci veritatis enim odio fugiat nesciunt repellendus numquam'
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

        <div className='small-card-cnt-two'>
          {' '}
          <div className='small-logo-txt-ctn'>
            <ImgCnt img={arrow} />
            <div className='small-txt-ctn'>
              <TextContainer
                styleTwo={{
                  height: 'fit-content',
                  width: '420px',
                }}
                style={{ fontSize: '28px' }}
                text={'Lorem ipsum dolor sit.'}
              />
            </div>
          </div>
          <TextContainer
            styleTwo={{
              height: 'fit-content',
              width: '420px',
            }}
            text={
              ' adipisci veritatis enim odio fugiat nesciunt repellendus numquam'
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
        <div className='small-card-cnt-three'>
          {' '}
          <div className='small-logo-txt-ctn'>
            <ImgCnt img={hiring} />
            <div className='small-txt-ctn'>
              <TextContainer
                styleTwo={{
                  height: 'fit-content',
                  width: '420px',
                }}
                style={{ fontSize: '28px' }}
                text={'Lorem ipsum dolor sit.'}
              />
            </div>
          </div>
          <TextContainer
            styleTwo={{
              height: 'fit-content',
              width: '420px',
            }}
            text={
              ' adipisci veritatis enim odio fugiat nesciunt repellendus numquam'
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
      </div>
      <div className='fifth-txt-ctn'>
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '820px',
          }}
          style={{ fontSize: '28px' }}
          text={'Lorem ipsum dolor sit.'}
        />
      </div>
    </div>
  );
};

export default MainContainer;
