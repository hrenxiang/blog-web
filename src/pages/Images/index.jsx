import React, {useEffect, useState} from 'react';

import "./style.scss"
import axios from "axios";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {Avatar, Button, Card} from "antd";
import Meta from "antd/es/card/Meta";

function Images() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    const [images, setImages] = useState([]);




    useEffect(() => {
        async function fetchImages() {
            return await axios.get(
                `https://api.unsplash.com/photos?page=${currentPage}&per_page=${perPage}&client_id=cNqUFkkZcby8fkXLUrm-H5ericWkMcWZ5eXeC-lRE64`
            );
        }

        fetchImages().then(response => {
            setImages((preImages) => [...preImages, ...response.data]);
        })
    }, [currentPage, perPage]);

    const acquireMore = () => {
        console.log("5")
        setCurrentPage((currentPage) => currentPage + 1);
    };

    return (
        <div className="images">

            <div className="images-body">

                <div className="images-items">

                    {images.map((image) => (
                        <div className="images-item" key={image.id}>

                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src={image.urls.raw}
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting"/>,
                                    <EditOutlined key="edit"/>,
                                    <EllipsisOutlined key="ellipsis"/>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={image.user.profile_image.small}/>}
                                    description={image.alt_description}
                                />
                            </Card>

                        </div>
                    ))}


                </div>

                <Button
                    type="primary"
                    className="images-acquire-more"
                    onClick={acquireMore}>
                    获取更多
                </Button>

            </div>
        </div>
    );
}

export default Images;