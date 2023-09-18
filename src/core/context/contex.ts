import React from 'react';

interface ContextModel {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Context = React.createContext<ContextModel>(null);
