import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "context/appContext";
import { GlobalStyle } from "styles/_globalStyles";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ServicePage from "./ServicePage";
import PortoPage from "./PortoPage";
import PortoDetail from "./PortoDetailPage";
import ReviewsPage from "./ReviewsPage";
import BlogPage from "./BlogPage";
import ContactUsPage from "./ContactUsPage";

const appRoutes = [
  { ...Homepage },
  { ...AboutPage },
  { ...ServicePage },
  { ...PortoPage },
  { ...PortoDetail },
  { ...ReviewsPage },
  { ...BlogPage },
  { ...ContactUsPage },
];

const RenderRoutes = () => (
  <>
    {GlobalStyle}
    <AppProvider>
      <Navbar />
      <Routes>
        {appRoutes.map((route: any, i: number) => (
          <Route {...route} key={i} />
        ))}
      </Routes>
      <Footer />
    </AppProvider>
  </>
);

export default RenderRoutes;
