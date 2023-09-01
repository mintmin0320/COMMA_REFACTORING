import styled from 'styled-components';

import AdminSideBar from '../../components/common/layout/sidebar/AdminSideBar';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const AdminAddProductPage = () => {
  return (
    <Container>
      <AdminSideBar />
    </Container>
  );
};

export default AdminAddProductPage;