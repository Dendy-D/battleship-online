import React from 'react';

import classes from './Button.module.scss';

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => <div className={classes.component}>{children}</div>;

export default Button;
