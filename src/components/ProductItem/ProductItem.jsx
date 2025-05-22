import "./ProductItem.css"

export default function ProductItem({ product }) {
    return (
        <div className="product">
            <h2 style={{color:"blue", fontWeight:"bold"}}>{product.name}</h2>
            <p>{product.price}$</p>

            {product.isOnSale &&
                <span className="sale-badge">¡Oferta!</span>
            }

            {product.stock <= 5 &&
                <p className="low-stock">¡Quedan pocas unidades!</p>
            }
        </div>
    )
}

function ProductItemDirect({ name, price, isOnSale, stock }) {
    return (
        <div className="product">
            <h2 className="font-red-color">{name}</h2>
            <p>{price}$</p>

            {isOnSale &&
                <span className="sale-badge">¡Oferta!</span>
            }

            {stock <= 5 &&
                <p className="low-stock">¡Quedan pocas unidades!</p>
            }
        </div>
    )
}

export {
    ProductItemDirect
}