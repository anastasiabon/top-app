import { SearchInputProps } from './SearchInput.Props';
import cn from 'classnames';
import styles from './SearchInput.module.css';
import SearchIcon from './search.svg';

import { useRouter } from "next/router";
import {ChangeEvent, useState} from "react";

interface InputValue {
    inputValue: string;
}

export const SearchInput = ({ value = '' }: SearchInputProps): JSX.Element => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState<InputValue>(value);

    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleSearch = (): void => {
        if (inputValue) {
            router.push('/search',`/search/${inputValue}`);
        }
    };

    return (
        <div className={styles.search}>
            <input
                type='search'
                placeholder='Поиск...'
                className={styles.searchInput}
                value={inputValue}
                onChange={(e) => handleInput(e)}
            />
            <button
                className={styles.searchButton}
                onClick={() => handleSearch()}
            >
                <SearchIcon />
            </button>
        </div>
    );
};

