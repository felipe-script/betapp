import React from "react";
import * as S from "./style";

import { Menu, Card } from "@/components";
import { Cards } from '@/mocks/bets'

const Bets: React.FC = (): React.ReactElement => {
  return (
    <S.Container>
      <Menu />
      <S.Title>My bets</S.Title>
      <S.CardWrapper>
        <Card bets={Cards} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Bets;
