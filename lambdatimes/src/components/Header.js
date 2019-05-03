import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Heady = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
    @media (min-width: 1280px) {
      width: 1280px;
    }

`;

const HeadyH = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeadDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

const HeadTemp = styled(HeadDate)`
  text-align: right;
  
`;


const Header = () => {
  return (
    <Heady>
      <HeadDate>SMARCH 32, 2018</HeadDate>
      <HeadyH>Lambda Times</HeadyH>
      <HeadTemp>98°</HeadTemp>
    </Heady>
  )
}

export default Header