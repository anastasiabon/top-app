import { AdvantagesProps } from './Advantages.Props';
import TickIcon from './tick.svg';

import cn from 'classnames';
import styles from './Advantages.module.css';


export const Advantages = ({advatages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advatages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <TickIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    )
};
