import React from "react";

class Item extends React.Component {
  render() {
    const { name, isInCart, onAddToCart } = this.props;

    return (
      <li className={isInCart ? "in-cart" : ""}>
        {name}
        <button onClick={onAddToCart}>
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
