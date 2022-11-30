import React from "react";

import * as S from "./style";

type ButtonType = {
    text: string,
    onClick?: () => React.MouseEventHandler<HTMLButtonElement>,
}

export const Button: React.FC<ButtonType> = ({ text, onClick }): React.ReactElement => {
  return (
    <S.Button onClick={onClick}>{text}</S.Button>
  );
};

export default Button;
