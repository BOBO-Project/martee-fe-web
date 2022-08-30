import ContextBanner from "components/ContextBanner/ContextBanner";
import type { FC } from "react";
import S from "./_ServicePageStyles";

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
      <ContextBanner
        title="Service"
        backgroundImg={"../../assets/images/service-banner.png"}
      />
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
      <div className="board" >
        <div className="pic-services">
          <S.Container>
            <>Service1</>
            <S.Text>Service 1</S.Text>
          </S.Container>
        </div>
        <div className="content-services">
          <S.Container>
            <S.Heading2>Services for the planning of the wedding consists of the following </S.Heading2>
            <S.Text>WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI</S.Text>
          </S.Container>
        </div>
      </div>
      {/* </S.Container> */}
    </>
  );
};

export default ServicePage;
