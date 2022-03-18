import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";

class App extends React.Component {
  state = {
    burgers:{},
    order:{}
  }
  addBurger = burger => {
        //1.Делаем копию объекта state
        const burgers = {...this.state.burgers};
        //2.Добавить новый бургер в переменную burgers
        burgers[`burger${Date.now()}`]=burger;
        //3.Записать наш новый обьект бургерс в state
        this.setState({burgers})
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
