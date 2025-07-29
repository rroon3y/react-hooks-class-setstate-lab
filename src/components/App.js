import React from "react";
import ShoppingList from "./ShoppingList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, name: "Milk", isInCart: false },
        { id: 2, name: "Bread", isInCart: false },
        { id: 3, name: "Eggs", isInCart: false },
      ],
      showOnlyInCart: false,
    };
  }

  handleAddToCart = (itemId) => {
    const updatedItems = this.state.items.map((item) =>
      item.id === itemId ? { ...item, isInCart: !item.isInCart } : item
    );
    this.setState({ items: updatedItems });
  };

  toggleFilter = () => {
    this.setState({ showOnlyInCart: !this.state.showOnlyInCart });
  };

  render() {
    const itemsToDisplay = this.state.showOnlyInCart
      ? this.state.items.filter((item) => item.isInCart)
      : this.state.items;

    return (
      <div className="App">
        <ShoppingList items={itemsToDisplay} onItemClick={this.handleAddToCart} />
        <button onClick={this.toggleFilter}>
          {this.state.showOnlyInCart ? "Show All" : "Only Show In Cart"}
        </button>
      </div>
    );
  }
}

export default App;
