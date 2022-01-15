import styled, { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: auto;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.primary};
      background: ${theme.bgColor};
      color: ${theme.text};
    `};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme && theme.fonts.heading};
  line-height: 1.1;
  text-transform: capitalize;
  color: ${({ theme }) => theme && theme.info}
}

h1 {
  font-size: 2.75rem;

  margin: 0.75rem 0;
}

h2 {
  font-size: 2.25rem;

  margin: 0.75rem 0;
}

h3 {
  font-size: 2rem;

  margin: 0.75rem 0;
}

h4 {
  font-size: 1.75rem;

  margin: 0.75rem 0;
}

h5 {
  font-size: 1.5rem;

  margin: 0.75rem 0;
}

h6 {
  font-size: 1rem;

  margin: 0.75rem 0;
}

p {
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

a {
  color: ${({ theme }) => theme && theme.info};
  text-decoration: none;
  border: none;
  padding: ${props => props.padding || 1}vw;
  margin: ${props => props.margin || 0}vw;
  &:hover {
    filter: brightness(2);
  }
  :active {
    color: ${({ theme }) => theme && theme.info};
    font-weight: bolder;
    border-bottom: 1px solid ${({ theme }) => theme && theme.info};
  }
}
button {
  font-family: ${({ theme }) => theme && theme.fonts.heading};
}
`;
export const Button = styled.button`
  color: ${({ theme }) => theme && theme.info};
  background-color: ${({ theme }) => theme && theme.toggleColor};
  border: none;
  border-radius: 0.5rem;
  padding: ${props => props.padding || 4}px;
  font-size: ${(props) => props.fontSize || 1.5}rem;
  &:hover {
    cursor: pointer;
  }
`;
export const CardButton = styled.button`
  background-color: ${({ theme }) => theme && theme.primary};
  border: none;
  border-radius: 0.5rem;
  padding: ${props => props.padding || 4}px;
  margin: ${props => props.margin || 0}px;
  font-size: ${(props) => props.fontSize || 1.5}rem;
  &:hover {
    cursor: pointer;
  }
`;
export const CenterDiv = styled.div`
  display: flex;
  place-content: center;
`;
export const ChangeBackgroundColor = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme && theme.text};
  padding: 3vw;
`;
export const SameBackgroundColor = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme && theme.primary};
  padding: 3vw;
`;
export const CardContainter = styled.div`
  width: 50vw;
  background-color: ${({ theme }) => theme && theme.primary};
  padding: 2vw;
`;
export const CardContainter2 = styled.div`
  width: 50vw;
  background-color: ${({ theme }) => theme && theme.toggleColor};
  padding: 2vw;
`;
export const SpanHeader = styled.span`
  padding-left: 1vw;
  padding-right: 1vw;
  color: ${({ theme }) => theme && theme.highlight};
`;
export const SpanText = styled.span`
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  color: ${({ theme }) => theme && theme.info};
`;
