import React from 'react';
import s from './Home.module.scss'
import {posts} from "../../data";
import {Card} from "../../components/Card";

type HomeType = {}
export const Home: React.FC<HomeType> = React.memo(() => {
    return (
        <div className={s.home}>
            <div className={s.container}>
                <div className={s.row}>
                    {
                        posts.map(p => (
                            <Card
                                key={p.id}
                                post={p}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
})

