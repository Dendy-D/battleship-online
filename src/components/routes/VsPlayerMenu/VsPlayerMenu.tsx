import React from 'react';

import Button from '../../ui/Button';
import classes from './VsPlayerMenu.module.scss';

const VsPlayerMenu: React.FC = () => (
  <div className={classes.component}>
    <Button>create a room</Button>
    <Button>join the room</Button>
    <Button>vs random</Button>
  </div>
);

export default VsPlayerMenu;
