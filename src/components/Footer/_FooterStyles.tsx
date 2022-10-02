import styled from "@emotion/styled";
import { color } from "styles/colors";

interface FooterProps {
  Wrapper?: any;
  Container?: any;
  Logo?: any;
  Heading?: any;
  Text?: any;
}

const S: FooterProps = {};

S.Wrapper = styled("div")({
  width: "100vw",
});

S.Container = styled("div")({
  background: color["primary-blue"],
  borderTop: `1px solid ${color["primary-cream2"]}`,
});

S.Logo = styled("img")({
  width: "contain",
});

S.Heading = styled("p")({
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 700,
  color: color["primary-cream2"],
});

S.Text = styled("text")({
  fontSize: "12px",
  lineHeight: "16.8px",
  fontWeight: 400,
  color: color["white"],
  textDecoration: "underline",
  paddingBottom: "19px",
  cursor: "pointer",
});

export default S;
