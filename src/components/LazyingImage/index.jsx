import React from 'react';
import "./style.css";
import {LazyLoadImage} from "react-lazy-load-image-component";

const LazyingImage = ({src, ...props}) => {

    // const loadingImageOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loadingImageAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    //     style: {
    //
    //     }
    // };
    //
    // const {View: loadingImageLottie} = useLottie(loadingImageOptions);

    // const [url, setUrl] = useState(null);
    //
    // useEffect(() => {
    //     fetch(src)
    //         .then(res => res.blob())
    //         .then(blob => {
    //             const FR = new FileReader();
    //             FR.onload = function () {
    //                 setUrl(this.result)
    //             }
    //             FR.readAsDataURL(blob)
    //         })
    //
    // });

    return (
        <div className="lazying_image">
            {/*{*/}
            {/*    url ? <img alt={props.alt || "Image"} {...{src: url, ...props}}/> : <div className="lazying_image_lottie">{loadingImageLottie}</div>*/}
            {/*}*/}
            <LazyLoadImage
                src={src}
                style={{width: "100%", height: "100%"}}
                alt="Image"
                effect="blur"
            />
        </div>
    );
};

export default LazyingImage;