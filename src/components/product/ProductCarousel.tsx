import styled from 'styled-components';
import { Carousel } from "react-responsive-carousel";

function ProductCarousel() {
  return (
    <CarouselBox>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={8000}
      >
        <CarouselList>
          <CarouselImg src='./images/product1.jpg' />
        </CarouselList>
        <CarouselList>

        </CarouselList>
      </Carousel>
    </CarouselBox>
  )
}

export default ProductCarousel;

const CarouselBox = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  background-color: red;
`;

const CarouselList = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  
`;

const CarouselImg = styled.img`
  height: 300px;
  overflow: hidden;
`;