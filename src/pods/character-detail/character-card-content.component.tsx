import React from 'react';

import ListIcon from '@mui/icons-material/List';
import { Typography, CardContent, List } from '@mui/material';

import { Character } from './character.vm';

interface Props {
  character: Character;
}

export const CharacterCardContent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <CardContent>
      <Typography variant="h6" component="div">
        {character.name}
      </Typography>
      <Typography variant="subtitle2" component="div">
        Location: {character.location.name}
      </Typography>
      <Typography variant="subtitle2" component="div">
        Origin: {character.origin.name}
      </Typography>
      <Typography variant="subtitle2" component="div">
        Species: {character.species}
      </Typography>
      <Typography variant="subtitle2" component="div">
        Gender: {character.gender}
      </Typography>
      <Typography variant="subtitle2" component="div">
        Status: {character.status}
      </Typography>

      <Typography variant="subtitle2" component="div">
        <ListIcon color="success" />
        Scroll down to see more episodes
        <List
          sx={{
            overflow: 'auto',
            maxWidth: 400,
            maxHeight: 100,
            bgcolor: 'background.paper',
            position: 'relative',
          }}
        >
          {character.episode.map((e, index) => (
            <li key={character.episode[index]}>{e}</li>
          ))}
        </List>
      </Typography>
      <Typography variant="body2" color="text.secondary"></Typography>
    </CardContent>
  );
};
