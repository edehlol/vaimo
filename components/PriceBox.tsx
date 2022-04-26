import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
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
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  color: #edf0f3;
  width: 11px;
  text-align: center;
`;

export default function PriceBox() {
  return (
    <Container>
      <PriceContainer>
        <Text color="orange" size="large" weight="bold">
          R 78.50 - R 895.31
        </Text>
        <Text color="gray">/ Option</Text>
        <Divider>|</Divider>
        <Text color="gray">(Min.Order)</Text>
      </PriceContainer>
      <Text color="gray" style={{ textDecoration: 'line-through' }}>
        R 98.12 - R 1,119.14
      </Text>
    </Container>
  );
}
