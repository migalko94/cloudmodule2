import * as React from 'react';

import { AppLayout } from 'layouts';
import { CharacterCollectionContainer } from 'pods/character-collection';
import { PaginationContainer } from 'pods/character-collection/pagination';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <CharacterCollectionContainer />
    <PaginationContainer />
  </AppLayout>
);
