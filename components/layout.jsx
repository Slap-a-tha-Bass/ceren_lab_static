import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Footer from "./footer";

const Container = styled.div`
  height: 100%;
`;

const Layout = ({ children, ...props }) => {
  console.log(
    "%c Used NextJS and Styled Components for this project.",
    "border: 1px solid rgb(31, 255, 160); padding: 10px; border-radius: 5px; color: rgb(31, 255, 160); background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  console.log(
    "%c corey@deloach.dev",
    "border: 1px solid rgb(31, 255, 160); padding: 10px; border-radius: 5px; color: rgb(31, 255, 160); background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  
  return (
    <>
      <Navbar {...props} />
      <Container {...props}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
