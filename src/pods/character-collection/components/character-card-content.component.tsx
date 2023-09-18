import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { viewModelCharacterOnList } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: viewModelCharacterOnList;
}

export const CharacterCardContentComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { character } = props;

  return (
    <CardContent>
      <div className={classes.content}>
        <CardMedia
          image={character.image}
          title={character.name}
          style={{ height: 150, width: 150 }}
        />
      </div>
    </CardContent>
  );
};
