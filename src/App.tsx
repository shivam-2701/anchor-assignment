import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing";
import "./App.css";
import EarningsPage from "./pages/Earning";
import Modal from "./components/ui/Modal";
import Card from "./components/ui/Card";
import RequestForCallback from "./components/CallBack";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/earnings/:id",
      element: <EarningsPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Modal>
        <RequestForCallback />
      </Modal>
    </div>
  );
}

export default App;
