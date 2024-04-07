import Carousel from 'react-bootstrap/Carousel';
import Mix from'./Mix.jpg'
import './Caurosal.css'

export default function Caurosal() {
  return (
    <Carousel data-bs-theme="dark pt-5" >
      <Carousel.Item  style={{height: '800px' }}>
        <img className='mix' src={Mix} alt="" />
      
      </Carousel.Item>
      <Carousel.Item style={{ height: '800px' }}>
        <img  className='mix' src={Mix} alt="" />
       
      </Carousel.Item>
      <Carousel.Item style={{ height: '800px' }}>
        <img  className='mix' src={Mix} alt="" />
        
      </Carousel.Item>
    </Carousel>
  );
}

