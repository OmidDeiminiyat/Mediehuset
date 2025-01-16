import React from "react";

export const BuyTickets = ({ isVisible }) => {
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <h2>Table 2</h2>
      <p>This is Table 2 content.</p>
    </div>
  );
};



