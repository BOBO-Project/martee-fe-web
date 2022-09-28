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
        }}
      >
        <S.HeadingBanner>
          <img src={union} alt="union" />
          {title}
        </S.HeadingBanner>
      </S.ContainerBanner>
    </>
  );
};

export default ContextBanner;
