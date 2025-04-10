// DataList.jsx
const DataList = ({ CardComponent, data, refreshInfo }) => {
  return (
    <div>
      <ul className="list">
        {data.map((item) => (
          <CardComponent key={item.id} item={item} refreshInfo={refreshInfo} />
        ))}
      </ul>
    </div>
  );
};

export default DataList