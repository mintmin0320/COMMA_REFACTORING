import { FaLinkedin, FaGithub } from '../../icons';

import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrap>
        <S.Info>
          <S.IconLink
            to='https://github.com/mintmin0320/COMMA_REFACTORING'
            aria-label='GitHub 이동'
          >
            <FaGithub size='35px' color='#000' />
          </S.IconLink>
          <S.IconLink
            to='https://www.linkedin.com/in/%ED%95%98%EB%AF%BC-%EB%B0%95-0aba16285/'
            aria-label='linkedin 이동'
          >
            <FaLinkedin size='35px' color='#2E64FE' />
          </S.IconLink>
        </S.Info>
        <S.Info>
          <p>Copyright 2023. mintmin inc. all rights reserved.</p>
        </S.Info>
      </S.FooterWrap>
    </S.FooterContainer>
  );
};

export default Footer;