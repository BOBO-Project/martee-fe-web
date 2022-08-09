import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "context/appContext";
import { GlobalStyle } from "styles/_globalStyles";

import Homepage from "./Homepage";

const appRoutes = [{ ...Homepage }];

const RenderRoutes = () => (
  <>
    {GlobalStyle}
    <AppProvider>
      <Routes>
        {appRoutes.map((route: any, i: number) => (
          <Route {...route} key={i} />
        ))}
      </Routes>
    </AppProvider>
  </>
);

export default RenderRoutes;
