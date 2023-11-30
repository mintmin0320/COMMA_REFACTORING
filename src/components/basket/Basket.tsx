import { useState } from 'react';
import styled from 'styled-components';

// types
import { SelectedState } from '../../types/basket';

import { FaTrash } from '../common/icons';

// CSS
const StyledBasketForm = styled.form`
  width: 55%;
  position: relative;
  padding-bottom: 90px; // BottomBox의 높이만큼 패딩 추가
`;

const StyledBasketTopBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledLeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #d8d8d8;
  border-radius: 8px 0 0 0;
`;

const StyledBasketTitle = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'ADLaMDisplay', sans-serif;
  font-weight: bold;
  border-bottom: solid 1px #d8d8d8;
  border-radius: 8px 0 0 0;
`;

const StyledSelectActionsWrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 0 0 8px;
`;

const StyledRightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledCourseCheckboxBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledCourseCheckboxTitle = styled.div`
  width: 20%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  background-color: #f2f2f2;
`;

const StyledCourseCheckbox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledCourseCheckboxLabel = styled.label`
  cursor: pointer;
`;

const StyledApplicationPurposeBox = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledApplicationPurposeTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledApplicationPurposeTextarea = styled.textarea`
  width: 99%;
  height: 70%;
  border: none;
  outline: none;
`;

const StyledBasketList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 25px;

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledBasketItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
  margin-top: 25px;
`;

const StyledBasketItemImgBox = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0 0 8px;
`;

const StyledBasketItemImg = styled.img`
  width: 85%;
  height: 80%;
  border-radius: 8px;
`;

const StyledBasketItemInfoBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 8px 8px 0;
`;

const StyledBasketItemTitle = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const StyledBasketItemCategory = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  color: #A4A4A4;
  font-size: 13px;
`;

const StyledBasketItemButtonBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBasketItemButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const StyledBasketBottomOrderBox = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  background-color: #f2f2f2;
  margin-top: 30px;
`;

const StyledBasketOrderButton = styled.button`
  width: 20%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 20px;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  cursor: pointer;
`;

const Basket = () => {
  const [selected, setSelected] = useState<SelectedState>({
    graduationProject: false,
    iotProgramming: false
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelected((prevState: SelectedState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <StyledBasketForm>
      <StyledBasketTopBox>
        <StyledLeftBox>
          <StyledBasketTitle>Order</StyledBasketTitle>
          <StyledSelectActionsWrap>
            <StyledCourseCheckboxLabel>
              <input
                type="checkbox"
                name="graduationProject"
                checked={selected.graduationProject}
                onChange={handleCheckboxChange}
              />
              전체 삭제
            </StyledCourseCheckboxLabel>
            <StyledCourseCheckboxLabel>
              <input
                type="checkbox"
                name="iotProgramming"
                checked={selected.iotProgramming}
                onChange={handleCheckboxChange}
              />
              전체 선택
            </StyledCourseCheckboxLabel>
          </StyledSelectActionsWrap>
        </StyledLeftBox>
        <StyledRightBox>
          <StyledCourseCheckboxBox>
            <StyledCourseCheckboxTitle>과목</StyledCourseCheckboxTitle>
            <StyledCourseCheckbox>
              <StyledCourseCheckboxLabel>
                <input
                  type="checkbox"
                  name="graduationProject"
                  checked={selected.graduationProject}
                  onChange={handleCheckboxChange}
                />
                졸업작품
              </StyledCourseCheckboxLabel>
              <StyledCourseCheckboxLabel>
                <input
                  type="checkbox"
                  name="iotProgramming"
                  checked={selected.iotProgramming}
                  onChange={handleCheckboxChange}
                />
                IoT 프로그래밍
              </StyledCourseCheckboxLabel>
            </StyledCourseCheckbox>
          </StyledCourseCheckboxBox>
          <StyledApplicationPurposeBox>
            <StyledApplicationPurposeTitle>활동 계획</StyledApplicationPurposeTitle>
            <StyledApplicationPurposeTextarea
              placeholder='활동 계획을 간단하게 적어주세요.'
            />
          </StyledApplicationPurposeBox>
        </StyledRightBox>
      </StyledBasketTopBox>
      <StyledBasketList>
        <StyledBasketItem>
          <input
            type="checkbox"
            name="graduationProject"
            checked={selected.graduationProject}
            onChange={handleCheckboxChange}
          />
          <StyledBasketItemImgBox>
            <StyledBasketItemImg src='./images/arduino1.jpg' />
          </StyledBasketItemImgBox>
          <StyledBasketItemInfoBox>
            <StyledBasketItemTitle>지진 감지 센서</StyledBasketItemTitle>
            <StyledBasketItemCategory>센서</StyledBasketItemCategory>
            <StyledBasketItemButtonBox>
              <StyledBasketItemButton type='button'>
                <FaTrash size='20px' />
              </StyledBasketItemButton>
            </StyledBasketItemButtonBox>
          </StyledBasketItemInfoBox>
        </StyledBasketItem>
      </StyledBasketList>
      <StyledBasketBottomOrderBox>
        <StyledBasketOrderButton>
          주문
        </StyledBasketOrderButton>
      </StyledBasketBottomOrderBox>
    </StyledBasketForm>
  );
};

export default Basket;