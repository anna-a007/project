import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => {
      return {
        increase: !increase,
      };
    });
  };

  onRice = () => {
    this.setState(({ rise }) => {
      return {
        rise: !rise,
      };
    });
  };

  render() {
    const { name, salary, onDeleteItem, id } = this.props;
    const { increase, rise } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span onClick={this.onRice} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onIncrease}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            onClick={onDeleteItem}
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
