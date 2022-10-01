import ContextBanner from "components/ContextBanner/ContextBanner";
import ContextSection from "components/ContextSection";
import type { FC } from "react";
import S from "./_ServicePageStyles";
import ContextText from "components/ContextText";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";

import ServiceBanner from "../../assets/images/service-banner2.png";

const ServicePage: FC = () => {
  return (
    <>
      {/* <S.Container> */}
      {/* <h1 style={{
          display: 'flex',
          justifyContent:'center',
          color:'#FFFFFF',
          padding:'0%'
        }}>Service</h1> */}
      <ContextBanner title="Service" backgroundImg={ServiceBanner} />
      <S.Container>
        <S.Heading>INI ADALAH SEDIKIT PENJELASAN SERVICES </S.Heading>
        <S.Text>WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI</S.Text>
        <S.Heading3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          versions of Lorem Ipsum.
        </S.Heading3>
        <S.Heading3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          versions of Lorem Ipsum.
        </S.Heading3>
      </S.Container>
      <div style={{
      }}>
        <ContextText
          title={
            "Services for the planning of the wedding consists of the following"
          }
          position={"right"}
          image={service1}
        >
          <h3>Responsabilities</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <S.Li>Moodboard wedding concepts</S.Li>
              <S.Li>Venue</S.Li>
              <S.Li>Decoration</S.Li>
              <S.Li>Catering</S.Li>
              <S.Li>KUA & Penghulu</S.Li>
              <S.Li>Saksi Nikah</S.Li>
              <S.Li>Souvenir</S.Li>
              <S.Li>Kartu Undangan</S.Li>
              <S.Li>Baju calon pengantin</S.Li>
              <S.Li>Seragam orang tua calon pengantin</S.Li>
              <S.Li>Qori & Tilawah</S.Li>
              <S.Li>Tim/Sanggar adat</S.Li>
            </div>
            <div
              style={{
                marginLeft: "5%",
              }}
            >
              <S.Li>Make up artist calon pengantin</S.Li>
              <S.Li>Make up artist ibu & saudara kandung calon pengantin</S.Li>
              <S.Li>Sound systems</S.Li>
              <S.Li>MC</S.Li>
              <S.Li>Music band</S.Li>
              <S.Li>Tarian adat pembuka</S.Li>
              <S.Li>Panitia keluarga</S.Li>
              <S.Li>Penjaga buku tamu</S.Li>
              <S.Li>Many more...</S.Li>
            </div>
          </div>
        </ContextText>
        <ContextText
          title={"Specialize in Traditional Wedding concepts in Indonesia"}
          position={"left"}
          image={service2}
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
              We are a full-service event planning and wedding coordination
              company, offering a wide range of services to our brides in need.
              From the planning stages all the way through every detail of your
              special day, we are there for you every step of the way. With over
              10 years experience, we have organized weddings from simple
              elopements to extravagant ballroom affairs.
            </p>
            <p
              style={{
                maxWidth: "28%",
                marginRight: "5%",
                lineHeight: "25.4px",
              }}
            >
              Our sophisticated and glamorous wedding planner & organizer team
              are skilled at creating stunning and elegant events while
              maintaining a budget throughout the planning process. We
              specialize in traditional weddings, destination weddings and
              themed weddings throughout Indonesia as well as world wide.
            </p>
          </div>
        </ContextText>
        <ContextText
          title={"Specialize in International Wedding world-wide"}
          position={"right"}
          image={service3}
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
              We are a world-class Wedding Planner & Organiser, handling
              weddings in overseas. We specialize in creating a unique concept
              around every detail of your special day. Our team can take care of
              any aspect involved in the big day, from your dream honeymoon to
              ensuring the first dance for bride and groom goes without a hitch.
              We pride ourselves on our personal approach, with no job too big
              or small.
            </p>
            <p
              style={{
                maxWidth: "28%",
                marginRight: "5%",
                lineHeight: "25.4px",
              }}
            >
              We handle everything from A to Z. From a simple rehearsal dinner
              to an elaborate black-tie affair, we will ensure that your wedding
              is absolutely perfect. Our job is to plan, organize and execute
              everything needed for the celebration
            </p>
          </div>
        </ContextText>
      </div>
      <ContextSection />
      {/* </S.Container> */}
    </>
  );
};

export default ServicePage;
