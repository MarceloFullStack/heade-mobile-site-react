import React from "react";
import styled from "styled-components";
import Burguer from "./Burguer";

const Nav = styled.nav`
display:flex;
justify-content: space-between;
width: 100%;
height: 67;
padding: 0 20px;
border-bottom: 1px solid #f1f1f1;
.logo{
  padding: 15px 0;
}
`
export default function NavBar() {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burguer/>
    </Nav>
  );
}
