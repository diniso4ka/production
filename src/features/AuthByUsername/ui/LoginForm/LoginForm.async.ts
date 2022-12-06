import React, { FC } from 'react';
import { LoginFromProps } from './LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFromProps>>(() => import('./LoginForm'));
