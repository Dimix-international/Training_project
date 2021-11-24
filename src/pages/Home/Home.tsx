import React from 'react';
import s from './Home.module.scss'
import {posts} from "../../data";
import {Card} from "../../components/Card";
import {useSearchParams} from 'react-router-dom';
import {CardFilter} from "../../components/CardFilter/CardFilter";


type HomeType = {}

export const Home: React.FC<HomeType> = React.memo(() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('title') || ''; //поисковый запрос, || '' -если не найдет
    // http://localhost:3000/?title

    const latest = searchParams.has('latest');

    const startsFrom = latest ? 10 : 1;
    //если установлен то получаем статьи с 10 id, если нет то все


    return (
        <div className={s.home}>
            <div className={s.container}>
                <CardFilter
                    setSearchParams={setSearchParams}
                    latest={latest}
                    postQuery={postQuery}
                />
                <div className={s.row}>
                    {
                        posts.filter(post =>
                            post.title.toLowerCase().includes(postQuery.toLowerCase())
                                && post.id >= startsFrom
                            )
                            .map(p => {
                                return <Card
                                    key={p.id}
                                    post={p}
                                />
                            })
                    }
                </div>
            </div>
        </div>
    );
})

