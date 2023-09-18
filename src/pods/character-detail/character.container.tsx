import React from 'react';

import { useParams } from 'react-router-dom';

import { getCharacter } from './api';

import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';
import { Character, createDefaulCharacter } from './character.vm';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createDefaulCharacter()
  );

  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await getCharacter(Number(id));

    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} />;
};
