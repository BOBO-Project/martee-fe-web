import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface ContextProps {
  Container?: any;
  HeadiWrapper?: any;
  Heading?: any;
  Text?: any;
  Heading3?: any;
  ButtonWrapper?: any;
  Heading2?: any;
  Button?: any;
  Text1?: any;
  Board?: any;
  li?: any;
}

const S: ContextProps = {};

interface ContainerProps {
  props: any;
}

S.Container = styled("div")<ContainerProps>(({ props }) => ({
  width: "100%",
  maxWidth: "50vw",
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  marginTop: "48px",
  // alignItems: "flex-start",
  // flexDirection: "column",
  // width: "100%",
  // maxWidth: "100%",
  // display: "flex",
  // margin: "auto",
  // justifyContent: "center",
  // marginTop: "64px",
}));

S.Board = styled("div")<ContainerProps>(({ props }) => ({
  display: "flex",
  flexDirection: "row",
  // alignItems: "flex-start",
  // flexDirection: "row",
  // width: "100%",
  // maxWidth: "95%",
  // display: "flex",
  // margin: "auto",
  // justifyContent: "center",
  // marginTop: "64px",
  // maxHeight:'50%'
}));

S.Text = styled("p")({
  textAlign: "left",
  width: "100%",
  padding: "0 78px",
  fontSize: "14px",
  lineHeight: "19.6px",
  color: color["primary-cream2"],
  fontWeight: 400,
});

S.Heading = styled("h1")({
  width: "686px",
  height: "39px",
  fontWeight: "700",
  fontSize: "28px",
  lineHeight: "140%",
});

S.Heading3 = styled("h3")({
  fontFamily: "Work Sans",
  color: color["primary-gray"],
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "140%",
});

S.Heading2 = styled("h2")({
  textAlign: "left",
  width: "60%",
  padding: "0 78px",
  fontSize: "28px",
  lineHeight: "39.2px",
  fontWeight: 700,
  margin: 0,
});

S.Text1 = styled("p")({
  fontFamily: "Work Sans",
  color: color["black"],
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  // lineHeight: "140%",
});

S.li = styled("li")({
  fontFamily: "Work Sans",
  fontSize: "18px",
  fontWeight: "600",
});

S.ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "51px",
});

S.Button = styled("button")({
  background: color["primary-cream2"],
  color: color.white,
  padding: "18px 26px",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "22.4px",
  border: "none",
});
export default S;
