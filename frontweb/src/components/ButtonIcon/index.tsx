import './styles.css';

type Props = {
  text: string;

}

const ButtonIcon = ({text} : Props) => {
  return (
    <>

    <button className="btn  btn-catalog ">
        <p>{text}</p>
        
      </button>
     

    </>
  );
};

export default ButtonIcon;
