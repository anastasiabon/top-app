import { PProps } from "./P.Props";

import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ size = 'medium', children, className, ...props }: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, styles[size])} {...props}>
            {children}
        </p>
    )
};
