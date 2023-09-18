import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import * as classes from './app.layout.styles';

import { linkRoutes } from 'core/router';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to={linkRoutes.characterCollection}>
            <IconButton color="default" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <span> Rick and Morty API Exercise</span>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
