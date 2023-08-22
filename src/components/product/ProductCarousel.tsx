import styled from 'styled-components';
import { Carousel } from "react-responsive-carousel";

// CSS
const StyledCarouselBox = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
`;

const StyledCarouselList = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
`;

const StyledCarouselImg = styled.img`
  height: 280px;
  border-radius: 8px;
  /* overflow: hidden; */
  /* object-fit: contain; */
`;

const ProductCarousel = () => {
  return (
    <StyledCarouselBox>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={10000}
        transitionTime={1500}
        autoPlay={true}
      >
        <StyledCarouselList>
          <StyledCarouselImg src='./images/product1.jpg' />
        </StyledCarouselList>
        <StyledCarouselList>
          <StyledCarouselImg src='./images/arduino2.jpg' />
        </StyledCarouselList>
        <StyledCarouselList>
          <StyledCarouselImg src='./images/arduino5.jpg' />
        </StyledCarouselList>
      </Carousel>
    </StyledCarouselBox>
  );
};

export default ProductCarousel;