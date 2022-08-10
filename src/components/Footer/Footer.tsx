import type { FC } from "react";
import Copyrights from "components/Copyrights";
import S from "./_FooterStyles";

const Footer: FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={require("../../assets/images/logo.png")} />
        <Copyrights />
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
