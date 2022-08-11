import type { FC } from "react";
import S from "./_HomePageStyles";

const HomepageView: FC = () => {
  return (
    <S.Container
      style={{
        backgroundImage: `url(${require("../../assets/images/home-banner.png")})`,
      }}
    >
      <S.HeadingWrapper>
        <S.Heading>Prepare Your</S.Heading>
        <S.Heading>Perfect Wedding,</S.Heading>
        <S.Heading textColor="primary-cream2">Stress Free.</S.Heading>
        <S.ButtonWrapper>
          <S.Button>Hubungi Whatsapp Kami {">"}</S.Button>
          <S.Button ghost>Lihat Portofolio {">"} </S.Button>
        </S.ButtonWrapper>
      </S.HeadingWrapper>
    </S.Container>
  );
};

export default HomepageView;
