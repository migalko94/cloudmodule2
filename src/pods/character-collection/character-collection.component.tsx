import * as React from 'react';

import { viewModelCharacterOnList } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: viewModelCharacterOnList[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  return (
    <>
      <div className={classes.root}>
        <ul className={classes.list}>
          {characterCollection.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
