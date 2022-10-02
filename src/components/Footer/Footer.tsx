import type { FC } from "react";
import Copyrights from "components/Copyrights";
import S from "./_FooterStyles";
import logo from "assets/images/logo.png";
import facebook from "assets/images/social-facebook.png";
import instagram from "assets/images/social-instagram.png";
import twitter from "assets/images/social-twitter.png";
import linkedin from "assets/images/social-linkedin.png";
import { MENU_LIST } from "menuList";
import { color } from "styles/colors";

const Footer: FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <div
            style={{
              borderRight: `1px solid ${color["primary-cream2"]}`,
              padding: "0 20px",
            }}
          >
            <S.Logo src={logo} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: `1px solid ${color["primary-cream2"]}`,
              padding: "0 40px",
            }}
          >
            <S.Heading>Navigation</S.Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 15,
              }}
            >
              {MENU_LIST.map(
                (el) =>
                  el.title.length > 0 && (
                    <S.Text key={el.path}>{el.title}</S.Text>
                  )
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: `1px solid ${color["primary-cream2"]}`,
              padding: "0 40px",
            }}
          >
            <S.Heading>Alamat</S.Heading>
            <p
              style={{
                maxWidth: "302px",
                fontSize: "12px",
                fontWeight: 400,
                color: color["white"],
              }}
            >
              Jl. Bangka Raya No.48, RT.12/RW.3, Kuningan, Pela Mampang, Kec.
              Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12720
            </p>
            <S.Heading>Social Media</S.Heading>
            <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
              <img width={40} src={facebook} alt="social-facebook" />
              <img width={40} src={instagram} alt="social-instagram" />
              <img width={40} src={twitter} alt="social-twitter" />
              <img width={40} src={linkedin} alt="social-linkedin" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 40px",
            }}
          >
            <S.Heading>Lainnya dari kami</S.Heading>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <S.Text>Bridestory</S.Text>
              <S.Text>Weddingku</S.Text>
            </div>
            <button
              style={{
                padding: "18px 26px",
                background: color["primary-cream2"],
                color: color["white"],
                border: "none",
                fontSize: "16px",
                lineHeight: "140%",
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              HUBUNGI KAMI {">"}
            </button>
          </div>
        </div>

        <Copyrights />
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
