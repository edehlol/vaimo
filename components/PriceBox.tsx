import styled from 'styled-components';

const Container = styled.div`
  height: 64px;
  padding: 16px 0px;
  border-top: 1px solid #e6e7eb;
  border-bottom: 1px solid #e6e7eb;
  margin: 12px 0px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 14px;
  height: 24px;
`;

const Price = styled.h2`
  color: #ff6600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;
const PreviousPrice = styled.h3`
  color: #999999;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  text-decoration: line-through;
  margin: 0;
`;
interface TextProps {
  gray?: boolean;
}
const Text = styled.span<TextProps>`
  color: ${(props) => (props.gray ? '#999999' : '')};
`;

export default function PriceBox() {
  return (
    <Container>
      <PriceContainer>
        <Price>R 78.50 - R 895.31</Price>
        <Text gray>/ Option</Text>
        <Text>2 Options</Text>
        <Text gray>(Min.Order)</Text>
      </PriceContainer>
      <PreviousPrice>R 98.12 - R 1,119.14</PreviousPrice>
    </Container>
  );
}
