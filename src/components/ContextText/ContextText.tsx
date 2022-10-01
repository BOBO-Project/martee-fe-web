import { FC, ReactNode } from "react";
import S from "./_ContextTextStyle";

interface Props {
  title?: string;
  heading1?: string;
  text?: string;
  info?: boolean;
  position?: string;
  title_text?: string;
  children?: ReactNode;
  image?: string;
  button?: string;
  // img:any,
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
          <S.Container>
            <img
              src={props.image}
              alt="service-img"
              style={{
                width: "80%",
              }}
            />
          </S.Container>
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
          <S.Container>
            <img
              src={props.image}
              alt="service-img"
              style={{
                width: "80%",
              }}
            />
          </S.Container>
        </>
      )}
    </S.Board>
  );
};

export default ContextText;
