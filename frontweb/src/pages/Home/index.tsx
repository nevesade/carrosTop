import { ReactComponent as MainCar } from 'assets/images/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <>
   
      <div className="home-container">
        <div className=" base-card home-card">
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

        <NavLink to={'/products'}>
        <ButtonIcon text='Ver catálogo'/>
        </NavLink>
      
        <h6>Comece agora a navegar</h6>
        </div> 
       
      </div>
    </>
  );
};

export default Home;
