import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyleBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: ${({ open }) => (open ? "#ccc" : "#333")};
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(100px)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export default function Burguer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyleBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyleBurguer>
      <RightNav open={open} />
    </>
  );
}
