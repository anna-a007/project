import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxID = 4;
  }

  //удаление сотрудника
  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
      };
    });
  };

  //добавление сотрудника
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxID++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  //выделение цветом сотрудника
  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  //появление stars
  onToggleRice = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  getIncrease = (data) => data.filter(({ increase }) => increase === true);

  //фильтрация(поиск по первой букве)
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().includes(term.trim().toLowerCase());
    });
  };

  //обнавляет состояние term
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  // //фильтрация по кнопкам
  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  //обнавляет состояние filter
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { term, data, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return (
      <div className="app">
        <AppInfo
          totalEmployess={this.state.data.length}
          getIncrease={this.getIncrease(this.state.data).length}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          // data={this.searchEmp(data, term)} //передаем измененный массив
          data={visibleData} //передаем измененный массив
          // data={this.state.data}
          onDeleteItem={this.onDeleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRice={this.onToggleRice}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
