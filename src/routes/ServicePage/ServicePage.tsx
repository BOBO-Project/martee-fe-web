import ContextBanner from "components/ContextBanner/ContextBanner";
import ContextSection from "components/ContextSection";
import type { FC } from "react";
import S from "./_ServicePageStyles";
import ContextText from "components/ContextText";
import service1 from '../../assets/images/service1.png'

import ServiceBanner from "../../assets/images/service-banner2.png"

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
        backgroundImg={ServiceBanner}
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
      <ContextText heading1='WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI' title={"Services for the planning of the wedding consists of the following"} text={"Responsabillities"} position={'right'} info={true} image={service1}/>
      <ContextText heading1='WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI ' title={"Specialize in Traditional Wedding concepts in Indonesia"} text={"WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI"} position={'left'}/>
      <ContextText heading1='WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI ' title={"Specialize in International Wedding world-wide"} position={'right'}/>
      <ContextSection/>
      {/* </S.Container> */}
    </>
  );
};

export default ServicePage;
