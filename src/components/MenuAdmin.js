import React from "react";
import propTypes from "prop-types";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuAdmin extends React.Component {
  static propTypes = {
    burgers: propTypes.object,
    deleteBurger: propTypes.func,
    updateBurger: propTypes.func,
    addBurger: propTypes.func,
    loadSampleBurgers: propTypes.func
  };
  render() {
    return (
      <div className="menu-admin">
        <h2>Управление Меню</h2>
        {Object.keys(this.props.burgers).map((key) => {
          return (
            <EditBurgerForm
              key={key}
              index={key}
              deleteBurger={this.props.deleteBurger}
              burger={this.props.burgers[key]}
              updateBurger={this.props.updateBurger}
            />
          );
        })}
        <AddBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSampleBurgers}>
          Загрузить Бургеры
        </button>
      </div>
    );
  }
}
export default MenuAdmin;
