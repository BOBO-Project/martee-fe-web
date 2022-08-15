import styled from "@emotion/styled";
import { color } from "styles/colors";

interface FooterProps {
  Wrapper?: any;
  Container?: any;
  Logo?: any;
}

const S: FooterProps = {};

S.Wrapper = styled("div")({
<<<<<<< HEAD
  // position: "absolute",
  // bottom: 0,
=======
>>>>>>> aboutus
  width: "100vw",
});

S.Container = styled("div")({
  background: color["primary-blue"],
});

S.Logo = styled("img")({
  width: "contain",
});

export default S;
