import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { assets } from "../../assets/assets";

const Gallery = () => {

  return (
    <div style={{height : "60%", width : "60%", margin : "5rem auto"}}>
      <Carousel showThumbs = {false} showArrows={true} infiniteLoop ={true} interval={2000}>
        <div>
          <img src={assets.carouselOne} alt="Image 1" style={{objectFit : "cover", height : "100%", width: "100%"}} />
          <p style={{marginTop : "1rem"}}>Industrial visit</p>
        </div>
        <div>
          <img src={assets.carouselTwo} alt="Image 2" style={{objectFit : "cover",height : "100%", width: "100%"}} />
          <p style={{marginTop : "1rem"}}>Garduation Ceremony</p>
        </div>
        <div>
          <img src={assets.carouselThree} alt="Image 3" style={{objectFit : "cover", height : "100%", width: "100%"}} />
          <p style={{marginTop : "1rem"}}>Dance Competition</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
