import styled from "@emotion/styled";
import { color } from "styles/colors";

interface CopyrightsProps {
  Container?: any;
  Text?: any;
}

const S: CopyrightsProps = {};

S.Container = styled("div")({
  background: color["primary-cream"],
  height: "20px",
});

S.Text = styled("p")({
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16.8px",
  color: color["primary-blue"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default S;
