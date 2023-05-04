import React, {useEffect, useState} from 'react';

import "./style.css"
import {Avatar, Button, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {downloadImage, fetchImages} from "../../api/unsplash/unsplash";
import {AiOutlineDownload, AiOutlineHeart} from "react-icons/ai";

function Images() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages(currentPage, perPage).then(response => {
            setImages((preImages) => [...preImages, ...response.data]);
        })
    }, [currentPage, perPage]);

    const acquireMore = () => {
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
                                    <span className="images-items-card-action-span">
                                        <AiOutlineHeart key="love"/>
                                        {image.likes}
                                    </span>,
                                    <AiOutlineDownload key="download"
                                                       onClick={() => downloadImage(image.urls.raw)}/>,
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
