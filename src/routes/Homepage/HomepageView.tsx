import type { FC } from "react";
import AboutUsHome from "./AboustUs";
import S from "./_HomePageStyles";
import homeBanner from "assets/images/home-banner.png";
import banner2 from "assets/images/banner-2.png";
import banner3 from "assets/images/banner-3.png";
import backGround from "assets/images/BG.png";
import ContextSection from "components/ContextSection";
import ContextText from "components/ContextText";
import home1 from "../../assets/images/homeText1.png"
import home2 from "../../assets/images/homeText2.png"


const HomepageView: FC = () => {
  return (
    <>
      <S.Container
        style={{
          backgroundImage: `url('${homeBanner}')`,
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
      <ContextSection />
      <S.Container
        style={{
          backgroundImage: `url('${banner2}')`,
        }}
      />
      <ContextText title="We take care of everything, the smallest of details." image={home1}>
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              maxWidth: "28%",
              marginRight: "5%",
              lineHeight: "25.4px",
            }}
          >
            We are the one of the best wedding planner in Jakarta, Bandung, Bali
            and Indonesia. Providing local wedding and international wedding for
            both couple and handsome bride who looking for their dream wedding.
            Our purpose is to help you with the best service and experience your
            dream comes true.
            <br/><br/>If you're ready to plan a wedding, reach out. Our
            designers have a unique perspective that can elevate your vision.
            
          </p>

          <p
            style={{
              maxWidth: "28%",
              marginRight: "5%",
              lineHeight: "25.4px",
            }}
          >
            Designs are high-quality and completed when you are ready for them.
            What sets us apart is our client service and attention to detail. We
            can help you plan the details or take care of everything on your
            behalf. We take care of every single detail to make sure your
            wedding is remarkable.
            <S.AboutButtonWrapper>
              <S.AboutButton>PORTFOLIO</S.AboutButton>
            </S.AboutButtonWrapper>
          </p>
        </div>
      </ContextText>
      <S.Container
        style={{
          backgroundImage: `url('${banner3}')`,
        }}
      />
      <ContextText
        title="No beauty shines brighter than one comes from a happy bride."
        position="left"
        image={home2}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              maxWidth: "28%",
              marginRight: "5%",
              lineHeight: "25.4px",
            }}
          >
            Are you looking for a wedding planner to help you plan your big day?
            We provide wedding planner and organizer services to give you peace
            of mind during this special time. Whether you are planning a local
            wedding in Jakarta or Bali, or an international destination wedding
            in Japan - we want to help make the process easier for you.
          </p>
          <p
            style={{
              maxWidth: "28%",
              lineHeight: "25.4px",
            }}
          >
            We use high-quality materials for the wedding planner and provides a
            complete service, from designing wedding concept, creating a wedding
            moodboard, etc. We take care of all things that are small details
            that cannot be found in other wedding planners. Everything is done
            focusing on our customer's requests and desires.
            <S.AboutButtonWrapper>
              <S.AboutButton>SERVICES</S.AboutButton>
            </S.AboutButtonWrapper>
          </p>
        </div>
      </ContextText>
      <S.Container
        style={{
          backgroundImage: `url('${backGround}')`,
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
                  <img src={banner2} alt="a" width="100%" height="100%" />
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
