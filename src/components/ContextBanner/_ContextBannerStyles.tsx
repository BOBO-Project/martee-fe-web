import styled from "@emotion/styled"
import { color, ColorName } from "styles/colors"

interface ContextBannerProps {
    ContainerBanner?: any;
    HeadingBanner?: any;
    title?: any
    // Heading?: any;
    // ButtonWrapper?: any;
    // Button?: any;
}

const S: ContextBannerProps = {};

interface ContainerProps{
    props: any
}

// S.ContainerBanner = styled("div")<ContainerProps>(({props}) =>({
//     width: "100vw",
//     height: "500px",
//     ...props,
//     backgroundRepeat:"no-repeat",
//     backgroundSize: "100vw 500px"
// }))

// S.HeadiWrapper = styled("div")({
//     paddingTop: "10vh",
//     paddingLeft: "15vw"
// })

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


export default S;