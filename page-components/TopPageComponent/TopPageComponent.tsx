import { TopPageComponentProps } from './TopPageComponent.props';
import {Htag, Tag, HhData, Advantages, Sort, Product} from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import {SortEnum} from "../../components/Sort/Sort.Props";

import styles from './TopPageComponent.module.css';
import {sortReducer} from "./sort.reducer";
import {useReducer} from "react";

export const TopPageComponent = ({ page, products, firstCategory, }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispathSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='green' size='medium'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => <Product key={p._id} product={p} />)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='medium'>hh.ru</Tag>}
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages advatages={page.advantages}/>
                </>

            )}
            {page.seoText && (
                <div
                    className={styles.seo}
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                />
            )}

            {page.tags && (
                <>
                    <Htag tag='h2'>Получаемые навыки</Htag>
                    {page.tags.map(tag => (
                        <Tag
                            key={tag}
                            size='small'
                            color='primary'
                            className={styles.tag}
                        >{tag}</Tag>
                    ))}
                </>
            )}
        </div>
    )
};
