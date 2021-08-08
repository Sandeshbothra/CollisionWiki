import './card.css';
const Card = (props) => {
    return (
        <div className="card-main">
            <div className="content">{props.children}</div>
            <div className="title">{props.title}</div>
        </div>
    )
}

export default Card;