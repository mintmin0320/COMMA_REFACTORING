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
  /* overflow: hidden; */
  /* object-fit: contain; */
`;

function ProductCarousel() {
  return (
    <StyledCarouselBox>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={8000}
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