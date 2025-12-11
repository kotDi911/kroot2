const Title = ({title}) => {
    const slice = title.indexOf("-");
    return (
        <h1 className="h1">
            {slice < 0 ? title : (
                <>
                    {title.slice(0, slice)}
                    <span className="gray">{title.slice(slice)}</span>
                </>
            )}
        </h1>
    )
}
export default Title