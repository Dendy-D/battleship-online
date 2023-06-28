import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  route?: string;
};

const Button: React.FC<Props> = ({ children, route }) => {
  if (route) {
    return (
      <Link to={route} className={classes.component}><span>{children}</span></Link>
    );
  }
  return <div className={classes.component}>{children}</div>;
};

export default Button;
