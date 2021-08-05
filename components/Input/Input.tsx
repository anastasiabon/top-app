import { InputProps } from "./Input.Props";

import cn from 'classnames';
import styles from './Input.module.css';
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({ error, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input
                ref={ref}
                className={cn(styles.input, {
                    [styles.error]: error,
                })}
                placeholder='тест'
                {...props}
            />
            { error && <span className={styles.errorMessage}>{error.message}</span> }
        </div>
    )
});