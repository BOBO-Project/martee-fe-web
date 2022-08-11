import styled from "@emotion/styled";
import { color, ColorName } from "styles/colors";

interface HomeProps {
  Container?: any;
  HeadingWrapper?: any;
  Heading?: any;
  ButtonWrapper?: any;
  Button?: any;
}

const S: HomeProps = {};

interface ContainerProps {
  props: any;
}

S.Container = styled("div")<ContainerProps>(({ props }) => ({
  width: "100vw",
  height: "720px",
  ...props,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 720px",
}));

S.HeadingWrapper = styled("div")({
  paddingTop: "10vh",
  paddingLeft: "15vw",
});

interface HeadingProps {
  textColor?: ColorName;
}

S.Heading = styled("h1")<HeadingProps>(({ textColor = "white" }) => ({
  color: color[textColor],
  fontWeight: 700,
  fontSize: "56px",
  lineHeight: "61.6px",
}));

S.ButtonWrapper = styled("div")({
  display: "flex",
  gap: 10,
});

interface ButtonProps {
  ghost?: false;
}

S.Button = styled("button")<ButtonProps>(({ ghost = false }) => ({
  background: ghost ? "transparent" : color["primary-cream2"],
  padding: "20px",
  color: ghost ? color["primary-cream2"] : color.white,
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "22.4px",
  cursor: "pointer",
  border: ghost ? `2px solid ${color["primary-cream2"]}` : "none",
  borderRadius: "2px",
}));

export default S;
