import styled from 'styled-components';

// dummy-data
import postData from './postData.json';

interface PostInfo {
  postId: number;
  postTitle: string;
  postLikeCount: number;
}

// CSS
const StyledCommunityPostList = styled.div`
  width: 100%;
  height: 70%;
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
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const PostList = () => {
  return (
    <StyledCommunityPostList>
      {
        postData.map((item: PostInfo) => {
          return (
            <StyledCommunityPost key={item.postId}>
              {item.postTitle}
            </StyledCommunityPost>
          )
        })
      }
    </StyledCommunityPostList>
  );
};

export default PostList;