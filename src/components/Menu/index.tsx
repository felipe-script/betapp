import React from "react";

import * as S from "./style";

import { useAuth } from '@/ContextApi/Auth';


export const Menu: React.FC = (): React.ReactElement => {
  const {logout} = useAuth();

  return (
    <S.Header>
    <S.Menu>
      <S.MenuItem>
        <S.MenuLink to={"/home"}>Panel</S.MenuLink>
        <S.DividerMenu />
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to={"/bets"}>My Bets</S.MenuLink>
      </S.MenuItem>
      <S.LogoutItem onClick={logout}>Logout</S.LogoutItem>
    </S.Menu>
  </S.Header>
  );
};

export default Menu;