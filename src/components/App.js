import React from "react";
import propTypes from "prop-types";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from "../base";
import firebase from "firebase/app";
import SignIn from "./Auth/SignIn";

class App extends React.Component {
  static propTypes = {
    match: propTypes.object,
  };
  state = {
    burgers: {},
    order: {},
  };
  //этот ref требуется для получения ссылки на нужный обьект внутри базы данных
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurantId); //метод чтобы получить данные из localStorage
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: "burgers",
    });
  }
  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addBurger = (burger) => {
    //1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2.Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    //3.Записать наш новый обьект бургерс в state
    this.setState({ burgers });
  };
  updateBurger = (key, updateBurger) => {
    //1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2.Обновляем нужный burger
    burgers[key] = updateBurger;
    //3.Записать наш новый обьект бургерс в state
    this.setState({ burgers });
  };
  deleteBurger = (key) => {
    //1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2.Удаляем бургер
    burgers[key] = null;
    //3.Записать наш новый обьект бургерс в state
    this.setState({ burgers });
  };
  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };
  addToOrder = (key) => {
    //1.Делаем копию объекта state
    const order = { ...this.state.order };
    //2.Добавить ключ к заказу со значением 1 либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    //3.Записать наш новый обьект order в state
    this.setState({ order });
  };
  deleteFromOrder = (key) => {
    //1.Делаем копию объекта state
    const order = { ...this.state.order };
    //2.Удаляем бургер
    delete order[key];
    //3.Записать наш новый обьект order в state
    this.setState({ order });
  };
  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };
  render() {
    return (
      <SignIn>
        <div className="burger-paradise">
          <div className="menu">
            <Header title="Very Hot Burger" />
            <ul className="burgers">
              {Object.keys(this.state.burgers).map((key) => {
                return (
                  <Burger
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.burgers[key]}
                  />
                );
              })}
            </ul>
          </div>
          <Order
            burgers={this.state.burgers}
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
          />
          <MenuAdmin
            addBurger={this.addBurger}
            loadSampleBurgers={this.loadSampleBurgers}
            burgers={this.state.burgers}
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger}
            handleLogout={this.handleLogout}
          />
        </div>
      </SignIn>
    );
  }
}
export default App;
