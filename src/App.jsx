import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    
    fetch("https://donation-dashboard-api.onrender.com/api/donations")

      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((err) => console.error(err));
  }, []);

  const totalAmount = donations.reduce(
    (sum, d) => sum + d.amount,
    0
  );

  const totalDonors = donations.length;

  return (
    <div className="container">
      <h1>Donation Tracking Dashboard</h1>

      <div className="cards">
        <div className="card green">
          <h2>₹ {totalAmount}</h2>
          <p>Total Donations</p>
        </div>

        <div className="card blue">
          <h2>{totalDonors}</h2>
          <p>Total Donors</p>
        </div>
      </div>

      <h2>Recent Donations</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((d, index) => (
            <tr key={index}>
              <td>{d.name}</td>
              <td>{d.amount}</td>
              <td>{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
