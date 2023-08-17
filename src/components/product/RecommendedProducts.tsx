/*
  상품 추천 페이지
  - 3개의 랜덤 추천 상품 제공
*/

import styled from 'styled-components';
import { useState } from 'react';

// dummy-data
import recommendData from './recommend.json';

// icon
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

// 추천 상품 정보
interface RecommendInfo {
  recommendId: number,
  recommendTitle: string,
  recommendCategory: string,
  recommendImg: string,
  recommendCount: number
};

// CSS
const StyledProductRecommendWrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 10px 10px;
`;

const StyledProductRecommendTop = styled.div`
  width: 98%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProductRecommendText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bolder;
`;

// 추천 상품 새로고침
const StyledProductRecommendRefresh = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  };
`;

const StyledProductRecommendBox = styled.div`
  width: 98%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 추천 상품 item
const StyledProductRecommendItem = styled.div`
  width: 310px;
  height: 85%;
  display: flex;
  border: solid 1px #d8d8d8;
  cursor: pointer;

  @media screen and (min-width: 1500px) {
    width: 410px;
  };
`;

const StyledProductRecommendImg = styled.img`
  width: 40%;
  height: 100%;
`;

const StyledProductRecommendInfoBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProductRecommendTitle = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const StyledProductRecommendCategory = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #bdbdbd;
  font-weight: bold;
`;

const StyledProductRecommendCount = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const StyledProductRecommendIconBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: flex-end;
`;

const StyledProductRecommendIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

const RecommendedProducts = () => {
  // 각 추천 상품의 ID를 key로 사용하고 boolean 값을 value로 사용
  const [isCartVisible, setIsCartVisible] = useState<Record<number, boolean>>({});
  const [isLikeVisible, setIsLikeVisible] = useState<Record<number, boolean>>({});

  return (
    <StyledProductRecommendWrap>
      <StyledProductRecommendTop>
        <StyledProductRecommendText>추천 상품</StyledProductRecommendText>
        <StyledProductRecommendRefresh>
          <FiRefreshCcw size='18px' />
        </StyledProductRecommendRefresh>
      </StyledProductRecommendTop>
      <StyledProductRecommendBox>
        {
          recommendData.map((item: RecommendInfo) => {
            return (
              <StyledProductRecommendItem key={item.recommendId}>
                <StyledProductRecommendImg src={item.recommendImg} />
                <StyledProductRecommendInfoBox>
                  <StyledProductRecommendTitle>{item.recommendTitle}</StyledProductRecommendTitle>
                  <StyledProductRecommendCategory>{item.recommendCategory}</StyledProductRecommendCategory>
                  <StyledProductRecommendCount>{item.recommendCount} EA</StyledProductRecommendCount>
                  <StyledProductRecommendIconBox>
                    <StyledProductRecommendIcon
                      onClick={() => {
                        setIsLikeVisible((prev) => ({ ...prev, [item.recommendId]: !prev[item.recommendId] }));
                      }}
                    >
                      {
                        !isLikeVisible[item.recommendId] ? <AiOutlineHeart /> : <AiFillHeart />
                      }
                    </StyledProductRecommendIcon>
                    <StyledProductRecommendIcon
                      onClick={() => {
                        setIsCartVisible((prev) => ({ ...prev, [item.recommendId]: !prev[item.recommendId] }));
                      }}
                    >
                      {
                        !isCartVisible[item.recommendId] ? <AiOutlineShoppingCart /> : <BsFillCartCheckFill />
                      }
                    </StyledProductRecommendIcon>
                  </StyledProductRecommendIconBox>
                </StyledProductRecommendInfoBox>
              </StyledProductRecommendItem>
            )
          })
        }
      </StyledProductRecommendBox>
    </StyledProductRecommendWrap>
  );
};

export default RecommendedProducts;