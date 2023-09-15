import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      loader: ({ params }) => {
        return axios
          .post("/youtube-earning", {
            id: params.id,
          })
          .then((data) => {
            return data;
          })
          .catch((err) => console.log(err));
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
