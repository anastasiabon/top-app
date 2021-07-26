import { TagProps } from "./Tag.Props";

import cn from 'classnames';
import style from './tag.module.css';

export const Tag = ({
    size = 'medium',
    children,
    color = 'ghost',
    href,
    className,
    ...props
                    }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(style.tag, className, style[size], style[color])}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};