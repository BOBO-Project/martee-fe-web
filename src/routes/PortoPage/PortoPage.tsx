import type { FC } from "react";
import ImageCard from "components/ImageCard";
import photo from "../../assets/images/exPorto.png";
import S from "./_PortoPageStyle";
import ContextBanner from "components/ContextBanner";
import portoBanner from "../../assets/images/portoBanner.png"

const PortoPage: FC = () => {
  return (
    <>
    <ContextBanner backgroundImg={portoBanner} title="PORTOFOLIO"/>
    <S.Title>PORTOFOLIO</S.Title>
      <ImageCard>
        <div>
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
            src={photo}
          />
          <h3>WEDDING SASHA AND RAYMON</h3>
        </div>
        <div>
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
            src={photo}
          />
          <h3>WEDDING SASHA AND RAYMON</h3>
        </div>
        <div>
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
            src={photo}
          />
          <h3>WEDDING SASHA AND RAYMON</h3>
        </div>
        <div>
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
            src={photo}
          />
          <h3>WEDDING SASHA AND RAYMON</h3>
        </div>
      </ImageCard>
    </>
  );
};

export default PortoPage;
