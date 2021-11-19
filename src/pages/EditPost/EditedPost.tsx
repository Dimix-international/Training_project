import React from 'react';
import {useParams} from "react-router-dom";



type PostType = {}
export const EditedPost: React.FC<PostType> = React.memo(() => {

    const {id} = useParams();

    return (
        <div>
            edit post - {id}
        </div>
    );
})

