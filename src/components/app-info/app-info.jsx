import "./app-info.css";

const AppInfo = ({ getIncrease, totalEmployess }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании </h1>
      <h2>Общее число сотрудников: {totalEmployess}</h2>
      <h2>Премию получат: {getIncrease}</h2>
    </div>
  );
};

export default AppInfo;
