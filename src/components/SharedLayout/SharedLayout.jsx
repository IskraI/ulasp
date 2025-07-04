/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

import { ContainerWrraper } from './SharedLayout.styled';

export const SharedLayout = ({ avatarURL, logo }) => {
  return (
    <>
      <Header avatarURL={avatarURL} logo={logo} />

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
