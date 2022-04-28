import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholser={'Поиск'}
                onChange={ e => setFilter({...filter, query: e.target.value})}

            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort BY'
                options={[
                    {value: 'title', name: 'by title'},
                    {value: 'body', name: 'by description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;