import React from 'react';

import { Context } from 'core/context';
import { getInfo } from '../api';
import { ApiInfo } from 'pods/common';

import { createDefaulInfo } from './defaultModel';
import { PaginationComponent } from './pagination.component';

export const PaginationContainer: React.FC = () => {
  const { currentPage, setCurrentPage } = React.useContext(Context);

  const [info, setInfo] = React.useState<ApiInfo>(createDefaulInfo());

  React.useEffect(() => {
    getInfo().then((result) => setInfo(result));
  }, []);

  const paginate = (event: React.ChangeEvent, pageNumber: number) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationComponent
      info={info}
      currentPage={currentPage}
      paginate={paginate}
    />
  );
};
