import React, {useEffect, useState} from 'react';
import EmptyList from '../../components/EmptyList';
import BlogList from '../../components/BlogList';


import "./style.css"
import {Pagination} from "antd";
import {acquireDocumentData} from "../../api/document/document";

const Notes = () => {

    const [state, setState] = useState({
        documentData: [],
        pageNum: 1,
        pageSize: 12
    })

    useEffect(() => {
        acquireDocumentData(state.pageNum, state.pageSize).then((res) => {
            if (res.data) {
                setState((prevState) => ({
                    documentData: res.data,
                    pageNum: prevState.pageNum,
                    pageSize: prevState.pageSize
                }))
            }
        })
    }, [state.pageNum, state.pageSize]);

    function handlePageChange(currentPage, pageSize) {
        // 将页码发送给后端
        setState((prevState) => ({
            documentData: prevState.documentData,
            pageNum: currentPage,
            pageSize: pageSize
        }))
    }

    return (
        <div className="notes">
            {
                state.documentData && state.documentData.records && state.documentData.records.length
                    ?
                    <BlogList blogs={state.documentData.records}/>
                    :
                    <EmptyList/>
            }

            <div className="notes-pagination">
                <Pagination
                    onChange={handlePageChange}
                    total={state.documentData && state.documentData.total ? state.documentData.total : 0}
                    pageSize={12}
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
