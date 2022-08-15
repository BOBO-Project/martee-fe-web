import styled from "@emotion/styled";
import { color } from "styles/colors";

interface AboutPageProps {
  ContainerBanner?: any;
  HeadingBanner?: any;
  Container?: any;
  Heading?: any;
  Text?: any;
  Heading3?: any;
  ContainerPict?: any;
  Wrapper?: any;
  ContainerVideo?: any;
}

const S: AboutPageProps = {};

S.ContainerBanner = styled("div")({
  position: "relative"
})

S.HeadingBanner = styled("h1")({
  position: "absolute",
  top: "40%",
  width: "100%",
  textAlign: "center",
  color: color['primary-white'],
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "56px",
  lineHeight: "100%",
  letterSpacing: "-0.015em",
  margin: "auto"
})

S.Container = styled("div")({
  alignItems: "flex-start",
  flexDirection: "column",
  width: "100%",
  maxWidth: "650px",
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  marginTop: "64px"
});

S.Heading = styled("h1")({
  width: "686px",
  height: "39px",
  fontWeight: "700",
  fontSize: "28px",
  lineHeight: "140%",
});

S.Text = styled("p")({
  fontFamily: "Work Sans",
  color: color["primary-cream"],
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "14px",
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

S.ContainerPict = styled("div")({
  width: "100%",
  maxWidth: "650px",
  display: "flex",
  marginLeft: "30%",
  justifyContent: "center",
  padding: "40px",
  marginTop: "100px"
});

S.Wrapper = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "30px",
  maxWidth: "70%"
})

S.ContainerVideo = styled("div")({
  display: "block",
  alignItems: "center",
  textAlign: "center",
  marginTop: "128px"
})



export default S;
