import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDeleteItem }) => {
  const element = data.map((item) => {
    // const { id, ...itemProps } = item; //вытягиваем из объекта item
    return (
      <EmployeesListItem
        {...item}
        key={item.id}
        // onDeleteItem={() => onDeleteItem(item.id)}  // функция, отв.за удаление из массива
        onDeleteItem={onDeleteItem}
      />
    );
  });
  return <ul className="app-list list-group">{element}</ul>;
};

export default EmployeesList;
