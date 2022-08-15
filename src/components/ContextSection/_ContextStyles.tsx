import styled from "@emotion/styled";
import { color } from 'styles/colors'

interface ContextSectionProps {
ContainerText?: any;
TextWrapper?: any;
Reference?:any;
}

const S: ContextSectionProps = {}

S.ContainerText = styled("div")({
    backgroundColor: color['primary-black'],
    width: "100vw",  
    height: "250px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: "34px"
  })
  
  S.TextWrapper = styled("div")({
    color: color['primary-white'],
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "-0.01em",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  })

  S.Reference = styled('a')({
    backgroundColor: color['primary-cream2'],
    borderRadius: "2px",
    width: "600px",
    height: "48px",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    textAlign: "center",
    letterSpacing: "-0.045em",
    textDecoration: "none",
    color: "inherit"
  })

  export default S