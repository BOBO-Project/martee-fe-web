import { FC, useEffect } from "react";
import ImageCard from "components/ImageCard";
import photo from "../../assets/images/exPorto.png";
import S from "./_PortoPageStyle";
import ContextBanner from "components/ContextBanner";
import portoBanner from "../../assets/images/portoBanner.png";
import useAxios from "hooks/useAxios";
import titlePorto from "assets/images/textPorto.png";
import { color } from "styles/colors";
import { PORTO_HOME_URL } from "url/api-url";

const PortoPage: FC = () => {
  const { response, loading, error } = useAxios(PORTO_HOME_URL);

  const dataPorto = response?.data || null;

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
      {/* {dataPorto? (dataPorto.map((e: any) => {
        return (
          <ImageCard>
            <div>
              {
                e.PortoImages.map((i:any) => {
                    if(i.isMain === true){
                      return (
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
                          src={i.image_url}
                        />
                      )
                    }
                })
              }
              <h3>{e.name}</h3>
            </div>
          </ImageCard>
        );
      })
      ):null} */}
    </>
  );
};

export default PortoPage;
