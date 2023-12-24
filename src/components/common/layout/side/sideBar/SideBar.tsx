import Diet from '../Diet';
import Profile from '../profile/Profile';

import * as S from './Side.style';

const SideBar = () => {
  return (
    <S.Aside>
      <Profile />
      <S.DietTitle>오늘의 식단</S.DietTitle>
      <Diet />
    </S.Aside>
  );
};

export default SideBar;