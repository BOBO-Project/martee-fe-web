import type { FC } from "react";

import { MENU_LIST } from "menuList";

import S from "./_NavbarStyle";

const Navbar: FC = () => {
  return (
    <S.Container>
      {MENU_LIST.map(({ title, path, logo }) =>
        logo ? (
          <img src={logo} width={180} alt="martee" />
        ) : (
          <S.Text>{title}</S.Text>
        )
      )}
    </S.Container>
  );
};

export default Navbar;
