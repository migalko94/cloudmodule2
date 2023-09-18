import { ApiResult } from '../common';
import { viewModelCharacterOnList } from './character-collection.vm';

export const mapFromApiToVm = (
  apiResponseCharacterItem: ApiResult
): viewModelCharacterOnList => ({
  id: apiResponseCharacterItem.id,
  name: apiResponseCharacterItem.name,
  image: apiResponseCharacterItem.image,
});
