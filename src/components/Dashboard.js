import React from "react";

const Dashboard = () => {
  fetch("https://covid19.mathdro.id").then(response =>
    console.log("res is", response)
  );
  return (
    <div>
      {" "}
      <h3>Dashboard</h3>{" "}
    </div>
  );
};

export default Dashboard;
