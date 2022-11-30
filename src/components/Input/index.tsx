import React from "react";

import * as S from "./style";

type InputType = {
  placeholder: string;
  value: string;
  type: string;
  name?:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputType> = ({
  placeholder,
  value,
  type,
  name,
  onChange,
}): React.ReactElement => {
  return (
    <S.Input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};

export default Input;
