import * as React from 'react';

import Card from '@mui/material/Card';

import { viewModelCharacterOnList } from '../character-collection.vm';
import { CharacterCardHeader } from './character-card-header.component';
import { CharacterCardContentComponent } from './character-card-content.component';

interface Props {
  character: viewModelCharacterOnList;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card sx={{ width: 350 }}>
      <CharacterCardHeader character={character} />
      <CharacterCardContentComponent character={character} />
    </Card>
  );
};
