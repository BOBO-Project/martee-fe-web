import type { FC } from "react";
import S from "./_ContextBannerStyles";
import union from "../../assets/images/union.png";
interface Props {
  title?: string;
  backgroundImg?: string;
}

const ContextBanner: FC<Props> = (props: Props) => {
  const title = props.title;
  const img = props.backgroundImg;
  return (
    <>
      <S.ContainerBanner
      style={{
        backgroundImage: `url('${img}')`,
        // width:'100%',
        // height:'100%'
      }}>
        {/* <img
          src={require(`../../assets/images/aboutus-banner.png`)}
          alt="aboutus-banner"
          width="100%"
        /> */}
        <img src={union} alt="union" />
        {/* <img src={img} alt="banner" width="100%" height="100%" /> */}
        <S.HeadingBanner>{title}</S.HeadingBanner>
      </S.ContainerBanner>
    </>
  );
};

export default ContextBanner;
