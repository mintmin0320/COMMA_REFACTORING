import styled from 'styled-components';

import BestPost from './BestPost';
import PostList from './PostList';
import SearchBar from '../common/SearchBar';
import PostCategory from './PostCategory';
import PostPagination from './PostPagination';

// CSS
const Container = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  /* background-color: red; */
`;

const Community = () => {
  return (
    <Container>
      <BestPost />
      <SearchBar />
      <PostCategory />
      <PostList />
      <PostPagination />
    </Container>
  );
};

export default Community;