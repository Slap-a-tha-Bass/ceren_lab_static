import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { WiSunset, WiMoonWaxingCrescent1 } from "react-icons/wi";
import { respondTo } from "../breakpoints/_respondTo";
import { Button, A } from "../theme/globalStyles";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  ${respondTo.sm`
    font-size: calc(1.5rem + 1vw);
  `}
  ${respondTo.md`
    font-size: calc(2rem + 1vw);
  `}
  ${respondTo.lg`
    font-size: calc(2.5rem + 1vw);
  `}
`;
const Navbar = ({ setTheme, theme }) => {
  const [isThemed, setIsThemed] = useState(false);
  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsThemed((prev) => !prev);
  };
  return (
    <Container className="nav-link transition">
      <Logo>
        <Link href="/">proSCI</Link>
      </Logo>
      <A href="/mission">who we are</A>
      <A href="/research">research</A>
      <A href="/people">people</A>
      <A href="/news">news</A>
      <A href="/resources">resources</A>
      <A href="/join">join</A>
      {isThemed ? (
        <Button primary onClick={themeToggler}>
          <WiMoonWaxingCrescent1 />
        </Button>
      ) : (
        <Button primary onClick={themeToggler}>
          <WiSunset />
        </Button>
      )}
    </Container>
  );
};

export default Navbar;
