import React from 'react'
import Post from './Post';
import dummy from '../db/data.json';

function List() {
    const data = dummy.blog;

    console.log(data);

    return (
        <>
            {
            data.map(data => (
                <div key={data.id}>
                    <Post data={data} />
                </div>
            ))
            }
      </>
    )
}

export default List
