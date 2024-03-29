import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface HomeProps {
  Container?: any;
  HeadingWrapper?: any;
  Heading?: any;
  ButtonWrapper?: any;
  Button?: any;
  AboutContainer?: any;
  AboutHeading?: any;
  TextWrapper?: any;
  AboutText?: any;
  AboutButton?: any;
  AboutButtonWrapper?: any;
  PortoContainer?: any;
  PortoWrapper?: any;
  PortoHeading?: any;
  PortoValues?: any;
  PortoBox?: any;
  PortoValueText?: any;
  PortoValueFoot?: any;
}

const S: HomeProps = {};

interface ContainerProps {
  props: any;
}

// HOME PAGE
S.Container = styled("div")<ContainerProps>(({ props }) => ({
  width: "100%",
  minHeight: "880px",
  ...props,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

S.HeadingWrapper = styled("div")({
  paddingTop: "10vh",
  paddingLeft: "15vw",
});

interface HeadingProps {
  textColor?: ColorName;
}

S.Heading = styled("h1")<HeadingProps>(({ textColor = "white" }) => ({
  color: color[textColor],
  fontWeight: 700,
  fontSize: "56px",
  lineHeight: "61.6px",
}));

S.ButtonWrapper = styled("div")({
  display: "flex",
  gap: 10,
});

interface ButtonProps {
  ghost?: false;
}

S.Button = styled("button")<ButtonProps>(({ ghost = false }) => ({
  background: ghost ? "transparent" : color["primary-cream2"],
  padding: "20px",
  color: ghost ? color["primary-cream2"] : color.white,
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "22.4px",
  cursor: "pointer",
  border: ghost ? `2px solid ${color["primary-cream2"]}` : "none",
  borderRadius: "2px",
}));

// ABOUT US

S.AboutContainer = styled("div")({
  padding: "65px 150px",
  backgroundColor:'whitesmoke'
});

S.AboutHeading = styled("h1")({
  textAlign: "center",
  color: color["primary-blue"],
  fontWeight: 400,
  fontSize: "28px",
  lineHeight: "39.2px",
});

S.TextWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

S.AboutText = styled("p")({
  padding: "0 25px",
  maxWidth: "28%",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "25.6px",
});

S.AboutButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "51px",
});

S.AboutButton = styled("button")({
  background: color["primary-cream2"],
  color: color.white,
  padding: "18px 26px",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "22.4px",
  border: "none",
});

// PORTOFOLIO

S.PortoContainer = styled("div")<ContainerProps>(({ props }) => ({
  width: "100%",
  minHeight: "720px",
  ...props,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

S.PortoWrapper = styled("div")({
  textAlign: "center",
});

S.PortoHeading = styled("h1")({
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "28px",
  color: color["primary-cream2"],
});

S.PortoBox = styled("div")({
  maxWidth: "288px",
  maxHeight: "200px",
});

S.PortoValues = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: color["primary-blue"],
  maxWidth: "288px",
  maxHeight: "200px",
  padding: "0 20px",
});

S.PortoValueText = styled("p")({
  textAlign: "center",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19.6px",
  color: color.white,
});

S.PortoValueFoot = styled("p")({
  textAlign: "center",
  fontWeight: 400,
  fontSize: "11px",
  color: color["primary-cream2"],
  lineHeight: "15.4px",
});

export default S;
