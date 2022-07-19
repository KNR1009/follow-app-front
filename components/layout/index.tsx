import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
