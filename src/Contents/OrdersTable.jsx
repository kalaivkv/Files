import React from "react";

const orders = [
  { id: "#003486", customer: "Kate Claus", date: "10 Jan 2020", amount: "$8400", status: "On Delivery", tracking: "RU00250TF", img: "https://randomuser.me/api/portraits/women/44.jpg", color: "green" },
  { id: "#004326", customer: "Maria Gordon", date: "08 Jan 2020", amount: "$8400", status: "On Delivery", tracking: "RU00250TF", img: "https://randomuser.me/api/portraits/women/47.jpg", color: "green" },
  { id: "#001258", customer: "Nick Peru", date: "05 Jan 2020", amount: "$1300", status: "Pending", tracking: "RU00250TF", img: "https://randomuser.me/api/portraits/men/45.jpg", color: "red" },
  { id: "#0014176", customer: "Lian Robinson", date: "20 Dec 2019", amount: "$880", status: "Pending", tracking: "RU00250TF", img: "https://randomuser.me/api/portraits/women/40.jpg", color: "red" },
  { id: "#0014177", customer: "Sam Fisher", date: "16 Dec 2019", amount: "$9400", status: "Pending", tracking: "RU00250TF", img: "https://randomuser.me/api/portraits/women/50.jpg", color: "red" },
];

function OrdersTable() {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Invoices</th>
              <th>Customers</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Tracking</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <span className={`status-dot ${order.color}`}></span>
                  {order.id}
                </td>
                <td className="customer">
                  <img src={order.img} alt={order.customer} />
                  {order.customer}
                </td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td className={`status ${order.color}`}>{order.status}</td>
                <td>{order.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
