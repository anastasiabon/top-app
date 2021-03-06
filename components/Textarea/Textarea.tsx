import { TextareaProps } from "./Textarea.Props";

import cn from 'classnames';
import styles from './Textarea.module.css';
import {ForwardedRef, forwardRef} from "react";

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea
                ref={ref}
                className={cn(styles.textarea, {
                    [styles.error]: error,
                })}
                placeholder='Текст отзыва'
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});