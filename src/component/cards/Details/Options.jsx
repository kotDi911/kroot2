import {useState} from "react";

const Options = ({data}) => {
    const [options] = useState(data)
    return (
        <div className="flex mt-32 p-25r">
            {options.map((option, i) =>
                option.desc &&
                <div key={i} className="flex col mt-16 mr-16">
                    <p className="gray fs-14 mb-8">{option.title}</p>
                    <p className="regular white">{option.desc}</p>
                </div>
            )}
        </div>
    )
}
export default Options