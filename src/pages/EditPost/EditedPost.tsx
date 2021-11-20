import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import s from './EditedPost.module.scss'


type EditedPostType = {}
export const EditedPost: React.FC<EditedPostType> = React.memo(() => {

    const {id} = useParams();

    const navigate = useNavigate(); //является функцией
    const goHome = () => navigate('/', {replace: true});
    //если не передаем {replace: true} (по умолч false - то будет движение как по истории),
    //если нужна переадресация то записываем {replace: true}
    // {replace: true, state:} state:объект, строка, потом в том месте куда перейдем
    // этот state можно прочитать

    //использовать в качестве button - плохая практика, используем Link
    // лучше использовать navigate например в useEffect после запроса, переадресация на страницу

    return (
        <div className={s.container}>
            <button className={s.btn} onClick={goHome}> go home</button>
            <div>
                edit post - {id}
            </div>
        </div>
    );
})

