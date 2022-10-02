import { FC, ReactNode } from "react";
import S from "./_ContextTextStyle";

interface Props {
  title?: string;
  position?: string;
  children?: ReactNode;
  image?: string;
}

const ContextText: FC<Props> = (props: Props) => {
  let pose = true;
  let text = "WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI";
  if (props.position === "left") {
    pose = false;
  }

  return (
    <S.Board>
      {pose ? (
        <>
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              width: "100%",
              maxWidth: "50vw",
              minHeight: "615px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <S.Container
            style={{
              Height: "5%",
            }}
          >
            <S.Heading2>{props.title}</S.Heading2>
            <S.Text>{text}</S.Text>
            {props.children}
          </S.Container>
        </>
      ) : (
        <>
          <S.Container>
            <S.Heading2>{props.title}</S.Heading2>
            <S.Text>{text}</S.Text>
            {props.children}
          </S.Container>
            <div
              style={{
                backgroundImage: `url(${props.image})`,
                width: "100%",
                maxWidth: "50vw",
                minHeight: "615px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
        </>
      )}
    </S.Board>
  );
};

export default ContextText;
