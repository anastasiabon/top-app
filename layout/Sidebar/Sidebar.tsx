import { LayoutProps } from "./Layout.Props";

import cn from 'classnames';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
};
