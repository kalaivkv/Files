import React from "react";
import { Search, Bell, Mail } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup } from "react-bootstrap";
import './DashBoard.css'

const orders = [
    {
      id: "#003486",
      customer: "Kate Claus",
      date: "10 Jan 2020",
      amount: "$8400",
      status: "On Delivery",
      tracking: "RU00250TF",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "green",
    },
    {
      id: "#004326",
      customer: "Maria Gordon",
      date: "08 Jan 2020",
      amount: "$8400",
      status: "On Delivery",
      tracking: "RU00250TF",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
      color: "green",
    },
    {
      id: "#001258",
      customer: "Nick Peru",
      date: "05 Jan 2020",
      amount: "$1300",
      status: "Pending",
      tracking: "RU00250TF",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      color: "red",
    },
    {
      id: "#0014176",
      customer: "Lian Robinson",
      date: "20 Dec 2019",
      amount: "$880",
      status: "Pending",
      tracking: "RU00250TF",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
      color: "red",
    },
    {
      id: "#0014177",
      customer: "Sam Fisher",
      date: "16 Dec 2019",
      amount: "$9400",
      status: "Pending",
      tracking: "RU00250TF",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "red",
    },
  ];

function DashBoard(){
    return(
            <div className="main">

                <div className="header">

                <nav className="p-4 flex items-center justify-between  version">
      
                     <button className="flex items-center px-4 py-1 Unlock hack">
                        Unlock Full Version <span className="ml-2">➡</span> </button>

                        <InputGroup className="w-50 hack">
                            <Form.Control
                              type="text"
                              placeholder="Search"
                              className="bg-dark text-white border-secondary"
                            />
                            <InputGroup.Text className="bg-dark border-secondary iconss">
                              <Search size={18} className="text-white " />
                            </InputGroup.Text>
                        </InputGroup>

                        
                        <div className="flex items-center gap-4 right-icons ">
                          <Bell className="text-white relative icon" size={25} />
                          <Mail className="text-white relative icon" size={25} />
                          
                          <div className="text icon">
                            P
                           </div>
                        </div>
                    </nav>
                  
                </div>
               
            

                <div className="dashboard-header ">
                  <div className="breadcrumb">
                    <span>Main</span> <span className="divider">{">"}</span> <span className="current">Dashboard</span>
                  </div>
                  <div className="header-actions">
                    <select className="date-selector">
                      <option>15 Jan 2020</option>
                      <option>16 Jan 2020</option>
                      <option>17 Jan 2020</option>
                    </select>
                    <button className="download-btn">Download Report</button>
                  </div>
                </div>
              

                <div className="recent-orders">
                  <h2>Recent Order</h2>
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
  
            </div>
    );
}

export default DashBoard;