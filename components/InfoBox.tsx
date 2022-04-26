import React from 'react';
import BadgeList from './BadgeList';
import styled from 'styled-components';
import RatingsBox from './RatingsBox';
import PriceBox from './PriceBox';
import MarchExpo from './MarchExpo';
import Countdown from './Countdown';
import Products from './Products';
import Assurance from './Assurance';
import device from '../breakpoints';
import Product from '../Product';

const Container = styled.div`
  @media ${device.desktop} {
    max-width: 526px;
  }
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

export default function InfoBox({
  name,
  tags,
  rating,
  count,
}: {
  name: Product['name'];
  tags: Product['tags'];
  rating: Product['reviews']['rating'];
  count: Product['reviews']['count'];
}) {
  const renderTags = () => {
    return tags.map((tag) => <Tag key={tag}>{tag}</Tag>);
  };
  return (
    <Container>
      <BadgeList />
      <ProductName>
        {name}
        {renderTags()}
      </ProductName>
      <RatingsBox rating={rating} count={count} />
      <PriceBox />
      <MarchExpo />
      <Countdown />
      <Products />
      <Assurance />
    </Container>
  );
}
