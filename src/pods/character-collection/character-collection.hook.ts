import * as React from 'react';

import { mapToCollection } from 'common/mappers';
import { Context } from 'core/context';
import {
  viewModelCharacterOnList,
  getCharacterCollection,
  mapFromApiToVm,
} from '../../pods/character-collection';

export const useCharacterCollection = () => {
  const [VMListOfCharacters, setVMListOfCharacters] = React.useState<
    viewModelCharacterOnList[]
  >([]);

  const { currentPage } = React.useContext(Context);

  const loadCharacterCollection = () => {
    getCharacterCollection(currentPage).then((result) =>
      setVMListOfCharacters(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { VMListOfCharacters, loadCharacterCollection };
};
