
import AdminProductForm from '../../components/admin/AdminProductForm';
import AdminSideBar from '../../components/common/layout/side/AdminSideBar';

// styles
import { Container } from '../../components/styles/AdminPageStyles';

const AdminProductFormPage = () => {
  return (
    <Container>
      <AdminSideBar />
      <AdminProductForm />
    </Container>
  );
};

export default AdminProductFormPage;