import { FooterProps } from "./Footer.Props";
import { format } from 'date-fns';

import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.wrapper)} {...props}>
            <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
            <span>Пользовательское соглашение</span>
            <span>Политика конфиденциальности</span>
        </footer>
    );
};
