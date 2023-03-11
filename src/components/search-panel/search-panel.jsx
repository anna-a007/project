import { Component } from "react";
import "./search-panel.css";

// const SearchPanel = () => {
//   return (
//     <input
//       type="text"
//       className="form-control search-input"
//       placeholder="Найти сотрудника"
//     />
//   );
// };

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onUpdateSearchValue = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onUpdateSearch(value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term} //привязываем input к стейту term, чтобы был управляемый
        onChange={this.onUpdateSearchValue}
      />
    );
  }
}

export default SearchPanel;
