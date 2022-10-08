import styled from "@emotion/styled";
import { color } from "styles/colors";


interface ImageCardProps{
    Wrapper?:any
    Image?:any
}

const S: ImageCardProps = {}


S.Wrapper = styled("div")({
    width: "100vw",
    display:'flex',
    justifyContent:'space-between'
  });


export default S