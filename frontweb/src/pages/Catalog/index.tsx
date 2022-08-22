import ButtonIcon from 'components/ButtonIcon';

import ProductCard from 'components/ProductCard';
import './styles.css';


const Catalog = () => {
  return (
    <>
    

      

      <div className="container my-4">
      <div className=" my-4 base-card search-card">
        <div className='search-form'>
         
              <input className="form-control" placeholder='Digite sua busca' />
              <ButtonIcon text='Buscar'/>
         
       
        </div>
      </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 ">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
