/*
  프로필 페이지 tab 모음 컴포넌트
  - 주문현황
  - 프로필 변경
  - 비밀번호 변경
  -  회원탈퇴 
*/

import { useState } from 'react';
import styled from 'styled-components';

import Withdrawal from './Withdrawal';
import PasswordChangeForm from './PasswordChangeForm';
import ProfileImgChangeForm from './ProfileImgChangeForm';

// CSS
const StyledProfileTabsBox = styled.div`
  width: 95%;
  height: 55%;
  display: flex;
  flex-direction: column;
`;

const StyledTabsContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

const StyledTab = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px 8px 0 0;
  border-bottom: solid 1px #d8d8d8;
  font-size: 15px;
  cursor: pointer;
`;

const StyledBlankContainer = styled.div`
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
  const [selectedTab, setSelectedTab] = useState<string>('주문현황');

  return (
    <StyledProfileTabsBox>
      <StyledTabsContainer>
        <StyledTab
          onClick={() => setSelectedTab('주문현황')}
          style={{
            backgroundColor: selectedTab === '주문현황' ? 'transparent' : '#f2f2f2',
            borderBottom: selectedTab === '주문현황' ? 'none' : 'solid 1px #d8d8d8'
          }}
        >
          주문현황
        </StyledTab>
        <StyledTab
          onClick={() => setSelectedTab('프로필 사진 변경')}
          style={{
            /* transparent -> 투명한 색상을 나타내는 키워드 */
            backgroundColor: selectedTab === '프로필 사진 변경' ? 'transparent' : '#f2f2f2',
            borderBottom: selectedTab === '프로필 사진 변경' ? 'none' : 'solid 1px #d8d8d8'
          }}
        >
          프로필 사진 변경
        </StyledTab>
        <StyledTab
          onClick={() => setSelectedTab('비밀번호 변경')}
          style={{
            backgroundColor: selectedTab === '비밀번호 변경' ? 'transparent' : '#f2f2f2',
            borderBottom: selectedTab === '비밀번호 변경' ? 'none' : 'solid 1px #d8d8d8'
          }}
        >
          비밀번호 변경
        </StyledTab>
        <StyledTab
          onClick={() => setSelectedTab('회원탈퇴')}
          style={{
            backgroundColor: selectedTab === '회원탈퇴' ? 'transparent' : '#f2f2f2',
            borderBottom: selectedTab === '회원탈퇴' ? 'none' : 'solid 1px #d8d8d8'
          }}
        >
          회원탈퇴
        </StyledTab>
        <StyledBlankContainer />
      </StyledTabsContainer>
      <StyledTabContentViewBox>
        {
          selectedTab === '주문현황'
            ? <PasswordChangeForm />
            :
            selectedTab === '프로필 사진 변경'
              ? <ProfileImgChangeForm />
              :
              selectedTab === '비밀번호 변경'
                ? <PasswordChangeForm />
                :
                <Withdrawal />
        }
      </StyledTabContentViewBox>
    </StyledProfileTabsBox>
  );
};

export default ProfileTabs;