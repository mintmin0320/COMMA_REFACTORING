import styled from 'styled-components';

import Admin from '../../components/admin/Admin';
import AdminSideBar from '../../components/common/layout/sidebar/AdminSideBar';

// CSS
const Container = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
`;

function AdminPage() {
  return (
    <Container>
      <AdminSideBar />
      <Admin />
    </Container>
  );
};

export default AdminPage