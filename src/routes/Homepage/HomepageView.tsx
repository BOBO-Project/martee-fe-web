import type { FC } from "react";
import AboutUsHome from "./AboustUs";
import S from "./_HomePageStyles";
import ContextSection from "components/ContextSection";
import homeBanner from "assets/images/home-banner.png";
import banner2 from "assets/images/banner-2.png";
import banner3 from "assets/images/banner-3.png";
import backGround from "assets/images/BG.png";
import home1 from "assets/images/homeText1.png";
import home2 from "assets/images/homeText2.png";
import more1 from "assets/images/more-1.png";
import more2 from "assets/images/more-2.png";
import more3 from "assets/images/more-3.png";
import more4 from "assets/images/more-4.png";
import more5 from "assets/images/more-5.png";
import more6 from "assets/images/more-6.png";
import more7 from "assets/images/more-7.png";
import more8 from "assets/images/more-8.png";
import { color } from "styles/colors";

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${home1})`,
            width: "50%",
            maxWidth: "50vw",
            minHeight: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            width: "100%",
            maxWidth: "50vw",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            marginTop: "48px",
          }}
        >
          <p
            style={{
              textAlign: "left",
              width: "60%",
              padding: "0 78px",
              fontSize: "28px",
              lineHeight: "39.2px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            We take care of everything, the smallest of details.
          </p>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              padding: "0 78px",
              fontSize: "14px",
              lineHeight: "19.6px",
              color: color["primary-cream2"],
              fontWeight: 400,
            }}
          >
            WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 78px",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: "19.6px",
                fontWeight: 400,
                maxWidth: "231px",
              }}
            >
              We are the one of the best wedding planner in Jakarta, Bandung,
              Bali and Indonesia. Providing local wedding and international
              wedding for both couple and handsome bride who looking for their
              dream wedding. Our purpose is to help you with the best service
              and experience your dream comes true. <br />
              <br />
              If you're ready to plan a wedding, reach out. Our designers have a
              unique perspective that can elevate your vision.
            </p>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "19.6px",
                  fontWeight: 400,
                  maxWidth: "231px",
                }}
              >
                Designs are high-quality and completed when you are ready for
                them. What sets us apart is our client service and attention to
                detail. We can help you plan the details or take care of
                everything on your behalf. We take care of every single detail
                to make sure your wedding is remarkable.
              </p>
              <button
                style={{
                  background: color["primary-cream2"],
                  color: color["primary-white"],
                  padding: "20px",
                  fontWeight: 800,
                  fontSize: "16px",
                  border: "none",
                  marginTop: "25px",
                }}
              >
                PORTOFOLIO {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <S.Container
        style={{
          backgroundImage: `url('${banner3}')`,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "50vw",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            marginTop: "48px",
          }}
        >
          <p
            style={{
              textAlign: "left",
              width: "60%",
              padding: "0 78px",
              fontSize: "28px",
              lineHeight: "39.2px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            No beauty shines brighter than one comes from a happy bride
          </p>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              padding: "0 78px",
              fontSize: "14px",
              lineHeight: "19.6px",
              color: color["primary-cream2"],
              fontWeight: 400,
            }}
          >
            WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 78px",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: "19.6px",
                fontWeight: 400,
                maxWidth: "231px",
              }}
            >
              Are you looking for a wedding planner to help you plan your big
              day? We provide wedding planner and organizer services to give you
              peace of mind during this special time. Whether you are planning a
              local wedding in Jakarta or Bali, or an international destination
              wedding in Japan – we want to help make the process easier for
              you.
            </p>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "19.6px",
                  fontWeight: 400,
                  maxWidth: "231px",
                }}
              >
                We use high-quality materials for the wedding planner and
                provides a complete service, from designing wedding concept,
                creating a wedding moodboard, etc. We take care of all things
                that are small details that cannot be found in other wedding
                planners. Everything is done focusing on our customer's requests
                and desires.
              </p>
              <button
                style={{
                  background: color["primary-cream2"],
                  color: color["primary-white"],
                  padding: "20px",
                  fontWeight: 800,
                  fontSize: "16px",
                  border: "none",
                  marginTop: "25px",
                }}
              >
                SERVICES {">"}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${home2})`,
            width: "50%",
            maxWidth: "50vw",
            minHeight: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
      <S.PortoContainer
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
      </S.PortoContainer>
      <AboutUsHome />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "39.2px",
            color: color["primary-cream2"],
          }}
        >
          LEBIH BANYAK TENTANG KAMI
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "10px",
            maxWidth: "1000px",
            maxHeight: "575px",
          }}
        >
          <div>
            <img width={245} height={245} src={more1} alt="more-1" />
          </div>
          <div>
            <img width={245} height={245} src={more5} alt="more-5" />
          </div>
          <div>
            <img width={245} height={245} src={more2} alt="more-2" />
          </div>
          <div>
            <img width={245} height={245} src={more6} alt="more-6" />
          </div>
          <div>
            <img width={245} height={245} src={more7} alt="more-7" />
          </div>
          <div>
            <img width={245} height={245} src={more3} alt="more-3" />
          </div>
          <div>
            <img width={245} height={245} src={more8} alt="more-8" />
          </div>
          <div>
            <img width={245} height={245} src={more4} alt="more-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageView;
