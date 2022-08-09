import styled from "@emotion/styled";
import { color } from "styles/colors";

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

S.Text = styled("text")({
  color: color["primary-blue"],
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "28px",
});

export default S;
