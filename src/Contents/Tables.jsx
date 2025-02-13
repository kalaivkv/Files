import { useEffect, useRef, useState } from "react";
import "./Tables.css";
import { FaChartBar } from "react-icons/fa";


const IndeterminateCheckbox = ({ checked, indeterminate, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return <input type="checkbox" ref={ref} checked={checked} {...rest} />;
};


const tableData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    description: "Palo Alto",
    type: "JPEG",
    dimensions: "200x150",
    date: "September 14, 2012",
    size: "45.6 KB",
    status: 70,
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    description: "The Sky",
    type: "PSD",
    dimensions: "2400x1455",
    date: "November 14, 2012",
    size: "15.3 MB",
    status: 50, 
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    description: "Down the road",
    type: "JPEG",
    dimensions: "200x150",
    date: "September 14, 2012",
    size: "49.0 KB",
    status: 80, 
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    description: "The Edge",
    type: "PNG",
    dimensions: "210x160",
    date: "September 15, 2012",
    size: "69.1 KB",
    status: 30, 
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description: "Fortress",
    type: "JPEG",
    dimensions: "1452x1320",
    date: "October 01, 2012",
    size: "2.3 MB",
    status: 60,
  },
];

const getStatusColor = (status) => {
  if (status >= 70) return "green";
  if (status >= 50) return "orange";
  if (status >= 30) return "red";
  return "gray";
};

const tableEntries = [
  { id: 1, product: "On the Road", price: "$25 224.2", sales: "blue" },
  { id: 2, product: "HP Core i7", price: "$87 346.1", sales: "green" },
  { id: 3, product: "Let's Dance", price: "$57 944.6", sales: "teal" },
  { id: 4, product: "Air Pro", price: "$118 533.1", sales: "red" },
  { id: 5, product: "Version Control", price: "$72 854.5", sales: "orange" },
];

const Tables = () => {

  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(tableEntries.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (id) => {
    setSelectedRows(prevSelectedRows =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter(rowId => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const isAllSelected = tableEntries.length === selectedRows.length;
  const isSomeSelected = selectedRows.length > 0 && selectedRows.length < tableEntries.length;

  return (
    <div className="table-container">
      <h2>Tables</h2>
      <div className="table-card">
        <h3 className="table-title">Table Styles</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Description</th>
              <th>Info</th>
              <th>Date</th>
              <th>Size</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt={item.description} className="thumbnail" />
                </td>
                <td>{item.description}</td>
                <td>
                  <span className="info">
                    Type: {item.type} <br />
                    Dimensions: {item.dimensions}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>{item.size}</td>
                <td>
                  <div className="status-bar">
                    <div
                      className="progress"
                      style={{ width: `${item.status}%`, backgroundColor: getStatusColor(item.status) }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button className="send-btn">Send to...</button>
          <button className="clear-btn">Clear ▼</button>
        </div>
      </div>

      <div className="table-card">
        <h3 className="table-title">Table Styles</h3>
        <table>
          <thead>
            <tr>
              <th>
              <IndeterminateCheckbox
                checked={isAllSelected}
                indeterminate={isSomeSelected}
                onChange={handleSelectAll}
              />
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelection(item.id)}
                  />
                </td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>
                  <FaChartBar className={`sales-icon ${item.sales}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
