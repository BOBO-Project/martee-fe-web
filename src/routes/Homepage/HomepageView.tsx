import type { FC } from "react";
import AboutUsHome from "./AboustUs";
import S from "./_HomePageStyles";

const HomepageView: FC = () => {
  return (
    <>
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
      <S.Container
        style={{
          backgroundImage: `url(${require("../../assets/images/banner-2.png")})`,
        }}
      />
      <S.Container
        style={{
          backgroundImage: `url(${require("../../assets/images/banner-3.png")})`,
        }}
      />
      <S.Container
        style={{
          backgroundImage: `url(${require("../../assets/images/BG.png")})`,
        }}
      >
        <S.PortoWrapper>
          <S.PortoHeading>PORTOFOLIO -</S.PortoHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              maxWidth: "864px",
              maxHeight: "600px",
              margin: "auto",
              marginTop: "16px",
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, idx) => (
              <S.PortoBox>
                {idx !== 4 ? (
                  <img
                    src={require("../../assets/images/banner-2.png")}
                    alt="a"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <S.PortoValues>
                    <S.PortoHeading>VALUES EVERY MOMENT</S.PortoHeading>
                    <S.PortoValueText>
                      From planning leading up to actual wedding day. We take
                      care of everything, the smallest of details.
                    </S.PortoValueText>
                    <S.PortoValueFoot>
                      Martee wedding planning & organizer
                    </S.PortoValueFoot>
                  </S.PortoValues>
                )}
              </S.PortoBox>
            ))}
          </div>
        </S.PortoWrapper>
      </S.Container>
      <AboutUsHome />
    </>
  );
};

export default HomepageView;
