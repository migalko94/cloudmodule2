import Axios from 'axios';

import { ApiCharacterEndPointModel, ApiInfo, ApiResult } from '../../common';

const CHARACTER_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (
  page: number
): Promise<ApiResult[]> => {
  const { data } = await Axios.get<ApiCharacterEndPointModel>(
    `${CHARACTER_URL}?page=${page}`
  );

  return data.results;
};

export const getInfo = async (): Promise<ApiInfo> => {
  const { data } = await Axios.get<ApiCharacterEndPointModel>(CHARACTER_URL);

  return data.info;
};
