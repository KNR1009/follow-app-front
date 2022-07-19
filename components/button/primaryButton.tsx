import React from "react";
import styled from "styled-components";

type PrimaryButtonProps = {
  onClick: () => void;
  label: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  label,
}) => {
  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #48d25b;
  font-weight: bold;
  border-radius: 24px;
  font-size: 16px;
`;
