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
      term: "",
    };
  }

  onUpdateSearchValue = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearchValue}
      />
    );
  }
}

export default SearchPanel;
