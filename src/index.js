import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import img5 from ".././src/assets/img5.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactd2 from "./components/Contactd2";

const Index = () => {
  //Content

       const insta = "https://instagram.com";
      const email = "mailto:rehmnshs@gmail.com";
      const para = "Mohan "
//Content
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          arrayimgs={arrayimgs}
          setarrayimgs={setarrayimgs}
          logo={logo}
          setLogo={setLogo}
          email={email}
          insta={insta}
        />
      ),
    },
    {
      path: "/info",
      element: <Contactd2 para={para} setpara={setpara} insta={insta} email={email} />,
    },


  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));