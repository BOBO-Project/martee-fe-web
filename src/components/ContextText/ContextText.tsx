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
  // img:any,
}

const ContextText: FC<Props> = (props: Props) => {
  let pose = true;
  let list = false;
  if (props.position === "left") {
    pose = false;
  }
  if (props.info) {
    list = true;
  }
  return (
    <S.Board>
      {pose ? (
        <>
          <S.Container>
            <img src={props.image} alt="service-img" 
            style={{
              width:'80%'
            }}/>
          </S.Container>
          <S.Container
            style={{
              Height: "5%",
            }}
          >
            <S.Heading2>{props.title}</S.Heading2>
            <S.Text>WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI</S.Text>
            {props.children}
            <S.Text1>{props.text}</S.Text1>
            <S.Text1>{props.title_text}</S.Text1>
            {list ? (
              <>
                <S.li>Moodboard wedding concepts</S.li>
                <S.li>Venue</S.li>
                <S.li>Decoration</S.li>
                <S.li>Catering</S.li>
                <S.li>KUA & Penghulu</S.li>
                <S.li>Saksi Nikah</S.li>
                <S.li>Souvenir</S.li>
                <S.li>Kartu Undangan</S.li>
                <S.li>Baju calon pengantin</S.li>
                <S.li>Seragam orang tua calon pengantin</S.li>
                <S.li>Qori & Tilawah</S.li>
                <S.li>Tim/Sanggar adat</S.li>
                <S.li>Make up artist calon pengantin</S.li>
                <S.li>
                  Make up artist ibu & saudara kandung calon pengantin
                </S.li>
                <S.li>Sound systems</S.li>
                <S.li>MC</S.li>
                <S.li>Music band</S.li>
                <S.li>Tarian adat pembuka</S.li>
                <S.li>Panitia keluarga</S.li>
                <S.li>Penjaga buku tamu</S.li>
                <S.li>Many more...</S.li>
              </>
            ) : (
              <></>
            )}
          </S.Container>
        </>
      ) : (
        <>
          <S.Container>
            <S.Heading2>{props.title}</S.Heading2>
            <S.Text>WEDDING PLANNER & ORGANIZER JABODETABEK, BANDUNG, BALI</S.Text>
            <p>{props.text}</p>
          </S.Container>
          <S.Container>
            {/* <img src={props.image} alt="service-img" /> */}
          </S.Container>
        </>
      )}
    </S.Board>
  );
};

export default ContextText;
