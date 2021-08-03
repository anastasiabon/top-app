import { TextareaProps } from "./Textarea.Props";

import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return (
        <textarea
            className={cn(className, styles.textarea)}
            placeholder='Текст отзыва'
            {...props}
        />
    );
};