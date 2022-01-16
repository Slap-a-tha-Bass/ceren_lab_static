import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { WiSunset, WiMoonWaxingCrescent1 } from "react-icons/wi";

import { Button } from "../theme/globalStyles";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  font-size: 3rem;
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
      <Link href="/mission">who we are</Link>
      <Link href="/research">research</Link>
      <Link href="/people">people</Link>
      <Link href="/news">news</Link>
      <Link href="/resources">resources</Link>
      <Link href="/join">join</Link>
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
