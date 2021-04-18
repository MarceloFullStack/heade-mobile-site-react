import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* align-items: center; */
  li {
    padding: 18px 10px;
  }
  @media (max-width: 780px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    align-items: center;
    padding-top: 3.5rem;
    transition: 0.3s ease-in-out;
    li {
      color: white;
    }
  }
`;
const RightNav = ({ open }) => {
  const menuItems = [
    { nome: "Home" },
    { nome: "Servicos" },
    { nome: "Sobre Nós" },
    { nome: "LOGOUT" },
  ];
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Serviços</li>
      <li>Sobre nós</li>
      <li>LogOut</li>
    </Ul>
  );
};

export default RightNav;
