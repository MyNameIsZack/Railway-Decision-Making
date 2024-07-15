import './index.css';
import DefaultLogo from './resource/upload.png'
import DisLike from '../DisLikeItem';
const StationItem = ({ 
    LogoURL,
    StationAddress, 
    StationClass, 
    StationID, 
    StationName, 
    StationPhone, 
    StationPosition, 
    StationUID, 
    StationURL 
  }) => {
    const logo = LogoURL || DefaultLogo; // Use default logo if LogoURL is null

    return (
        <div className='StationItem'>
          <div className='StationItem-img-content'>
            <img src={logo} alt={StationName.Zh_tw} />
          </div>
          <div className='StationItem-content'>
            <h6>{StationName.Zh_tw}</h6>
            <p>地址: {StationAddress}</p>
            <div className='StationItem-content-footer'>
              <a href={StationURL} target="_blank" rel="noopener noreferrer">更多資訊</a>
            </div>
          </div>
        </div>
    );
  };
  
  export default StationItem;