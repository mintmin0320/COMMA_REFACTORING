import AdminUserManagement from '../../components/admin/AdminUserManagement';
import AdminSideBar from '../../components/common/layout/sidebar/AdminSideBar';

// styles
import { Container } from '../../components/styles/AdminPageStyles';

const AdminUserManagementPage = () => {
  return (
    <Container>
      <AdminSideBar />
      <AdminUserManagement />
    </Container>
  );
};

export default AdminUserManagementPage