import { FC, useEffect, useState } from "react";
import ImageCard from "components/ImageCard";
// import photo from "../../assets/images/exPorto.png";
import S from "./_PortoPageStyle";
import ContextBanner from "components/ContextBanner";
import portoBanner from "../../assets/images/portoBanner.png";
import useAxios from "hooks/useAxios";
import titlePorto from "assets/images/textPorto.png";
import { color } from "styles/colors";
import { BASE_URL, PORTO_HOME_URL } from "url/api-url";

const PortoPage: FC = () => {
  const { response, loading, error } = useAxios(PORTO_HOME_URL);
  const dataPorto = response?.data || null;
  // let portoImage:any[] = []

  // dataPorto.map((e:any,i:number) =>{
  //   // console.log(e)
  //   // console.log(e.PortoImage.find((img:any) => img.is_main === true))
  //   if(e.PortoImage[i].length > 0){
  //     portoImage.push(e.PortoImages)
  //   }
  // })
  // console.log(portoImage)
  return (
    <>
      <ContextBanner backgroundImg={portoBanner} title={titlePorto} />
      <S.Title>PORTOFOLIO</S.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "0 0 2% 0",
        }}
      >
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button>Semua Kategori</S.Button>•
        </div>
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button>Traditional Wedding</S.Button>•
        </div>
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button>International Wedding</S.Button>
        </div>
      </div>
      <div style={{
        display:'flex',
        justifyContent: 'space-between'
      }}>
        {!loading &&
          dataPorto.map((e: any, i: number) => {
            console.log(
              `${BASE_URL}/${
                e.PortoImages.find((x: any) => x.is_main).image_url
              }`
            );
            return (
              <ImageCard>
                <div>
                  {e.PortoImages.length > 0 ? (
                    <img
                      style={{
                        width: 300,
                        height: 250,
                        border: "30px solid #F5EDE4",
                        // borderRadius: 150 / 2,
                        // overflow: "hidden",
                        // borderWidth: 10,
                        // borderColor: "red",
                      }}
                      // src={e.PortoImages.find((x:any) => x.is_main).image_url}
                      src={`${BASE_URL}/${
                        e.PortoImages.find((x: any) => x.is_main).image_url
                      }`}
                    />
                  ) : null}
                  <h3>{e.name}</h3>
                </div>
              </ImageCard>
            );
          })}
      </div>
    </>
  );
};

export default PortoPage;
