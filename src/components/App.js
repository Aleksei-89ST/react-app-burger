import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";

class App extends React.Component {
  state = {
    burgers:{},
    order:{}
  }
  addBurger = (burger) => {
    console.log('addburger', burger)
  }
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
        </div>
        <Order />
        <MenuAdmin addBurger={this.addBurger}/>
      </div>
    );
  }
}
export default App;
