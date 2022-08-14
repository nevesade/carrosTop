import { ReactComponent as MainCar } from 'assets/images/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>

            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainCar />
          </div>

        </div>
        
        <div className='btn-container'>
        <ButtonIcon/>
        
        </div>
       
      </div>
    </>
  );
};

export default Home;
