import React from 'react';
import Chip from '../../Chip';
import {useNavigate} from "react-router-dom";

import './styles.css';

const BlogItem = ({blog}) => {

    const {
        author,
        author_avatar,
        // category,
        cover,
        create_time,
        description,
        id,
        subcategory,
        title,
    } = blog;

    const navigate = useNavigate();

    function handleClick(id) {
        navigate('/blog/' + id, { state: { blog: blog } });
    }

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
                <p className='blogItem-link' onClick={() => {
                    handleClick(id)
                }}
                >
                    ➝
                </p>
            </footer>
        </div>
    );
};

export default BlogItem;
