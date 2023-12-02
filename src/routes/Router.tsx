import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PATH } from '../constants/path';

const LoginPage = lazy(() => import('../pages/auth/loginPage/LoginPage'));
const JoinPage = lazy(() => import('../pages/auth/joinPage/JoinPage'));
const HomePage = lazy(() => import('../pages/home/HomePage'));
const NoticePage = lazy(() => import('../pages/notice/NoticePage'));
const ProductPage = lazy(() => import('../pages/product/ProductPage'));
const CommunityPage = lazy(() => import('../pages/community/CommunityPage'));
const BasketPage = lazy(() => import('../pages/basket/BasketPage'));
const ProfilePage = lazy(() => import('../pages/userProfile/ProfilePage'));
const AdminProductFormPage = lazy(() => import('../pages/admin/AdminProductFormPage'));
const AdminUserManagementPage = lazy(() => import('../pages/admin/AdminUserManagementPage'));
const AdminOrderManagementPage = lazy(() => import('../pages/admin/AdminOrderManagementPage'));
const NotFoundPage = lazy(() => import('../components/notice/NotFoundPage'));

const Router = () => {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={`${PATH.AUTH}/login`} element={<LoginPage />} />
        <Route path={`${PATH.AUTH}/join`} element={<JoinPage />} />
        <Route path={PATH.NOTICE} element={<NoticePage />} />
        <Route path={PATH.PRODUCT} element={<ProductPage />} />
        <Route path={PATH.COMMUNITY} element={<CommunityPage />} />
        <Route path={PATH.BASKET} element={<BasketPage />} />
        <Route path={PATH.PROFILE} element={<ProfilePage />} />
        <Route path={`${PATH.ADMIN}/user-info`} element={<AdminUserManagementPage />} />
        <Route path={`${PATH.ADMIN}/order-list`} element={<AdminOrderManagementPage />} />
        <Route path={`${PATH.ADMIN}/product-management`} element={<AdminProductFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;