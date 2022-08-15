import type { FC } from "react";
import S from "./_ServicePageStyles";


const ServicePage: FC = () => {
  return (
    <>
      <div>Service</div>
      <S.Container
        style ={{
          backgroundImage: `url(${require("../../assets/images/service-banner.png")})`
        }}
      >
        <h1 style={{
          display: 'flex',
          justifyContent:'center',
          color:'#FFFFFF',
          padding:'0%'
        }}>Service</h1>
      </S.Container>
    </>
  )
};

export default ServicePage;
