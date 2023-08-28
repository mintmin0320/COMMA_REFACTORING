/*
  인기글 컴포넌트
  - 가장 좋아요가 많은 게시글 top3 
*/

import styled from 'styled-components';

// types
import { BestPostInfo } from './../../types/community'

// icons, dummy-data
import { AiFillHeart } from 'react-icons/ai';

import bestPostData from './bestPostData.json';

// CSS
const StyledBestPostBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledBestPostTextBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
`;

const StyledBestPostList = styled.div`
  width: 95%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: solid 1px #d8d8d8;
`;

const StyledBestPost = styled.div`
  max-width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    border-radius: 8px;
    background-color: #f2f2f2;
  }
`;

const StyledBestPostTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const StyledBestPostLikeCount = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BestPost = () => {
  return (
    <StyledBestPostBox>
      <StyledBestPostTextBox>🔥 인기글</StyledBestPostTextBox>
      <StyledBestPostList>
        {bestPostData.map((item: BestPostInfo) => (
          <StyledBestPost key={item.postId}>
            <StyledBestPostTitle>{item.postTitle}</StyledBestPostTitle>
            <StyledBestPostLikeCount>
              <AiFillHeart color='#FF0000' size='18px' />
              {item.postLikeCount}
            </StyledBestPostLikeCount>
          </StyledBestPost>
        ))}
      </StyledBestPostList>
    </StyledBestPostBox>
  );
};

export default BestPost;