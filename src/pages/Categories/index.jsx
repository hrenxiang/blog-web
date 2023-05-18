import React, {useEffect, useState} from 'react';
import chroma from 'chroma-js';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import {PolarArea} from 'react-chartjs-2';
import "./style.css"
import {acquireSubcategoryAndBlogNum} from "../../api/category/category";

function Categories() {

    // 随机生成温和颜色值
    function generateWarmColor() {
        const lightnessThreshold = 0.95; // 亮度阈值
        const saturationThreshold = 0.3; // 饱和度阈值
        const maxIterations = 20; // 最大迭代次数

        let color;
        let iterations = 0;

        do {
            color = chroma.random().saturate(0.3).luminance(0.6);
            iterations++;
        } while (
            (chroma(color).luminance() > lightnessThreshold ||
                chroma(color).saturate() < saturationThreshold) &&
            iterations < maxIterations
            );
        return color;
    }

    const [categories, setCategories] = useState([
        {
            subcategory: '',
            blog_count: 0
        }
    ]);

    useEffect(() => {
        acquireSubcategoryAndBlogNum().then((res) => {
            setCategories(res.data)
        })

    }, []);


    // 注册 RadialLinearScale
    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

    const data = {
        labels: categories.map(category => category.subcategory),
        datasets: [
            {
                label: '文章数量',
                data: categories.map(category => category.blog_count),
                backgroundColor: [
                    chroma(generateWarmColor()).alpha(0.5).css('rgba'),
                    chroma(generateWarmColor()).alpha(0.5).css('rgba'),
                    chroma(generateWarmColor()).alpha(0.5).css('rgba'),
                    chroma(generateWarmColor()).alpha(0.5).css('rgba'),
                    chroma(generateWarmColor()).alpha(0.5).css('rgba'),
                    chroma(generateWarmColor()).alpha(0.5).css('rgba')
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="categories">
            <div className="categories-container">
                <div className="categories-container-item">
                    <h2>文章分类</h2>
                    {
                        categories ? categories.map((category, index) => (<button className="custom-btn" style={{backgroundColor: generateWarmColor().hex()}} key={index}>{category.subcategory} <span className="custom-btn-span">{category.blog_count}</span></button>)) : ''
                    }
                </div>
                <div className="categories-container-item">
                    <h2>数量图表</h2>
                    <PolarArea data={data} className="categories-chart-polar"/>
                </div>
            </div>
        </div>
    );
}

export default Categories;
