import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto flex w-full max-w-[1921px] flex-col overflow-x-hidden">
      <div className="bg-sky-100 px-2.5 lg:px-4">{children}</div>
    </div>
  );
};

export default Container;
