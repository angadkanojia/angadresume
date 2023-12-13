import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerFluid = ({ children }: Props) => {
  return <div className="w-full">{children}</div>;
};

export default ContainerFluid;
