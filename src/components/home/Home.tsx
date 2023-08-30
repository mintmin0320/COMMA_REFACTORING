import styled from 'styled-components';

import IntroBanner from './IntroBanner';
import GuideBanner from './GuideBanner';
import NoticeBanner from './NoticeBanner';
import NavigationMenuBanner from './NavigationMenuBanner';

// CSS
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Container>
      <IntroBanner />
      <GuideBanner />
      <NoticeBanner />
      <NavigationMenuBanner />
    </Container>
  );
};

export default Home;