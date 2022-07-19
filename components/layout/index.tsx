import React, { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 40px;
  height: 100vh;
  background-color: #000000;
  color: #ffffff;
`;
