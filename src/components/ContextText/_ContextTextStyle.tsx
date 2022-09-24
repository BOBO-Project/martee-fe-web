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
    Text1?: any
    Board?: any
    li?: any
  }
  
  const S: ContextProps = {};

  interface ContainerProps {
    props: any;
  }
  
  S.Container = styled("div")<ContainerProps>(({ props }) => ({
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    marginTop: "64px",
}));

S.Board = styled('div')<ContainerProps>(({ props }) => ({
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
    maxWidth: "95%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    marginTop: "64px",
    maxHeight:'50%'
  }));

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
    fontSize:'18px',
    fontWeight: "600",

  })
  export default S;
  