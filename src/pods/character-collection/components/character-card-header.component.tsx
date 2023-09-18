import * as React from 'react';
import { linkRoutes } from 'core/router';
import { Link } from 'react-router-dom';

import CardHeader from '@mui/material/CardHeader/CardHeader';
import InfoIcon from '@mui/icons-material/Info';

import { viewModelCharacterOnList } from '../character-collection.vm';

interface Props {
  character: viewModelCharacterOnList;
}

export const CharacterCardHeader: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <CardHeader
      title={character.name}
      subheader={
        <Link to={linkRoutes.characterDetail(character.id.toString())}>
          <InfoIcon sx={{ margin: 1.5 }} fontSize="large" color="info" />
        </Link>
      }
    />
  );
};
