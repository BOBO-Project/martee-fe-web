import type { FC } from "react";
import S from "./_AboutPageStyle";
import ContextSection from "components/ContextSection";

const AboutPage: FC = () => {
  return (
    <div>
      <S.ContainerBanner>
        <img
          src={require("../../assets/images/aboutus-banner.png")}
          alt="aboutus-banner"
          width="100%"
        />
        <S.HeadingBanner>
          <img
            src={require("../../assets/images/union.png")}
            alt="union"
            width="72px"
            height="72px"
          />
          TENTANG KAMI
        </S.HeadingBanner>
      </S.ContainerBanner>
      <S.Container>
        <S.Heading>INI ADALAH SEDIKIT PENJELASAN TENTANG KAMI</S.Heading>
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
      <S.ContainerPict>
        <img
          src={require("../../assets/images/profile-photo.png")}
          alt="profile-photo"
          width="300px"
          height="600px"
        />
        <S.Wrapper>
          <S.Heading>RICA INDRIANI</S.Heading>
          <S.Text>Project Leader - Martee Wedding Planner </S.Text>
          <S.Heading3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with versions of Lorem Ipsum.
          </S.Heading3>
          <S.Heading3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with versions of Lorem Ipsum.
          </S.Heading3>
        </S.Wrapper>
      </S.ContainerPict>
      <S.ContainerVideo>
      <iframe
        width="1040px"
        height="450px"
        src="https://www.youtube.com/embed/IpIiFUxtOjw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      </S.ContainerVideo>
      <ContextSection />
      <h1>asd</h1>
    </div>
  );
};

export default AboutPage;
