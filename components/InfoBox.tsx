import React from 'react';
import BadgeList from './BadgeList';
import styled from 'styled-components';
import RatingsBox from './RatingsBox';
import PriceBox from './PriceBox';
import MarchExpo from './MarchExpo';
import Countdown from './Countdown';
import Products from './Products';
import Assurance from './Assurance';

const Container = styled.div`
  max-width: 526px;
`;

const ProductName = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
`;

const Tag = styled.span`
  color: #999999;
  background-color: #e8ecf0;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 2px;
  height: 20px;
  float: right;
`;

export default function InfoBox() {
  return (
    <Container>
      <BadgeList />
      <ProductName>
        2021 hot selling GPS 5G quadcopter drone with camera remote control aircraft drone WiFi mini
        drone camera
        <Tag>Hot sale products</Tag>
      </ProductName>
      <RatingsBox />
      <PriceBox />
      <MarchExpo />
      <Countdown />
      <Products />
      <Assurance />
    </Container>
  );
}
