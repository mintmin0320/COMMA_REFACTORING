import { useSignOut } from '../../../../../query-hooks/useAuth';

import {
  RiLogoutBoxRFill
} from '../../../icons';

import * as S from './profile.style';

import NavItem from '../nav/NavItem';

const Profile = () => {
  const { mutate: signOut } = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <S.Aside>
      <S.ProfileBox>
        <S.ImgFrame>
          <S.ProfileImg src='../images/mintmin.jpg' alt='' />
        </S.ImgFrame>
      </S.ProfileBox>
      <S.NavBox>
        <NavItem />
        <S.Button onClick={handleSignOut} aria-label='로그아웃'>
          <RiLogoutBoxRFill />
        </S.Button>
      </S.NavBox>
    </S.Aside>
  );
};

export default Profile;