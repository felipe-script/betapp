import React, {useEffect} from "react"

import * as S from "./style"
import { Menu, Card } from "@/components"
import {useLocalStorage} from '@/hooks/useLocalStorage'

import { Cards } from '@/mocks/bets'

const Home: React.FC = (): React.ReactElement => {
  const [name, setName] = useLocalStorage<string>("name", "");

  useEffect(() =>{
    // setName("testeee")
    // console.log(name)
  },[])

  const cleanStorage = () =>{
    localStorage.removeItem('name')
  }

  return (
    <S.Container>
      <Menu />
      <S.Title onClick={cleanStorage}>Panel</S.Title>
      <S.CardWrapper>
        <Card bets={Cards} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Home;
