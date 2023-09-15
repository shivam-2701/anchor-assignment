import React from "react";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing";
import "./App.css";
import EarningsPage from "./pages/Earning";
import axios from "./config/axios";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/earnings/:id",
      element: <EarningsPage />,
      loader: async ({ params }) => {
        return defer({
          promise: axios.post("/youtube-earning", {
            id: params.id,
          }),
        });
      },
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
