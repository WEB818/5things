import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: lightgreen;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  z-index: 1;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

export const StyledBurger = styled.button`
  position: fixed;
  top: 2%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "white" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
