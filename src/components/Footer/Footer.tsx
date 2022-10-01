import type { FC } from "react";
import Copyrights from "components/Copyrights";
import S from "./_FooterStyles";
import logo from '../../assets/images/logo.png'

const Footer: FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={logo} />
        <Copyrights />
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
