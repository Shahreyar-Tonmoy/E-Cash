import React from "react";
import { render, screen } from "@testing-library/react";
import UserTransectionTable from "../DashBoard/User Home/UserTransectionTable";


describe("UserTransectionTable", () => {
  const mockData = {
    amounts: "100",
    type: "Cash Out",
    from: [{ phoneNumber: "123456789" }],
    createdAt: "2024-02-09T12:34:56",
    transactionId: "123abc",
  };
  test("renders UserTransectionTable component", () => {
    render(<UserTransectionTable data={mockData} From="ToUser" />);
    screen.debug();
    // Add other assertions
  })
});
