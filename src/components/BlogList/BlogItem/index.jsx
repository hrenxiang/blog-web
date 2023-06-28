import React from 'react';
import Chip from '../../Chip';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

import './styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyingImage from "../../LazyingImage";
import {addBlogParameters} from "../../../redux/action/parameterActions";

const BlogItem = ({blog}) => {

    const dispatch = useDispatch();

    const {
        author,
        author_avatar,
        cover,
        create_time,
        description,
        id,
        subcategory,
        title,
    } = blog;

    const handleLinkClick = () => {
        const {
            id,
            title,
            category,
            subcategory,
            create_time,
            cover,
            document_url
        } = blog;

        // 存储参数到Redux store
        dispatch(
            addBlogParameters({
                id,
                title,
                category,
                subcategory,
                create_time,
                cover,
                document_url
            })
        );
    };

    return (
        <div className='blogItem-wrap'>
            <div className="blogItem-cover-container">
                {/*<img src={cover} alt='cover' className='blogItem-cover' />*/}
                <div className='blogItem-cover'>
                    <LazyingImage src={cover}/>
                </div>

            </div>

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
                    <Link to={`/blog/${id}`} onClick={handleLinkClick}>➝</Link>
                </p>
            </footer>
        </div>
    );
};

export default BlogItem;
