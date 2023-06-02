import React from 'react'
import styled from 'styled-components';
// 스타일드 컴포넌트로 스타일을 정의합니다.
// b60021 빨간색
//FFFFFF 하양
//#000 검정
// #6b0619 빨간색 배경
const HeaderContainer = styled.header`
  background-color: #191919;
  padding: 16px;
  position: relative;
  height: 70px;
`;

const HeaderInner = styled.div`
  width: 1400px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
`

const Logo = styled.h1`
  color: #6b0619;
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  gap: 16px;
  margin-top: 4px;
  right: 30px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  color: #c5c2c2;

  &:hover {
    color:  #b60021;
  }
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>Spreet</Logo>
        <Nav>
          <NavLink href="#">소개</NavLink>
          <NavLink href="#">행사</NavLink>
          <NavLink href="#">로그인</NavLink>
        </Nav>
      </HeaderInner>
  </HeaderContainer>
  );
};
export default Header;