import React, {useState} from 'react';
import EmptyList from '../../components/EmptyList';
import BlogList from '../../components/BlogList';
import {blogList} from '../../assets/config/data';

import "./style.css"
import {Pagination} from "antd";

const Notes = () => {
    const [blogs] = useState(blogList);

    return (
        <div className="notes">
            {/* Blog List & Empty View */}
            {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}

            <div className="notes-pagination">
                <Pagination
                    total={0}
                    showSizeChanger={false}
                    showQuickJumper={false}
                    showLessItems
                    showTotal={(total) => `共 ${total} 条`}
                />
            </div>
        </div>
    );
};

export default Notes;
