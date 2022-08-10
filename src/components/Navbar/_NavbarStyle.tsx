import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface NavbarProps {
  Container?: any;
  Text?: any;
}

const S: NavbarProps = {};

S.Container = styled("div")({
  padding: "0 20px",
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
  color: color["primary-blue"],
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "28px",
  background: color[backgroundColor],
  borderRadius: "50px",
  padding: "10px 15px",
  minWidth: "50px",
  textAlign: "center",
}));

export default S;
