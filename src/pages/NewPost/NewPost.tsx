import React from 'react';



type PostType = {}
export const NewPost: React.FC<PostType> = React.memo(() => {


    return (
        <div>
            Создание нового поста
        </div>
    );
})

