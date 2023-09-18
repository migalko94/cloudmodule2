import React from 'react';
import { Context } from './contex';

export const ContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
