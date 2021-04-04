import myImage from './sim.jpg';
import '../../App.css';


function Imagee() {
    return (
      <div className="imagee">
        <img src={myImage} className="sim" alt="slim" width={300} height={300} />
      </div>
    );
  }
  
  export default Imagee;
