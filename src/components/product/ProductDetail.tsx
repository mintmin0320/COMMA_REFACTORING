import React, { useState } from 'react';
import styled from 'styled-components';

import RecommendedProducts from './RecommendedProducts';

// styles
import { StyledModalContainer } from '../styles/CommonStyles';

// types
import { ModalProps } from '../../types/product';

// icons
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

// CSS
const StyledModalWrap = styled.div`
  width: 70%;
  height: 75%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
`;

const StyledModalTopBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  border-radius: 10px 10px 0 0;
`;

const StyledProductImgBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  border-radius: 10px 0 0 0;
`;

const StyledProductImg = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px 0 0 0;
`;

const StyledProductInfoBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 10px 0 0;
`;

const StyledProductInfo = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProductTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledProductCategory = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const StyledProductCount = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const StyledProductIconBox = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const StyledProductIcon = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: #f2f2f2;
  }
`;

const StyledProductBottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

const StyledProductCommentTitle = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyledProductCommentBox = styled.div`
  width: 90%;
  height: 75%;
  border: solid 1px #d8d8d8;
  background-color: #fff;
  overflow-y: scroll;
`;

const StyledProductComment = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
  font-size: 15px;
`;

const ProductDetail = ({ isOpen, onClose }: ModalProps) => {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [isLikeVisible, setIsLikeVisible] = useState<boolean>(false);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalContainer onClick={handleOverlayClick}>
      <StyledModalWrap>
        <StyledModalTopBox>
          <StyledProductImgBox>
            <StyledProductImg src='./images/arduino4.jpg' />
          </StyledProductImgBox>
          <StyledProductInfoBox>
            <StyledProductInfo>
              <StyledProductTitle>자이로 센서</StyledProductTitle>
              <StyledProductCategory>센서</StyledProductCategory>
              <StyledProductCount>남은 수량 : 2 EA</StyledProductCount>
              <StyledProductIconBox>
                <StyledProductIcon onClick={() => setIsLikeVisible(!isLikeVisible)}>
                  {
                    !isLikeVisible ? <AiOutlineHeart /> : <AiFillHeart />
                  }
                </StyledProductIcon>
                <StyledProductIcon onClick={() => setIsCartVisible(!isCartVisible)}>
                  {
                    !isCartVisible ? <AiOutlineShoppingCart /> : <BsFillCartCheckFill />
                  }
                </StyledProductIcon>
              </StyledProductIconBox>
            </StyledProductInfo>
            <StyledProductBottom>
              <StyledProductCommentTitle>상품평</StyledProductCommentTitle>
              <StyledProductCommentBox>
                <StyledProductComment>좋네요??</StyledProductComment>
                <StyledProductComment>과제 필수 사용</StyledProductComment>
                <StyledProductComment>재고 언제 들어오나요?</StyledProductComment>
                <StyledProductComment>최고!</StyledProductComment>
              </StyledProductCommentBox>
            </StyledProductBottom>
          </StyledProductInfoBox>
        </StyledModalTopBox>
        <RecommendedProducts />
      </StyledModalWrap>
    </StyledModalContainer>
  );
};

export default ProductDetail;
