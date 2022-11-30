import React from "react"

import * as S from "./style"

import { BetType } from '@/types'


export const Card: React.FC<{bets: BetType[]}> = ({bets}): React.ReactElement => {

  return (
    <S.CardGrid>
    {bets.map((bet, index) =>
      <S.CardItem key={index}>
        <S.Figure>
          <S.CardImage src={bet.banner} />
          <S.FigCaption>
            <S.Title>{bet.title}</S.Title>
            <S.BetInformation>
              <S.BetList>
                <S.BetItem>Cod: {bet.cod}</S.BetItem>
                <S.BetItem>Price: {bet.price}</S.BetItem>
                <S.BetItem>Bet Amount: {bet.betAmount}</S.BetItem>
              </S.BetList>
              <S.BetList>
                {bet.games.map((game) => <S.BetItem key={game}>{game}</S.BetItem>)}
              </S.BetList>
            </S.BetInformation>
          </S.FigCaption>
        </S.Figure>
      </S.CardItem>
      )}
    </S.CardGrid>
  );
};

export default Card;
