import styled from 'styled-components';

// types
import { PostInfo } from '../../types/community';

// icon, dummy-data
import { AiFillHeart } from 'react-icons/ai';

import postData from './postData.json';

// CSS
const StyledCommunityPostList = styled.div`
  width: 100%;
  height: 73%;
  display: flex;
  flex-direction: column;
  /* border: solid 1px #d8d8d8; */
  /* border-radius: 8px; */
`;

const StyledCommunityPost = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  cursor: pointer;
`;

const StyledPostTitle = styled.div`
  width: 95%;
  height: 40%;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const StyledPostCategory = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #BDBDBD;
`;

const StyledPostBottomBox = styled.div`
  width: 95%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const StyledPostLikeCount = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const StyledPostCreateDate = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const PostList = () => {
  // 명시적으로 타입 배열로 주장(assert)
  const typedPostData: PostInfo[] = postData as PostInfo[];

  return (
    <StyledCommunityPostList>
      {
        typedPostData.map((item: PostInfo) => {
          return (
            <StyledCommunityPost key={item.postId}>
              <StyledPostTitle>{item.postTitle}</StyledPostTitle>
              <StyledPostCategory>{item.postCategory}</StyledPostCategory>
              <StyledPostBottomBox>
                <StyledPostLikeCount>
                  <AiFillHeart color="#FF0000" size='18px' />
                  {item.postLikeCount}
                </StyledPostLikeCount>
                <StyledPostCreateDate>2023.04.20</StyledPostCreateDate>
              </StyledPostBottomBox>
            </StyledCommunityPost>
          )
        })
      }
    </StyledCommunityPostList>
  );
};

export default PostList;