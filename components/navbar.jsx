import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Ul, Li, Container, Logo } from "../theme/globalStyles";
import { WiSunset, WiMoonWaxingCrescent1 } from "react-icons/wi";
import { BiMenu } from "react-icons/bi";
import mobileSetter from "../hooks/mobileSetter";

const Navbar = ({ setTheme, theme }) => {
  const [isThemed, setIsThemed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { isMobile } = mobileSetter();

  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsThemed((prev) => !prev);
  };
  const expandButton = () => {
    setIsClicked((isClicked) => !isClicked);
  };
  return (
    <Container className="nav-link transition">
      <Link href="/">
        <Logo>proSCI</Logo>
      </Link>
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
