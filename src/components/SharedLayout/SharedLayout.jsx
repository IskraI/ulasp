import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { ContainerWrraper } from "./SharedLayout.styled";

// import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <ContainerWrraper>
      <Header />
      <main>
        <Suspense fallback={"Loader"}>
          <Outlet />
        </Suspense>
      </main>
        <Footer />
        </ContainerWrraper>
    </>
  );
};
export default SharedLayout;
