import Logo from '../../components/logo/Logo';
import NavBar from '../../components/navbar/NavBar';
import TextContainer from '../../components/utils/TextContainer';

const MainContainer = () => {
  return (
    <div>
      <div>
        <Logo />
        <NavBar />
      </div>
      <div>
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '420px',
            border: '1px solid red',
          }}
          style={{ fontSize: '28px' }}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <TextContainer
          styleTwo={{
            height: 'fit-content',
            width: '420px',
            border: '1px solid red',
          }}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus, illum eius nostrum quia fuga totam ipsam eos odit assumenda molestiae at adipisci veritatis enim odio fugiat nesciunt repellendus numquam'
          }
        />
      </div>
    </div>
  );
};

export default MainContainer;
