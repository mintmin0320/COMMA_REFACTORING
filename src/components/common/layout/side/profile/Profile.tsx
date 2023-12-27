import { useSignOut } from '../../../../../query-hooks/auth/useSignOut';

import { RiLogoutBoxRFill } from '../../../icons';

import * as S from './profile.style';

import NavItem from '../nav/NavItem';

const Profile = () => {
  const { mutate: signOut } = useSignOut();

  return (
    <S.Aside>
      <S.ProfileBox>
        <S.ImgFrame>
          <S.ProfileImg src='../images/mintmin.jpg' alt='프로필 사진' />
        </S.ImgFrame>
      </S.ProfileBox>
      <S.NavBox>
        <NavItem />
        <S.Button onClick={() => signOut()} aria-label='로그아웃'>
          <RiLogoutBoxRFill />
        </S.Button>
      </S.NavBox>
    </S.Aside>
  );
};

export default Profile;