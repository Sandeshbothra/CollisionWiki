const DetailComponent = (props) => {
    const titleText = (text) => {
        return text.split('_').map((t) => {
            return t[0].toUpperCase() + t.slice(1).toLowerCase();
        }).join(' ');
    }

    return(
        <div className="row">
            {Object.keys(props.data).map((key) => {
                return typeof(props.data[key]) !== 'object' &&
                <div className="col-lg-6 col-sm-12 col-md-6" key={key}>
                    <strong>{titleText(key)}:</strong>
                    <p>{props.data[key]}</p>
                </div>
            })}
        </div>
    )
}

export default DetailComponent;