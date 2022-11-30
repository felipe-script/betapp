import React, { useState } from "react";
import {useLocalStorage} from '@/hooks/useLocalStorage'
import {
  useNavigate,
} from 'react-router-dom';

import * as S from "./style";

import { useAuth } from '@/ContextApi/Auth';

import { Input, Button } from "@/components";

const Login: React.FC = (): React.ReactElement => {
  const {login} = useAuth();

  const [form, setForm] = useState({
    error: false,
    email: "",
    pass: "",
  });

  const handleForm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.email === 'admin@admin.com' && form.pass === 'admin'){
      return login()
    }
    setForm({...form, error: true})
  };

  return (
    <>
      <S.Container>
        <S.ColumnLeft>
          <S.ContainerDescription>
            <S.ContentDescription>
              <S.BrandTitle>Place your bet!</S.BrandTitle>
              <S.Description>
                How about placing a bet on the world cup right now?
              </S.Description>
            </S.ContentDescription>
          </S.ContainerDescription>
        </S.ColumnLeft>
        <S.ColumnRight>
          <S.ContentColumnRight>
            <S.CenteredText>
              <S.BrandTitleRight>Welcome :)</S.BrandTitleRight>
            </S.CenteredText>
            <S.FormContainer>
              <S.Form onSubmit={(e) => handleLogin(e)}>
                <S.WrapperEmail>
                  <Input
                    placeholder="email"
                    type="email"
                    value={form.email}
                    onChange={handleForm}
                    name="email"
                  />
                </S.WrapperEmail>
                <S.WrapperPassword>
                  <Input
                    placeholder="password"
                    type="password"
                    value={form.pass}
                    onChange={handleForm}
                    name="pass"
                  />
                </S.WrapperPassword>
                <S.WrapperButton>
                  <Button text="Sign in" />
                </S.WrapperButton>
              </S.Form>
              {form.error && <S.Alert>Password or Email invalid</S.Alert>}
            </S.FormContainer>
          </S.ContentColumnRight>
        </S.ColumnRight>
      </S.Container>
    </>
  );
};

export default Login;
