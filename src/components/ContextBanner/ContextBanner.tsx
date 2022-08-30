import type { FC } from "react";
import S from "./_ContextBannerStyles";

interface Props {
    title: string
    backgroundImg: string
}

const ContextBanner: FC<Props> = (props : Props) => {
    const title = props.title
    const test = props.backgroundImg
  return (
    <>
      <S.ContainerBanner>
        <img
          src={require("../../assets/images/service-banner.png")}
          alt="aboutus-banner"
          width="100%"
        />
        <S.HeadingBanner>
          <img
            src={require("../../assets/images/union.png")}
            alt="union"
            width="110px"
            height="110px"
          />
          {title}
        </S.HeadingBanner>
      </S.ContainerBanner>
    </>
  )
};

export default ContextBanner;
