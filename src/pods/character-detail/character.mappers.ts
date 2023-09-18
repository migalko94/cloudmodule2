import { ApiResult } from '../common';
import { Character } from './character.vm';

export const mapCharacterFromApiToVm = (character: ApiResult): Character => ({
  ...character,
});
