import {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Images = ({getImages, name}) => {
    const [images] = useState(getImages)
    const slice = name.indexOf("-");
    const alt = name.slice(0, slice) + "details image"
    const [style, setStyle] = useState({filter: "blur(.2rem)"})

    return (
        <div className="img-cont flex col mt-32 p-25r">
            {
                images.map((img, i) =>
                    <div className="w-100 h-100 images-cont" style={style} key={i}>
                        <LazyLoadImage width="100%"
                                       heihg="100%"
                                       className="img img__main"
                                       src={img.img}
                                       alt={alt}
                                       placeholderSrc={img.poster}
                                       onLoad={() => setStyle({filter: "none"})}
                        />
                    </div>
                )
            }
        </div>
    )
}
export default Images