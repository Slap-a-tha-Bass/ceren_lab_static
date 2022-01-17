import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { respondTo } from "../breakpoints/_respondTo";
import { Button, Ul, Li } from "../theme/globalStyles";
import { WiSunset, WiMoonWaxingCrescent1 } from "react-icons/wi";
import { BiMenu } from "react-icons/bi";
const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  font-size: 1.5rem;
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
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsThemed((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", searchWidth);
      searchWidth();
      return () => window.removeEventListener("resize", searchWidth);
    }
  }, []);
  useEffect(() => {
    if (windowWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);
  const expandButton = () => {
    setIsClicked((isClicked) => !isClicked);
  };
  return (
    <Container className="nav-link transition">
      <Logo>
        <Link href="/">proSCI</Link>
      </Logo>
      {isMobile ? (
        <Button onClick={expandButton}>
          {isClicked && (
            <Ul>
              <Li>
                <Link href="/mission">who we are</Link>
              </Li>
              <Li>
                <Link href="/people">people</Link>
              </Li>
              <Li>
                <Link href="/news">news</Link>
              </Li>
              <Li>
                <Link href="/resources">resources</Link>
              </Li>
              <Li>
                <Link href="/join">join</Link>
              </Li>
            </Ul>
          )}
          {!isClicked && <BiMenu style={{ fontSize: "2rem" }} />}
        </Button>
      ) : (
        <div>
          <Link href="/mission">who we are</Link>
          <Link href="/research">research</Link>
          <Link href="/people">people</Link>
          <Link href="/news">news</Link>
          <Link href="/resources">resources</Link>
          <Link href="/join">join</Link>
        </div>
      )}
      {isThemed ? (
        <Button onClick={themeToggler}>
          <WiMoonWaxingCrescent1 />
        </Button>
      ) : (
        <Button onClick={themeToggler}>
          <WiSunset />
        </Button>
      )}
    </Container>
  );
};

export default Navbar;
