import AdminOrderManagement from '../../components/admin/AdminOrderManagement';
import AdminSideBar from '../../components/common/layout/side/AdminSideBar'

// styles
import { Container } from '../../components/styles/AdminPageStyles';

const AdminOrderManagementPage = () => {
  return (
    <Container>
      <AdminSideBar />
      <AdminOrderManagement />
    </Container>
  );
};

export default AdminOrderManagementPage;