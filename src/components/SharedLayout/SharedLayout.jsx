/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Loader } from "../Loader/Loader";

import { ContainerWrraper } from "./SharedLayout.styled";

// import { Container } from "./SharedLayout.styled";

export const SharedLayout = ({avatarURL}) => {
  return (
    <>
      <Header avatarURL={avatarURL} />
      <ContainerWrraper>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </ContainerWrraper>
      <Footer />
    </>
  );
};
export default SharedLayout;
