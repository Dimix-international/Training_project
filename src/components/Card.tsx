import React from 'react';
import s from './Card.module.scss'
import {PostType} from "../data";
import {Link} from "react-router-dom";


type CardType={
    post: PostType
}
export const Card: React.FC<CardType> = React.memo(({post}) => {
    return (
        <div className={s.card}>
            <Link className={s.link} to={`/post/${post.id}`}>
                <h2 className={s.title}>{post.title}</h2>
                <div className={s.image}>
                    <img src={post.img} alt=""/>
                </div>
                <p className={s.desc}>{post.desc}</p>
                <button className={s.btn}>Read more</button>
            </Link>
        </div>
    );
})