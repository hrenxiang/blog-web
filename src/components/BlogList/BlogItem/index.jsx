import React from 'react';
import Chip from '../../Chip';
import {Link} from "react-router-dom";

import './styles.css';

const BlogItem = ({blog}) => {

    const {
        author,
        author_avatar,
        category,
        cover,
        create_time,
        description,
        id,
        subcategory,
        title,
        document_url
    } = blog;

    return (
        <div className='blogItem-wrap'>
            <img className='blogItem-cover' src={cover} alt='cover'/>
            <Chip label={subcategory}/>
            <h4>{title}</h4>
            <p className='blogItem-desc'>{description}</p>
            <footer>
                <div className='blogItem-author'>
                    <img src={author_avatar} alt='avatar'/>
                    <div>
                        <h6>{author}</h6>
                        <p>{create_time}</p>
                    </div>
                </div>
                <p className='blogItem-link'>
                    <Link to={'/blog/' + id + '?title=' + title + '&category=' + category+ '&subcategory=' + subcategory + '&create_time=' + create_time + '&cover=' + cover + '&document_url=' + document_url}>➝</Link>
                </p>
            </footer>
        </div>
    );
};

export default BlogItem;
