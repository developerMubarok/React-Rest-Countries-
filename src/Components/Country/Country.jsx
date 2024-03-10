import './Country.css';
const Counttry = ({country}) => {
    const {name, flags}= country;
    return (
        <div className='country'>
            <h3>Name:{name?.common} </h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Counttry;