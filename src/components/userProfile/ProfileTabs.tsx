/*
  프로필 페이지 tab 모음 컴포넌트
  - 주문현황
  - 프로필 변경
  - 비밀번호 변경
  - 회원탈퇴 
*/

import { useState } from 'react';
import styled from 'styled-components';

import {
  Withdrawal,
  PasswordChangeForm,
  ProfileImgChangeForm,
  OrderStatusPanel
} from './index'

// CSS
const StyledTabsContainer = styled.div`
  width: 95%;
  height: 55%;
  display: flex;
  flex-direction: column;
`;

const StyledProfileTabsBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

const StyledTab = styled.div<{ $isSelected: boolean }>`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px 8px 0 0;
  border-bottom: ${({ $isSelected }) => ($isSelected ? 'none' : 'solid 1px #d8d8d8')};
  background-color: ${({ $isSelected }) => ($isSelected ? 'transparent' : '#f2f2f2')};
  font-size: 15px;
  cursor: pointer;
`;

const StyledBlankBox = styled.div`
  width: 20%;
  height: 45px;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledTabContentViewBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-top: none;
`;

const ProfileTabs = () => {
  const profileItems = ['주문현황', '프로필 사진', '비밀번호 변경', '회원탈퇴'];
  const [selectedTab, setSelectedTab] = useState<string>(profileItems[0]);

  const renderTabContent = () => {
    switch (selectedTab) {
      case '주문현황':
        return <OrderStatusPanel />;
      case '프로필 사진':
        return <ProfileImgChangeForm />;
      case '비밀번호 변경':
        return <PasswordChangeForm />;
      case '회원탈퇴':
        return <Withdrawal />;
      default:
        return null;
    }
  };

  return (
    <StyledTabsContainer>
      <StyledProfileTabsBox>
        {profileItems.map((item) => (
          <StyledTab
            key={item}
            onClick={() => setSelectedTab(item)}
            $isSelected={selectedTab === item}
          >
            {item}
          </StyledTab>
        ))}
        <StyledBlankBox />
      </StyledProfileTabsBox>
      <StyledTabContentViewBox>
        {renderTabContent()}
      </StyledTabContentViewBox>
    </StyledTabsContainer>
  );
};

export default ProfileTabs;