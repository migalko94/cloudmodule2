import Axios from 'axios';

import { ApiResult } from '../../common';

export const getCharacter = async (id: number): Promise<ApiResult> => {
  const { data } = await Axios.get<ApiResult>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return data;
};
