import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"Loader"}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
export default SharedLayout;
