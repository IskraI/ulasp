/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

import { ContainerWrraper } from './SharedLayout.styled';

import MobileSidebar from '../SiteBarNav/SiteBarNav.mobile';

export const SharedLayout = ({ avatarURL, logo }) => {
  return (
    <>
      <Header avatarURL={avatarURL} logo={logo} />

      <ContainerWrraper>
        {/* <MobileSidebar></MobileSidebar> */}
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
