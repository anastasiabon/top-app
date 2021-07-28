import { TopPageComponentProps } from './TopPageComponent.props';

import cn from 'classnames';

export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {
    return (
        <div>
            {products && products.length}
        </div>
    )
};
