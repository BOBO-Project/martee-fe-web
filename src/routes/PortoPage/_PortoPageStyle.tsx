import styled from "@emotion/styled";
import { color } from "styles/colors";

interface PortoProps {
  Container?: any;
  Wrapper?: any;
  Image?: any;
  Title?: any;
  Button?: any;
}

const S: PortoProps = {};

S.Title = styled("h1")({
  color: "#BC9061",
  textAlign: "center",
  margin: "5%",
  fontWeight: "bolder",
});

S.Button = styled("button")(({ category }: { category: any }) => ({
  width: "250px",
  borderStyle: "solid",
  borderWidth: "2px",
  height: "60px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "20px",
  margin: "4px 2px",
  borderRadius: "8px",
  backgroundColor: "white",
  color: category ? color["primary-white"] : color["primary-cream2"],
  borderColor: color["primary-cream2"],
  background: category ? color["primary-cream2"] : "",
  cursor: "pointer",
}));

export default S;
