import type { FC } from "react";
import S from "./_ContextBannerStyles";
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
          <img src={title} alt="hero" width={293} />
        </S.HeadingBanner>
      </S.ContainerBanner>
    </>
  );
};

export default ContextBanner;
