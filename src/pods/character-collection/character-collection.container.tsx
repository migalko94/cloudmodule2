import * as React from 'react';

import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Context } from 'core/context';

export const CharacterCollectionContainer = () => {
  const { VMListOfCharacters, loadCharacterCollection } =
    useCharacterCollection();

  const { currentPage } = React.useContext(Context);

  React.useEffect(() => {
    loadCharacterCollection();
  }, [currentPage]);

  return (
    <CharacterCollectionComponent characterCollection={VMListOfCharacters} />
  );
};
