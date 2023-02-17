import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const element = data.map((item) => {
    const { id, ...itemProps } = item; //вытягиваем из объекта item
    return <EmployeesListItem {...itemProps} key={id} />;
  });
  return <ul className="app-list list-group">{element}</ul>;
};

export default EmployeesList;
