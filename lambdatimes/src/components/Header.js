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

const HeadDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 25px;
  flex: 1;
`;

const HeadTemp = styled(HeadDate)`
  text-align: right;
  
`;


const Header = () => {
  return (
    <Heady>
      <HeadDate>SMONTH 32, 2019</HeadDate>
      <h1 class="sc-dnqmqq" >The Lambda Times</h1>
      <HeadTemp>68°</HeadTemp>
    </Heady>
  )
}

export default Header