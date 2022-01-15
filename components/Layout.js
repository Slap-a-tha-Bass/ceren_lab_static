import React from "react";
import styled from "styled-components";
import NavNavbar from "./Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100%;
`;

const Layout = ({ children, ...props }) => {
  return (
    <>
      <NavNavbar {...props} />
      <Container {...props}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
