import styled from "@emotion/styled"
import { color, ColorName } from "styles/colors"

interface ServiceProps {
    Container?: any;
    HeadiWrapper?: any;
    Heading?: any;
    ButtonWrapper?: any;
    Button?: any;
}

const S: ServiceProps = {};

interface ContainerProps{
    props: any
}

S.Container = styled("div")<ContainerProps>(({props}) =>({
    width: "100vw",
    height: "500px",
    ...props,
    backgroundRepeat:"no-repeat",
    backgroundSize: "100vw 500px"
}))

S.HeadiWrapper = styled("div")({
    paddingTop: "10vh",
    paddingLeft: "15vw"
})



export default S;