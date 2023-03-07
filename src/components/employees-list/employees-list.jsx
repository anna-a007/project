import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDeleteItem ,onToggleIncrease,onToggleRice  }) => {
  const element = data.map((item) => {
    // const { id, ...itemProps } = item; //вытягиваем из объекта item
    return (
      <EmployeesListItem
        {...item}
        key={item.id}
        // onDeleteItem={() => onDeleteItem(item.id)}  // функция, отв.за удаление из массива
        onDeleteItem={() => onDeleteItem(item.id)}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRice={()=> onToggleRice (item.id)}

      />
    );
  });
  return <ul className="app-list list-group">{element}</ul>;
};

export default EmployeesList;
