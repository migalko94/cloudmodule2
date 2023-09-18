import React from 'react';

import { Pagination } from '@mui/material';

import { ApiInfo } from 'pods/common';

interface Props {
  info: ApiInfo;
  currentPage: number;
  paginate: (event: React.ChangeEvent, value: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { info, currentPage, paginate } = props;

  return (
    <Pagination
      sx={{
        margin: 2,
      }}
      count={Math.ceil(info.count / info.pages)}
      shape="rounded"
      size="large"
      color="primary"
      page={currentPage}
      onChange={paginate}
    />
  );
};
