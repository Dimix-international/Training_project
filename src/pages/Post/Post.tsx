import React from 'react';
import s from './Post.module.scss'
import {posts} from "../../data";
import {Link, useLocation, useParams} from 'react-router-dom';


type PostType = {}
export const Post: React.FC<PostType> = React.memo(() => {

    //используем useLocation
    /*const location = useLocation();
    const path = location.pathname.split('/')[2];
*/
    //используем useParams
    console.log(useParams());
    const {id} = useParams();

    const post = posts.find(p => p.id.toString() === id);

    return (
        <div className={s.post}>
            <div className={s.container}>
                <h1 className={s.title}>{post && post.title}</h1>
                <div className={s.image}>
                    <img src={post && post.img} alt=""/>
                </div>
                <p className={s.postDesc}>{post && post.desc}</p>
                <p className={s.longDesc}>{post && post.londDesc}</p>
                <Link className={s.link} to={`/post/${id}/edit`}>
                    <button className={s.btn}>Edit post</button>
                </Link>
            </div>
        </div>
    );
})

