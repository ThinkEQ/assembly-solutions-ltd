import React from 'react'

const NewsCard = ({title, body, date}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{date}</p>
        </div>
        )
}

export default NewsCard