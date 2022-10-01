import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MENU_LIST } from "menuList";
import logoMartee from '../../assets/images/logo.png'

import S from "./_NavbarStyle";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path, { replace: true });
  };

  return (
    <S.Container>
      {MENU_LIST.map(({ title, path,logo}) =>
        logo ? (
          <S.Image
            key={title}
            src={logoMartee}
            width={150}
            alt="martee"
            onClick={() => handleClick(path)}
          />
        ) : (
          <S.Text
            key={title}
            onClick={() => handleClick(path)}
            backgroundColor={path === pathname ? "primary-cream2" : null}
          >
            {title}
          </S.Text>
        )
      )}
    </S.Container>
  );
};

export default Navbar;
