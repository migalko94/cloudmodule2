import { ApiInfo } from 'pods/common';

export const createDefaulInfo = (): ApiInfo => ({
  count: 10,
  pages: 10,
  next: '',
  prev: '',
});
