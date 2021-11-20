import React from 'react';
import s from './Post.module.scss'
import {posts} from "../../data";
import {Link, useLocation, useParams, useNavigate} from 'react-router-dom';


type PostType = {}
export const Post: React.FC<PostType> = React.memo(() => {

    //useNavigate - замена useHistory
    const navigate = useNavigate(); //является функцией

    //реализуем функцию "назад"
    //-1 - на одну страницу назад (-2,3 т.д)
    // можем использовать и положительные цифры - вперед
    const goBack = () => navigate(-1)

    const {id} = useParams();
    const post = posts.find(p => p.id.toString() === id);




    return (
        <div className={s.post}>
            <div className={s.container}>
                <button onClick={goBack} className={s.btn}>go back</button>
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

