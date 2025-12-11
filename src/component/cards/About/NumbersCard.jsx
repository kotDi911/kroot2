const NumbersCard = ({black, gray, desc}) => {
    return (
        <div className="flex col numbers-content w-100">
            <div className="flex">
                <h2 className="h2">
                    {black.toUpperCase()}
                    <span className="gray">{gray}</span>
                </h2>
            </div>
            <hr className="hr white w-100 mb-8"/>
            <div className="fs-14 white">{desc.toUpperCase()}</div>
        </div>
    )
}
export default NumbersCard