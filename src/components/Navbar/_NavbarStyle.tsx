import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface NavbarProps {
  Container?: any;
  Text?: any;
  Image?: any;
}

const S: NavbarProps = {};

S.Container = styled("div")({
  padding: "20px 40px 20px 40px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  alignContent: "center",
  minHeight: "100px",
});

interface TextProps {
  backgroundColor: ColorName;
}

S.Text = styled("text")<TextProps>(({ backgroundColor }) => ({
  color:
    backgroundColor === null ? color["primary-blue"] : color["primary-white"],
  fontWeight: 500,
  fontSize: "22px",
  lineHeight: "30px",
  background: color[backgroundColor],
  borderTopLeftRadius: "200px",
  borderTopRightRadius: "200px",
  borderBottomRightRadius: "200px",
  padding: "10px 15px",
  minWidth: "50px",
  textAlign: "center",
  cursor: "pointer",
}));

S.Image = styled("img")({
  background: color["primary-blue"],
  borderTopLeftRadius: "200px",
  borderTopRightRadius: "200px",
  borderBottomRightRadius: "200px",
  padding: "0 20px",
  cursor: "pointer",
});

export default S;
