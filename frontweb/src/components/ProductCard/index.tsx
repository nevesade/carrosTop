import './styles.css';

import CarImg from 'assets/images/car-card.png';
import ButtonIcon from 'components/ButtonIcon';


const ProductCard = () => {
    return (
      <>
      <div className='base-card product-card'>
        <div className='car-top-container'>
            <img src={ CarImg }
                alt="Imagem do carro" />
            

        </div>
        <div className='car-bottom-container'>
            <h4>Audi Supra TT</h4>
            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h6>
            <ButtonIcon text="Comprar"/>
        </div>
      </div>
      </>
    );
  };
  
  export default ProductCard;
  