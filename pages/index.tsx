import {Button, P, Tag, Rating, Htag, Input} from "../components";
import { useEffect, useState } from "react";
import  { withLayout } from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Headline</Htag>
            <Button
                appearance="primary"
                arrow="right"
            >
                Primary
            </Button>
            <Button appearance="ghost" arrow="down">Ghost</Button>
            <P size='medium'>
                Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
            </P>
            <Tag size='small' color='red'>red</Tag>
            <Tag size='small' color='green'>green</Tag>
            <Tag size='small' color='ghost'>ghost</Tag>
            <Tag size='small' color='primary'>primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    });

    return {
        props: {
            menu,
            firstCategory,
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number,
}
