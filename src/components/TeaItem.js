// A component that displays a single tea item

function TeaItem(props) {
    return (
        <div class="item-card">
            <img src={props.item.image} alt={props.item.name}></img>
            <div class="item-container">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <h3>Price: ${props.item.price}</h3>
                <button onClick={() => props.addToCart(props.item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default TeaItem;
