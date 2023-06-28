import React from 'react';

import Button from '../../ui/Button';
import classes from './MainMenu.module.scss';

const MainMenu: React.FC = () => (
  <div className={classes.component}>
    <Button>vs bot</Button>
    <Button route="vs-player">vs player</Button>
  </div>
);

export default MainMenu;
