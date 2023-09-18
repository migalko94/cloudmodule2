import React from 'react';

import { Avatar, Card } from '@mui/material';

import { Character } from './character.vm';
import { CharacterCardContent } from './character-card-content.component';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <Avatar
        sx={{
          height: 300,
          width: 300,
        }}
        src={character.image}
        alt={character.name}
      />
      <CharacterCardContent character={character} />
    </Card>
  );
};
