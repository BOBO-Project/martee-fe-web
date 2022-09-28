import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface ServiceProps {
  Container?: any;
  HeadiWrapper?: any;
  Heading?: any;
  Text?: any;
  Heading3?: any;
  ButtonWrapper?: any;
  Heading2?: any;
  Button?: any;
  Board?: any
  Li?:any
}

const S: ServiceProps = {};

interface ContainerProps {
  props: any;
}

S.Container = styled("div")<ContainerProps>(({ props }) => ({
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    maxWidth: "650px",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    marginTop: "64px"
}));

S.HeadiWrapper = styled("div")({
  paddingTop: "10vh",
  paddingLeft: "15vw",
});

S.Text = styled("p")({
  fontFamily: "Work Sans",
  color: color["primary-cream"],
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "140%",
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
  fontFamily: "Work Sans",
  color: color["primary-gray"],
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",
  lineHeight: "140%",
});

S.Board = styled('div')<ContainerProps>(({ props }) => ({
  alignItems: "flex-start",
  flexDirection: "row",
  width: "100%",
  maxWidth: "650px",
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  marginTop: "64px"
}));

S.Li = styled("li")({
  fontFamily: "Work Sans",
  fontSize:'18px',
  fontWeight: "600",

})

export default S;
