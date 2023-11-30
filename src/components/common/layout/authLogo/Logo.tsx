import * as S from './Logo.style';

export default function Logo() {
  return (
    <S.LogoWrap>
      <S.LogoImgBox to='/auth/login' aria-label='로그인 화면으로 이동'>
        <S.LogoImg src='../images/blue_bg.svg' alt='로고' />
      </S.LogoImgBox>
    </S.LogoWrap>
  );
};
