import styled from 'styled-components';

import AdminUserManagement from '../../components/admin/AdminUserManagement';
import AdminSideBar from '../../components/common/layout/sidebar/AdminSideBar';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const AdminUserManagementPage = () => {
  return (
    <Container>
      <AdminSideBar />
      <AdminUserManagement />
    </Container>
  );
};

export default AdminUserManagementPage