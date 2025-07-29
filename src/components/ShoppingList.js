import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  render() {
    const { items, onItemClick } = this.props;

    return (
      <ul className="ShoppingList">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            isInCart={item.isInCart}
            onAddToCart={() => onItemClick(item.id)}
          />
        ))}
      </ul>
    );
  }
}

export default ShoppingList;
